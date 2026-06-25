#!/usr/bin/env python3

# Script for syncing a language pack from an existing Pentaho installation.
#
# Existing translations are reused and any missing tokens are appended with "<TRANSLATE ME>"


import os
import sys
import shutil
import zipfile
import re
import tempfile

try:
    import langid
except Exception:
    langid = None

languageCode = sys.argv[1] # language as it is typed by the user
languageCode_underscore = languageCode.replace('-', '_').replace(' ', '_'); # this is the java way, valid for the .properties files
languageCode_hyphen = languageCode.replace('_', '-').replace(' ', '-');  # this seems to be the IETF standard, and what dojo and all .js are using
languageCode_slash = '/' + languageCode + '/';
suffix = '_' + languageCode_underscore + '.properties';

jar_whitelist = [ # list of jars that will be scanned for messages.
    # tomcat
    'pentaho-actionsequence-dom',
    'pentaho-bi-platform-ee',
    'pentaho-chartbeans',
    'pentaho-connections',
    'pentaho-metadata',
    'pentaho-platform-',
    'pentaho-reporting-engine',
    #
    #system
    #
    'common-ui',
    # data-access
    'pentaho-bi-platform-data-access',
    'pentaho-database-gwt',
    'pentaho-modeler',
    # dashboards
    'pentaho-dashboard',
    'pentaho-dashboard-chart-editor',
    'pentaho-mql-editor',
    # pivot4j
    'pivot4j-analytics',
    'pivot4j-core'
]
#file_blacklist = ['system/common-ui/resources/messages']

origin_folder = os.path.abspath(sys.argv[2].replace('file://', ''))
destination_folder = os.path.abspath(sys.argv[3].replace('file://', ''))
plugin_folder =  os.path.realpath(os.path.join(os.getcwd(), '..', '..')) # There is a subtle difference between using os.dirname(__FILE__) and os.getcwd()

force = False
prune = '--prune' in sys.argv
keep_extra_folders = '--keep-extra-folders' in sys.argv
refresh_existing_js_markers = '--refresh-existing-js-markers' in sys.argv
translation_marker = '<TRANSLATE ME>'# not used anymore
if languageCode.startswith('en'):
    translation_marker = ''

seen_dst_files = set()

suffix = '_' + languageCode_underscore + '.properties';

isDebug = False #(len(sys.argv) > 3) and (sys.argv[4] is '-debug')
_lang_cache = {}
_lang_detector_unavailable_warned = False


def debug(msg):
    if isDebug:
        print(msg)


def detect_language_langid(value):
    # Python-first detector for performance. Keep strict confidence checks.
    text = value.strip()
    if text == '':
        return 'und'

    if langid is None:
        return None

    try:
        best_lang, best_score = langid.classify(text)
        ranked = langid.rank(text)
        second_score = ranked[1][1] if len(ranked) > 1 else (best_score - 100.0)
        confidence_gap = best_score - second_score

        if best_lang == 'en' and confidence_gap >= 2.5:
            return 'eng'
        if confidence_gap >= 3.0:
            return best_lang
        return 'und'
    except Exception:
        return 'und'


def detect_language(value):
    global _lang_detector_unavailable_warned

    key = value.strip()
    if key in _lang_cache:
        return _lang_cache[key]

    if key == '':
        _lang_cache[key] = 'und'
        return 'und'

    lang_from_python = detect_language_langid(key)
    if lang_from_python is not None:
        _lang_cache[key] = lang_from_python
        return lang_from_python

    lang = 'und'
    if not _lang_detector_unavailable_warned:
        print('WARN: Python lang detector unavailable (install optional: python3 -m pip install langid); property marker refresh will be conservative.')
        _lang_detector_unavailable_warned = True

    _lang_cache[key] = lang
    return lang


