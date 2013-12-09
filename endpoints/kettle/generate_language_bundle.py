#!/usr/bin/env python

# Script for generating a language pack from an existing Pentaho installation.
#
# Existing translations are reused and any missing tokens are appended with "<TRANSLATE ME>"


import os
import sys
import shutil
import zipfile
import codecs

languageCode = sys.argv[1] # language as it is typed by the user
languageCode_underscore = languageCode.replace('-', '_').replace(' ', '_'); # this is bith the java and historic approach, we will use this
languageCode_hyphen = languageCode.replace('_', '-').replace(' ', '-');  # this seems to be the IETF standard
jar_whitelist = ['pivot4j-analytics', 'pivot4j-core']

origin_folder = os.path.abspath(sys.argv[2].replace('file://', ''))
destination_folder = os.path.abspath(sys.argv[3].replace('file://', ''))
plugin_folder =  os.path.realpath(os.path.join(os.getcwd(), '..', '..')) # There is a subtle difference between using os.dirname(__FILE__) and os.getcwd()

force = False

def rreplace(s, old, new, occurrence=1):
    # like str.replace, but starts from the end
    # by default, only the last occurrence is replaced
    li = s.rsplit(old, occurrence)
    return new.join(li)

def copy(src, dst, patch=False):
    dst_parent = os.path.dirname(dst);
    if not os.path.exists(dst_parent):
        os.makedirs(dst_parent)

    # Copy files
    print '\nCopying: ' +  os.path.realpath(os.path.join(origin_folder, src)) + '\nto ' + dst
    if patch:
        with codecs.open(src, 'r', 'utf-8') as fin:
            lines_src = fin.readlines()

        add_missing_properties(lines_src, dst)
    else:
        shutil.copy2(src, dst)


def add_missing_properties(lines_src, dst_localised):
    if os.path.exists(dst_localised):
        with codecs.open(dst_localised, 'a+', 'utf-8') as fout:
            fout.seek(0)
            lines_dst = fout.readlines()
            #print 'File ' + dst_localised + ' contains' , len(lines_dst), 'lines'
            for line in lines_src:
                keyval = line.split('=')
                if len(keyval) > 1:
                    found_line = False
                    for current_line_dst in lines_dst:
                        if (keyval[0].strip() in current_line_dst):
                            #print ' Ignoring existing key: ' + keyval[0].strip() + ' in file: ' + dst_localised
                            found_line = True
                            break

                    if not found_line:
                        print ' Adding missing key: ' + keyval[0].strip() + ' to file: ' + dst_localised
                        #fout.seek(0, 2)
                        fout.write(line.strip() + '<TRANSLATE ME>\n')

    else:
        dst_parent = os.path.dirname(dst_localised);
        print 'Patching: ' +  os.path.realpath(dst_localised)
        if not os.path.exists(dst_parent):
            os.makedirs(dst_parent)
        with codecs.open(dst_localised, 'w', 'utf-8') as fout:
            for line in lines_src:
                keyval = line.split('=')
                if len(keyval) > 1:
                    #print ' Adding missing key: ' + keyval[0] + ' to file: ' + dst_localised
                    fout.write(line.strip() + '<TRANSLATE ME>\n')
                else:
                    fout.write(line)


def convert_to_utf8(filename, backup=False):
    # gather the encodings you think that the file may be
    # encoded inside a tuple
    encodings = ('iso-8859-1', 'ascii')

    # try to open the file and exit if some IOError occurs
    try:
        f = open(filename, 'r').read()
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
    f = open(filename, 'w')
    try:
        f.write(data.encode('utf-8'))
    except Exception, e:
        print e
    finally:
        f.close()




os.chdir(origin_folder)