def warm_language_cache(values, batch_size=128):
    pending = []
    for value in values:
        key = value.strip()
        if key and key not in _lang_cache:
            pending.append(key)

    if not pending:
        return

    # Batch-friendly path for Python detector: avoid subprocess overhead completely.
    if langid is not None:
        for i in range(0, len(pending), batch_size):
            chunk = pending[i:i + batch_size]
            for text in chunk:
                _lang_cache[text] = detect_language_langid(text) or 'und'
        return

    # No fallback detector by design; keep conservative default.
    for text in pending:
        _lang_cache[text] = 'und'


def decode_lines(lines, encodings=('utf-8', 'iso-8859-1', 'ascii')):
    decoded = []
    for line in lines:
        if isinstance(line, bytes):
            text = None
            for enc in encodings:
                try:
                    text = line.decode(enc)
                    break
                except Exception:
                    continue
            if text is None:
                text = line.decode('utf-8', errors='ignore')
            decoded.append(text)
        else:
            decoded.append(line)
    return decoded

def replace_version(dst):
    dst = re.sub(r'-8.\d.\d.\d-\d+', '', dst)
    dst = re.sub(r'-8.\d.\d', '', dst)
    dst = re.sub(r'-5.\d.\d.\d-\d+', '', dst)
    dst = re.sub(r'-5.\d.\d', '', dst)
    dst = re.sub(r'-6.\d.\d.\d-\d+', '', dst)
    dst = re.sub(r'-6.\d.\d', '', dst)
    dst = re.sub(r'-7.\d.\d.\d-\d+', '', dst)
    dst = re.sub(r'-7.\d.\d', '', dst)
    dst = re.sub(r'-\d.\d-', '-', dst) # remove version numbers
    return dst


def is_localized_translation_jar(filename):
    # Ignore language-pack installed jars like pentaho-bi-platform-ee_es.jar.
    lower = filename.lower()
    return re.match(r'.*_[a-z]{2}(?:[_-][a-z]{2})?\.jar$', lower) is not None


def rreplace(s, old, new, occurrence=1):
    # like str.replace, but starts from the end
    # by default, only the last occurrence is replaced
    li = s.rsplit(old, occurrence)
    return new.join(li)

def ensure_parent_folder_exists(dst):
    debug('ensuring parent folder of ' + dst +  'exists')
    dst_parent = os.path.dirname(dst);
    if not os.path.exists(dst_parent):
        os.makedirs(dst_parent)
    return dst # allow for chaining

def copy(src, dst, patch=False, marker=translation_marker):
    seen_dst_files.add(os.path.realpath(dst))
    ensure_parent_folder_exists(dst)

    # Copy files, optionally patching an existing file
    debug('\nCopying: ' +  os.path.realpath(os.path.join(origin_folder, src)) + '\nto ' + dst)
    if patch:
        with open(src, 'r', encoding='utf-8', errors='ignore') as fin:
            lines_src = fin.readlines()

        add_missing_properties(lines_src, dst, encoding='utf-8', marker=marker)
    else:
        shutil.copy2(src, dst)
        convert_to_utf8(dst)

def add_missing_properties(lines_src, dst_localised, encoding='utf_8', marker=translation_marker):
    seen_dst_files.add(os.path.realpath(dst_localised))

    def parse_property(line):
        if '=' not in line:
            return None, None
        left, right = line.split('=', 1)
        key = left.strip()
        if key == '':
            return None, None
        return key, right.rstrip('\n')

    def normalize_trailing_colon(value):
        trimmed = value.strip()
        if trimmed.endswith(':'):
            return trimmed[:-1].strip()
        return trimmed

    def has_trailing_colon(value):
        return value.rstrip().endswith(':')

    def looks_like_english_text(value):
        # Use langid + conservative heuristics to avoid overwriting non-English text.
        text = value.strip()
        if len(text) < 15:
            return False

        # Remove markup/placeholders/code-ish noise before language checks.
        text = re.sub(r'<[^>]*>', ' ', text)
        text = re.sub(r'%\{\d+\}', ' ', text)
        text = re.sub(r'&[a-zA-Z]+;', ' ', text)
        text = re.sub(r'\\["\'ntbrf]', ' ', text)
        text = re.sub(r'[_=/#()\[\]{}:;,+*|]', ' ', text)
        text = re.sub(r'\s+', ' ', text).strip()

        if len(text) < 15:
            return False
        if any(ord(ch) > 127 for ch in text):
            return False

        words = re.findall(r'[A-Za-z]+', text.lower())
        if len(words) < 3:
            return False

        # Require a meaningful number of words to avoid classifying snippets.
        meaningful = [w for w in words if len(w) >= 3]
        if len(meaningful) < 4:
            return False

        english_hints = {
            'the', 'and', 'of', 'to', 'in', 'for', 'with', 'from', 'only',
            'have', 'has', 'been', 'is', 'are', 'you', 'your', 'not', 'do',
            'want', 'all', 'first', 'shown', 'select', 'use', 'this', 'that',
            'value', 'values', 'number', 'data', 'label', 'labels', 'when',
            'where', 'which', 'will', 'can', 'cannot'
        }
        hits = 0
        for w in meaningful:
            if w in english_hints:
                hits += 1

        # Early exit: no lexical hints and not enough content to justify detection.
        if hits == 0 and len(meaningful) < 10:
            return False

        lang = detect_language(text)
        # Be strict: detector says English and enough lexical hints are present.
        return lang == 'eng' and (hits >= 2 or (hits >= 1 and len(meaningful) >= 10))

    def add_trailing_colon_preserve_style(value):
        # Keep destination spacing (e.g. "Label " -> "Label :").
        return value.rstrip() + ':'

    def remove_trailing_colon_preserve_style(value):
        # Remove only the trailing colon and keep any space before it.
        s = value.rstrip()
        if s.endswith(':'):
            s = s[:-1]
        return s

    if os.path.exists(dst_localised):
        with open(dst_localised, 'r+', encoding=encoding, errors='ignore') as fout:
            fout.seek(0)
            lines_dst = fout.readlines()

            dst_index_by_key = {}
            for idx, line in enumerate(lines_dst):
                key, _ = parse_property(line)
                if key is not None and key not in dst_index_by_key:
                    dst_index_by_key[key] = idx

            appended = []
            changed = False
            refresh_candidates = []
            lang_candidates = set()
            for src_line in lines_src:
                src_key, src_value = parse_property(src_line)
                if src_key is None:
                    continue

                if src_key not in dst_index_by_key:
                    debug(' Adding missing key: ' + src_key + ' to file: ' + dst_localised)
                    appended.append(src_line.strip() + marker + '\n')
                    continue

                # Keep translated lines untouched, but refresh stale untranslated values.
                dst_idx = dst_index_by_key[src_key]
                dst_line = lines_dst[dst_idx]
                if marker in dst_line:
                    _, dst_value = parse_property(dst_line)
                    dst_value_no_marker = dst_value.replace(marker, '').strip()
                    src_value_norm = src_value.strip()
                    if dst_value_no_marker != src_value_norm:
                        refresh_candidates.append((dst_idx, src_line, dst_value_no_marker, src_value_norm))
                        if dst_value_no_marker:
                            lang_candidates.add(dst_value_no_marker)
                        if src_value_norm:
                            lang_candidates.add(src_value_norm)
                else:
                    # For already translated entries, keep text untouched except a
                    # source-driven trailing-colon punctuation change.
                    _, dst_value = parse_property(dst_line)
                    dst_value_norm = dst_value.strip()
                    src_value_norm = src_value.strip()
                    if dst_value_norm != src_value_norm:
                        same_text_ignoring_colon = (
                            normalize_trailing_colon(dst_value_norm) == normalize_trailing_colon(src_value_norm)
                        )
                        src_has_colon = has_trailing_colon(src_value)
                        dst_has_colon = has_trailing_colon(dst_value)
                        colon_differs = dst_has_colon != src_has_colon
                        if same_text_ignoring_colon and colon_differs:
                            if src_has_colon:
                                new_dst_value = add_trailing_colon_preserve_style(dst_value)
                            else:
                                new_dst_value = remove_trailing_colon_preserve_style(dst_value)
                            lines_dst[dst_idx] = src_key + '=' + new_dst_value + '\n'
                            changed = True

            if refresh_candidates:
                warm_language_cache(lang_candidates)
                for dst_idx, src_line, dst_value_no_marker, src_value_norm in refresh_candidates:
                    if looks_like_english_text(dst_value_no_marker) and looks_like_english_text(src_value_norm):
                        lines_dst[dst_idx] = src_line.strip() + marker + '\n'
                        changed = True

            if appended or changed:
                fout.seek(0)
                fout.truncate(0)
                fout.writelines(lines_dst)
                if appended:
                    fout.writelines(appended)

    else:
        debug('Patching: ' +  os.path.realpath(dst_localised))
        ensure_parent_folder_exists(dst_localised)
        with open(dst_localised, 'w', encoding='utf-8') as fout:
            for line in lines_src:
                keyval = line.split('=')
                if len(keyval) > 1:
                    #print ' Adding missing key: ' + keyval[0] + ' to file: ' + dst_localised
                    fout.write(line.strip() + translation_marker + '\n')
                else:
                    fout.write(line)