# First round: copy files that are already translated, even if only partially
for root, dirs, filenames in os.walk('.'):
    for f in filenames:
        src = os.path.join(root, f)
        g = f.lower()

        # Ignore all files belonging to this plugin
        if plugin_folder in os.path.realpath(os.path.join(origin_folder, src)):
            #print "Skipping file", src, ", (belongs to the plugin folder: ", plugin_folder, ')'
            continue

        # Grab *messages_LANG.properties and  *supported_languages.properties
        dst =  os.path.realpath(os.path.join(destination_folder, root, f ))
        if g.endswith('supported_languages.properties'):
            copy(src, dst)
        elif g.endswith('messages_'+ languageCode_underscore.lower()  +'.properties') and not force:
            copy(src, dst)
        elif g.endswith('messages_'+ languageCode_hyphen.lower()  +'.properties') and not force:
            dst_fixed =  os.path.realpath(os.path.join(destination_folder, root, f.replace(languageCode_hyphen, languageCode_underscore) ))
            copy(src, dst_fixed)

       # Handle existing translations in jars
        if g.endswith('.jar'):
            for whitelist_item in jar_whitelist:
                if whitelist_item.lower() in g:
                    src = os.path.join(root, f)
                    z = zipfile.ZipFile(src)
                    for el in z.namelist():
                        e = el.lower()
                        if e.endswith('supported_languages.properties') or e.endswith('messages_'+ languageCode_underscore.lower()  +'.properties') or e.endswith('messages_'+ languageCode_hyphen.lower()  +'.properties'):
                            dst = os.path.realpath(os.path.join(destination_folder, root, f.replace('.jar', '_jar'), el.replace(languageCode_hyphen, languageCode_underscore) ))
                            print 'Copying:\n  ' +  os.path.realpath(os.path.join(origin_folder, src, el)) + '\nto\n  ' + dst + '\n'
                            tmpfolder = os.tmpnam()
                            z.extract(el, tmpfolder)
                            tmpfile = os.path.join(tmpfolder, el)
                            copy(tmpfile, dst)
                            os.remove(tmpfile)

        # Copy all *nls/*LANG*.js
        gg = src.lower() # Notice that g means the full path
        if gg.endswith('.js') and ('nls' in g):
            if (languageCode_hyphen.lower() in gg) or (languageCode_underscore.lower() in gg):
                src = os.path.join(root, f)
                dst =  os.path.realpath(os.path.join(destination_folder, root, f ))
                if not os.path.exists(dst):
                    copy(src, dst)


# Second round: fill in the gaps, generate missing files
for root, dirs, filenames in os.walk('.'):
    for f in filenames:
        g = f.lower()
        src = os.path.join(root, f)

        # Ignore all files belonging to this plugin
        if plugin_folder in os.path.realpath(os.path.join(origin_folder, src)):
            continue

        # Patch messages_LANG.properties with missing tokens
        if g.endswith('messages.properties'):
            dst_localised =  os.path.realpath(os.path.join(destination_folder, root, f.replace('.properties', '_' + languageCode_underscore + '.properties') ))
            with codecs.open(src, 'r', 'utf-8') as fin:
                lines_src = fin.readlines()
            add_missing_properties(lines_src, dst_localised)

        # Patch messages_LANG.properties missing in jars
        if g.endswith('.jar'):
            for whitelist_item in jar_whitelist:
                if whitelist_item.lower() in g:
                    src = os.path.join(root, f)
                    z = zipfile.ZipFile(src)
                    for el in z.namelist():
                        e = el.lower()
                        if e.endswith('messages.properties'):
                            dst = os.path.realpath(os.path.join(destination_folder, root, f.replace('.jar', '_jar'), el.replace('.properties', '_' + languageCode_underscore + '.properties') ))
                            fin = z.open(el, 'r')
                            lines_src = fin.readlines()
                            fin.close()
                            add_missing_properties(lines_src, dst)

        # Generate missing *nls/*LANG.js
        gg = src.lower() # Notice that g means the full path
        if gg.endswith('.js') and ('nls' in gg):
            ff = ''
            for s in ['/en-gb/', '/en-us/', '/en/', '_en.', '-en.']: # let's use english as template
                if (s in gg):
                    ff = rreplace(src, s, s[0] + languageCode_hyphen.lower() + s[len(s)-1])
            if len(ff) > 0:
                dst_localised =  os.path.realpath(os.path.join(destination_folder, ff ))
                if not os.path.exists(dst_localised):
                    copy(src, dst_localised)


# Third round: convert the encoding of all *.properties to utf8, fix *supported_languages.properties
for root, dirs, filenames in os.walk(destination_folder):
    for f in filenames:
        g = f.lower()
        src = os.path.join(root, f)
        if g.endswith('messages_'+ languageCode_underscore.lower()  +'.properties'):
            print 'Converting to utf8: ' + src
            #convert_to_utf8(src)
            os.system('native2ascii -reverse {0} {0}'.format(src))
            #os.system('native2ascii -reverse -encoding utf-8 {0} {0}'.format(src))
        elif g.endswith('supported_languages.properties'):
            with codecs.open(src, 'w', 'utf-8') as fout:
                fout.write('#Language Pack Installer: no need to edit this file\n')