def unescape_octal(filename, backup=False):
    # not yet working!
    f = ''
    try:
        f = open(filename, 'r', encoding='utf-8', errors='ignore').read()
    except Exception:
        pass

    # the following is a nice try that unescapes all \n :(
    data = codecs.decode(f.encode('utf-8'), 'unicode_escape')
    if backup:
        # now get the absolute path of our filename and append .bak
        # to the end of it (for our backup file)
        fpath = os.path.abspath(filename)
        newfilename = fpath + '.bak'
        # and make our backup file with shutil
        shutil.copy(filename, newfilename)
    # and at last convert it to utf-8
    f = open(filename, 'w', encoding='utf-8')
    try:
        f.write(data)
    except Exception as e:
        print(e)
    finally:
        f.close()


def convert_to_utf8(filename, backup=False):
    # gather the encodings you think that the file may be
    # encoded inside a tuple
    encodings = ('utf-8','iso-8859-1', 'ascii')

    # try to open the file and exit if some IOError occurs
    try:
        f = open(filename, 'rb').read()
    except Exception:
        sys.exit(1)

    # now start iterating in our encodings tuple and try to
    # decode the file
    for enc in encodings:
        try:
            # try to decode the file with the first encoding
            # from the tuple.
            # if it succeeds then it will reach break, so we
            # will be out of the loop (something we want on
            # success).
            # the data variable will hold our decoded text
            data = f.decode(enc)
            break
        except Exception:
            # if the first encoding fail, then with the continue
            # keyword will start again with the second encoding
            # from the tuple an so on.... until it succeeds.
            # if for some reason it reaches the last encoding of
            # our tuple without success, then exit the program.
            if enc == encodings[-1]:
                sys.exit(1)
            continue

    if backup:
        # now get the absolute path of our filename and append .bak
        # to the end of it (for our backup file)
        fpath = os.path.abspath(filename)
        newfilename = fpath + '.bak'
        # and make our backup file with shutil
        shutil.copy(filename, newfilename)

    # and at last convert it to utf-8
    f = open(filename, 'w', encoding='utf-8')
    try:
        f.write(data)
    except Exception as e:
        print(e)
    finally:
        f.close()

def ensure_trailing_newline(filename):
    with open(filename, 'rb+') as f:
        f.seek(0, os.SEEK_END)
        if f.tell() == 0:
            return
        f.seek(-1, os.SEEK_END)
        if f.read(1) != b'\n':
            f.write(b'\n')

def mark_js_line_values(line, marker=translation_marker):
    if marker == '':
        return line

    # Mark JS string values in key/value pairs: "key": "value" or 'key': 'value'.
    pattern = re.compile(r'(:\s*)(["\'])(.*?)(\2)')

    def repl(match):
        prefix, quote, value, _ = match.groups()
        if marker in value:
            return match.group(0)
        return prefix + quote + value + marker + quote

    return pattern.sub(repl, line)

def extract_js_key_values(text):
    # Approximate JS i18n object entries: "key": "value" / 'key': 'value'
    pairs = re.findall(r'(["\'])([^"\']+)\1\s*:\s*(["\'])(.*?)\3', text, re.DOTALL)
    out = {}
    for _, key, _, value in pairs:
        if key not in out:
            out[key] = value
    return out

def refresh_existing_js_translate_markers(src_filename, dst_filename, marker=translation_marker):
    if marker == '':
        return

    try:
        with open(src_filename, encoding='utf-8', errors='ignore') as srcf:
            src_text = srcf.read()
        with open(dst_filename, encoding='utf-8', errors='ignore') as dstf:
            dst_lines = dstf.readlines()
    except Exception:
        return

    src_map = extract_js_key_values(src_text)
    if not src_map:
        return

    line_pattern = re.compile(r'(["\'])([^"\']+)\1(\s*:\s*)(["\'])(.*?)\4')
    changed = False

    def repl(match):
        nonlocal changed
        quote_key, key, sep, quote_val, value = match.groups()
        src_value = src_map.get(key)
        if src_value is None:
            return match.group(0)
        if marker in value:
            return match.group(0)
        # If locale value is still equal to English source, mark as untranslated.
        if value == src_value:
            changed = True
            return quote_key + key + quote_key + sep + quote_val + value + marker + quote_val
        return match.group(0)

    new_lines = [line_pattern.sub(repl, line) for line in dst_lines]
    if changed:
        with open(dst_filename, 'w', encoding='utf-8') as dstf:
            dstf.writelines(new_lines)
        ensure_trailing_newline(dst_filename)

def copy_and_mark_js(src_filename, dst_filename):
    ensure_parent_folder_exists(dst_filename)
    with open(dst_filename, 'w', encoding='utf-8') as outfile:
        with open(src_filename, encoding='utf-8', errors='ignore') as infile:
            for line in infile:
                outfile.write(mark_js_line_values(line, marker=translation_marker))
    ensure_trailing_newline(dst_filename)

def copy_and_edit_js(src_filename, dst_filename):
    # Copy template js and attempt to fix the languageCode, e.g. "en" -> "pt_PT"
    # copy(src_filename, dst_filename)
    ensure_parent_folder_exists(dst_filename)

    replacements = { 'dojo.provide(\"dojo.nls.dojo-analyzer_en\"': 'dojo.provide(\"dojo.nls.dojo-analyzer_' + languageCode_hyphen.lower() + '\"',
                     'dojo.provide(\"dojo.nls.dojo-ext_en\"': 'dojo.provide(\"dojo.nls.dojo-ext_' + languageCode_hyphen.lower() + '\"',
                     'dojo.provide(\"dojo.nls.dojo-reportviewer_en\"': 'dojo.provide(\"dojo.nls.dojo-reportviewer_' + languageCode_hyphen.lower() + '\"',
                     'dojo.provide(\"dojo.nls.dojo-pirs_en\"': 'dojo.provide(\"dojo.nls.dojo-pirs_' + languageCode_hyphen.lower() + '\"',
                     '.en\"': '.' + languageCode_underscore.lower() + '\"',
                     '.en=': '.' + languageCode_underscore.lower() + '=',
                     '_en=': '_' + languageCode_underscore.lower() + '=',
                     '_en\"': '_' + languageCode_underscore.lower() + '\"'
    }
    with open(dst_filename, 'w') as outfile:
        with open(src_filename, encoding='utf-8', errors='ignore') as infile:
            for line in infile:
                for src, target in replacements.items():
                    line = line.replace(src, target)
                outfile.write(mark_js_line_values(line, marker=translation_marker))
    ensure_trailing_newline(dst_filename)
#end def

def create_index_supported_languages(dst):
    seen_dst_files.add(os.path.realpath(dst))
    ensure_parent_folder_exists(dst)
    with open(dst, 'w', encoding='utf-8') as fout:
        fout.write('#Language Pack Installer: no need to edit this file\n')

os.chdir(origin_folder)

# First round: copy files that are already translated, even if only partially
for root, dirs, filenames in os.walk('.'):
    for f in filenames:
        src = os.path.join(root, f)
        g = f.lower()

        # Ignore all source files belonging to this plugin
        if plugin_folder in os.path.realpath(os.path.join(origin_folder, src)):
            #print "Skipping file", src, ", (belongs to the plugin folder: ", plugin_folder, ')'
            continue

        dst =  os.path.realpath(os.path.join(destination_folder, root, f ))
        dst = replace_version(dst)
        # Prevent existing files at destination from being overwritten
        if os.path.exists(dst): #and not dst.endswith('.js'):
            seen_dst_files.add(os.path.realpath(dst))
            debug("Skipped copying file " + dst + " in the first round because it already exists")
            continue

        if src.find('webapps/pentaho/js') > 0:
            continue


        # Grab *messages_LANG.properties and  *supported_languages.properties
        if g.endswith('_supported_languages.properties'):
            create_index_supported_languages(dst)
        elif g.endswith('messages_'+ suffix.lower()):
            copy(src, dst)
        elif g.endswith('messages_'+ languageCode_hyphen.lower()  +'.properties'):
            dst_fixed =  os.path.realpath(os.path.join(destination_folder, root, f.replace(languageCode_hyphen, languageCode_underscore) ))
            copy(src, dst_fixed)
        elif g.endswith(suffix.lower()):
            if os.path.exists(src.replace(suffix, '_supported_languages.properties')):
                copy(src, dst)
            if os.path.exists(src.replace(suffix, '.xul')):
                copy(src, dst)
        elif g.endswith('.xul'):
            # Generate missing entries in .xul
            if os.path.exists(src.replace('.xul', '.properties')) and not os.path.exists(src.replace('.xul', '_supported_languages.properties')):
                create_index_supported_languages(dst.replace('.xul', '_supported_languages.properties'))

        # Handle existing translations in jars
        if g.endswith('.jar'):
            if is_localized_translation_jar(f):
                debug('Skipping localized jar: ' + src)
                continue
            for whitelist_item in jar_whitelist:
                if whitelist_item.lower() in g:
                    z = zipfile.ZipFile(src)
                    for el in z.namelist():
                        e = el.lower()
                        dst = os.path.realpath(os.path.join(destination_folder, root, f.replace('.jar', '_jar'), el.replace(languageCode_hyphen, languageCode_underscore) ))
                        dst = replace_version(dst)
                        if e.endswith('messages_'+ suffix.lower()) or e.endswith('messages_'+ languageCode_hyphen.lower()  +'.properties'):
                            debug('Copying/patching:\n  ' +  os.path.realpath(os.path.join(origin_folder, src, el)) + '\nto\n  ' + dst + '\n')
                            tmpfolder = tempfile.mkdtemp(prefix='sync_language_bundle_')
                            z.extract(el, tmpfolder)
                            tmpfile = os.path.join(tmpfolder, el)
                            copy(tmpfile, dst, patch=os.path.exists(dst), marker='')
                            os.remove(tmpfile)
                            shutil.rmtree(tmpfolder)
                        elif e.endswith('_supported_languages.properties'):
                            # this seems to never happen
                            create_index_supported_languages(dst)

        # Copy all *nls/*LANG*.js
        gg = src.lower() # Notice that gg means the full path in lowercase
        dst =  os.path.realpath(os.path.join(destination_folder, root, f ))
        js_patterns = [ '/'+languageCode_hyphen+'/', '_'+languageCode_hyphen+'.' ];
        if (not ('dojo' in gg) ) and ('nls' in gg) and gg.endswith('.js'):
            for p in js_patterns:
                if p.lower() in gg:
                    copy(src, dst)
        if ('pentaho-mobile-plugin' in gg and gg.endswith('.' + languageCode_underscore + '.js')):
            copy(src, dst)



# Second round: fill in the gaps, generate missing files
print("SECOND ROUND")
for root, dirs, filenames in os.walk('.'):
    for f in filenames:
        g = f.lower()
        src = os.path.join(root, f)


        # Ignore all files belonging to this plugin
        if plugin_folder in os.path.realpath(os.path.join(origin_folder, src)):
            debug('Skipping '+plugin_folder)
            continue

        # Ignore files that do not require further processing
        if g.endswith('_supported_languages.properties'):
            continue
        #    if os.path.exists(src.replace('_supported_languages.properties', '.properties')):
        #        continue

        if src.find('webapps/pentaho/js') > 0:
            continue

        #print "processing file:" + src
        # Patch messages_LANG.properties with missing tokens
        is_regular = g.endswith('messages.properties')
        has_xul = g.endswith('.properties') and os.path.exists(src.replace('.properties', '.xul'))
        is_other = g.endswith('.properties') and os.path.exists(src.replace('.properties', '_supported_languages.properties'))
        if is_regular or has_xul or is_other:
            debug("round 2 elegible file:" + src)
            dst_localised =  os.path.realpath(os.path.join(destination_folder, root, f.replace('.properties', suffix) ))
            dst_localised = replace_version(dst_localised)
            with open(src, 'r', encoding='utf-8', errors='ignore') as fin:
                lines_src = fin.readlines()
            try:
                add_missing_properties(lines_src, dst_localised)
                # break
                #except UnicodeDecodeError as e:
                #print "Error adding key  to " + dst_localised + ", attempting latin1 encoding"
                #add_missing_properties(lines_src, dst_localised, 'latin1')
            except Exception as e:
                print("==== \n   Error adding key to ".upper() + dst_localised)
                print(e)
                print("====")

        # Patch messages_LANG.properties missing in jars
        if g.endswith('.jar'):
            if is_localized_translation_jar(f):
                debug('Skipping localized jar: ' + src)
                continue
            for whitelist_item in jar_whitelist:
                if whitelist_item.lower() in g:
                    z = zipfile.ZipFile(src)
                    z_list = z.namelist()
                    for el in z_list:
                        e = el.lower()
                        is_regular = e.endswith('messages.properties')
                        has_xul = e.endswith('.properties') and e.replace('.properties', '.xul') in z_list
                        is_other = e.endswith('.properties') and e.replace('.properties', '_supported_languages.properties') in z_list
                        if is_regular or has_xul or is_other:
                            dst = os.path.realpath(os.path.join(destination_folder, root, f.replace('.jar', '_jar'), el.replace('.properties', suffix) ))
                            dst = replace_version(dst)
                            #print "Creating jar file: " + dst
                            fin = z.open(el, 'r') # Zipfiles don't support "with" statement
                            lines_src = decode_lines(fin.readlines())
                            fin.close()
                            add_missing_properties(lines_src, dst)

        # Generate missing *nls/*LANG*/*.js
        gg = src.lower() # Notice that g means the full path
        if gg.endswith('.js') and ('nls' in gg) and (not 'dojo' in gg):
            src_lang_code = ''
            dst = ''
            # The first scenario is when the folder nls/LANG/ exists
            for s in ['/en-gb/', '/en-us/', '/en/', '_en.', '-en.']: # let's use english as template
                if (s in gg):
                    src_lang_code = s
                    dst  = rreplace(src, s, s[0] + languageCode_hyphen.lower() + s[len(s)-1])
            if len(src_lang_code) > 0:
                dst_localised =  os.path.realpath(os.path.join(destination_folder, dst ))
                if not os.path.exists(dst_localised):
                    if '/' in src_lang_code:
                        copy_and_mark_js(src, dst_localised)
                    else:
                        copy_and_edit_js(src, dst_localised)
                elif refresh_existing_js_markers:
                    seen_dst_files.add(os.path.realpath(dst_localised))
                    refresh_existing_js_translate_markers(src, dst_localised)
                else:
                    seen_dst_files.add(os.path.realpath(dst_localised))
            # We also need to consider the case where the folder nls/en/ does not exist and the *.js files need to be created from nls/*.js
            if (os.path.dirname(gg) == 'nls' and not gg.endswith(languageCode_hyphen.lower() + '.js')):
                nls_folder = os.path.join(root, languageCode_hyphen.lower())
                nls_file = os.path.join(nls_folder, f)
                if ( not os.path.exists(nls_file ) ):
                    try:
                        os.makedirs(nls_folder)
                    except OSError as exc: # Python >2.5
                        if os.path.isdir(nls_folder):
                            pass
                        else: raise
                    copy_and_mark_js(src, nls_file)
                elif refresh_existing_js_markers:
                    seen_dst_files.add(os.path.realpath(nls_file))
                    refresh_existing_js_translate_markers(src, nls_file)
                else:
                    seen_dst_files.add(os.path.realpath(nls_file))

print("THIRD ROUND")
# Third round: convert the encoding of all *.properties to utf8
# (no longer needed for modern Java, but kept for compatibility)
for root, dirs, filenames in os.walk(destination_folder):
    for f in filenames:
        g = f.lower()
        src = os.path.join(destination_folder, root, f)
        if g.endswith(suffix.lower()):
            #TODO: Consider unescaping \XXX octal encoded chars
            #unescape_octal(src)

            #unescape XML: Beware of &lt; and &gt;
            #os.system('recode XML..UTF8 {0}'.format(src))


            debug('Ensuring UTF-8 encoding for: ' + src)
            #os.system('native2ascii -reverse -encoding utf-8 {0} {0}'.format(src)) # don't specify the encoding
        #elif g.endswith('.js'):
        #    os.system('native2ascii -reverse -encoding utf-8 {0} {0}'.format(src))

# Fourth round: eliminate tmp and cache files
tmp_dirs = ['/tmp', '/plugin-cache']
for root, dirs, filenames in os.walk(destination_folder):
    for d in dirs:
        dst = os.path.join(destination_folder, root, d)
        #print "remove ?: " + dst
        g = dst.lower()
        for tmp in tmp_dirs:
            if g.endswith(tmp):
                try:
                    debug("Removing folder: " + dst)
                    shutil.rmtree( dst )
                except Exception:
                    pass

# Prune round: remove locale files in destination no longer present in source
if prune:
    print("PRUNE ROUND")
    source_top_dirs = set()
    if keep_extra_folders and os.path.isdir(origin_folder):
        for top_name in os.listdir(origin_folder):
            top_path = os.path.join(origin_folder, top_name)
            if os.path.isdir(top_path):
                source_top_dirs.add(top_name)

    def keep_extra_path(path):
        if not keep_extra_folders:
            return False
        rel_path = os.path.relpath(path, destination_folder)
        if rel_path in ('.', ''):
            return False
        top_name = rel_path.split(os.sep, 1)[0]
        return top_name not in source_top_dirs

    locale_suffixes = (
        suffix.lower(),
        '_supported_languages.properties',
    )
    locale_js_markers = (
        '/' + languageCode_hyphen.lower() + '/',
        '_' + languageCode_hyphen.lower() + '.',
        '.' + languageCode_underscore.lower() + '.js',
    )
    pruned = 0
    for root, dirs, filenames in os.walk(destination_folder):
        for f in filenames:
            g = f.lower()
            filepath = os.path.realpath(os.path.join(root, f))
            gg = filepath.lower()
            is_locale_props = any(g.endswith(s) for s in locale_suffixes)
            is_locale_js = g.endswith('.js') and 'nls' in gg and any(m in gg for m in locale_js_markers)
            if (is_locale_props or is_locale_js) and filepath not in seen_dst_files:
                if keep_extra_path(filepath):
                    continue
                print("  Pruning: " + filepath)
                os.remove(filepath)
                pruned += 1
    print("  Pruned " + str(pruned) + " file(s).")
    # Remove empty directories left behind
    for root, dirs, filenames in os.walk(destination_folder, topdown=False):
        for d in dirs:
            dirpath = os.path.join(root, d)
            if keep_extra_path(dirpath):
                continue
            if os.path.isdir(dirpath) and not os.listdir(dirpath):
                debug("Removing empty dir: " + dirpath)
                os.rmdir(dirpath)
