# Tools

Utility scripts for translators and maintainers. These are **not** part of the Maven build — they're standalone helpers for managing locale data.

---

## Workflow Overview

The scripts cover four distinct phases of the translation lifecycle. The diagram below shows how they fit together:

```
┌──────────────────────────────────────────────────────────────────────────┐
│  PHASE 1 — Bootstrap / Extraction                                        │
│                                                                          │
│  A new Pentaho version ships, or a new locale needs to be added.         │
│                                                                          │
│  • regenerate_packs.sh        ──▶  calls generate-language.sh for ALL    │
│  • generate-language.sh       ──▶  calls generate_language_bundle.py     │
│  • generate_language_bundle.py       (core scan engine)                  │
│                                                                          │
│  Output: data/<locale>/ trees populated with existing translations       │
│          and <TRANSLATE ME> stubs for every missing string.              │
└──────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  PHASE 2 — Locale Initialisation                                         │
│                                                                          │
│  Finish wiring up a freshly generated locale.                            │
│                                                                          │
│  • define_locale.sh    — fill in human-readable locale name in           │
│                          metadata.json and resources/lang/ files         │
│  • bulk_rename.py      — rename files when locale codes change           │
│                          (e.g. es-mx → es)                               │
│                                                                          │
│  Output: locale ready for translators to work on.                        │
└──────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  PHASE 3 — Translation Work & Progress Tracking                          │
│                                                                          │
│  Translators edit the <TRANSLATE ME> strings. Maintainers track          │
│  progress over time.                                                     │
│                                                                          │
│  • list_translatable_files.sh — show untranslated files for ONE locale   │
│  • update_translatable.sh     — snapshot progress for ALL locales        │
│                                 (saves dated reports to a timestamped    │
│                                 folder for comparison over time)         │
│                                                                          │
│  Output: per-locale .txt reports listing files still needing work.       │
└──────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  PHASE 4 — Local Testing / Manual Install                                │
│                                                                          │
│  Verify translations inside a running Pentaho server before release.     │
│                                                                          │
│  • installpack.py — copy a locale's data/ files directly into a          │
│                     local Pentaho installation for immediate testing     │
│                                                                          │
│  Output: live Pentaho server updated with the latest translations.       │
└──────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────────┐
│  RELEASE — Maven Build (outside these scripts)                           │
│                                                                          │
│  Once the data/ folder is ready, the normal Maven build packages         │
│  everything up:                                                          │
│                                                                          │
│    mvn clean package                        (full installer plugin)      │
│    mvn clean package -DlangCode=pt_PT       (single-locale pack)         │
│    mvn clean package -Pbuild-all-language-packs  (all locales)           │
└──────────────────────────────────────────────────────────────────────────┘
```

### Typical end-to-end scenarios

**Adding a brand-new locale (e.g. `ro`)**

```bash
# 1. Extract strings from your Pentaho installation
export PENTAHO_HOME=/opt/pentaho/server
cd tools/
./generate-language.sh ro

# 2. Fill in the human-readable name
./define_locale.sh ro "Română"

# 3. Hand data/ro/ to the translator; they fill in the <TRANSLATE ME> strings

# 4. Check progress at any time
./list_translatable_files.sh ro

# 5. Test locally before release
python installpack.py ro Romanian ../data/ro /opt/pentaho/pentaho-solutions/system

# 6. Build a distributable pack
cd ..
mvn clean package -DlangCode=ro
```

**Updating all locales after a Pentaho version upgrade**

```bash
export PENTAHO_HOME=/opt/pentaho/server
cd tools/
./regenerate_packs.sh          # regenerates all locales in parallel
./update_translatable.sh       # snapshot of what needs re-translating
```

---

## Scripts Reference

### `generate-language.sh`

Generates a new language pack from an existing Pentaho installation by extracting translatable strings and creating the `data/<locale>/` structure.

```bash
./generate-language.sh <locale> [locale2 ...]
```

**Example:**
```bash
./generate-language.sh pt_PT fr de
```

**What it does:**
1. Calls `generate_language_bundle.py` for `tomcat/` and `system/` trees
2. Creates `metadata.json` from template (if not present)
3. Creates `resources/lang/` from the Klingon (`tlh`) template
4. Beautifies `.js` files and removes plugin-cache
5. Runs locales in parallel

**Requirements:** A local Pentaho BI Server installation. Set `PENTAHO_HOME` to your server root:

```bash
export PENTAHO_HOME=/opt/pentaho/server
./generate-language.sh pt_PT fr de
```

Optionally set `DATA_DIR` to override the output directory (defaults to `../data`).

---

### `generate_language_bundle.py`

Core engine that scans a Pentaho installation tree for translatable `.properties` and `.js` files, copies existing translations, and marks missing ones with `<TRANSLATE ME>`.

```bash
./generate_language_bundle.py <locale> <source_dir> <dest_dir>
```

**Example:**
```bash
./generate_language_bundle.py pt_PT /opt/pentaho/tomcat ../data/pt_PT/tomcat
```

**What it does:**
- Scans JARs on a whitelist for `messages_<locale>.properties`
- Copies existing locale files, creates stubs for missing ones
- Handles both `_underscore` (Java) and `-hyphen` (IETF/Dojo) locale formats

**Requirements:** Python 2.7 (legacy script)

---

### `regenerate_packs.sh`

Regenerates **all** language packs at once by calling `generate-language.sh` with the full list of supported locales.

```bash
./regenerate_packs.sh
```

**Use case:** After a Pentaho version upgrade, regenerate all locale bundles to pick up new/changed translatable strings.

---

### `define_locale.sh`

Replaces the `@$locale@` placeholder in a locale's `resources/lang/` and `metadata.json` with the actual locale name.

```bash
./define_locale.sh <locale_code> <locale_display_name>
```

**Example:**
```bash
./define_locale.sh pt_PT "Português (Portugal)"
```

**Use case:** After generating a new locale from template, fill in the human-readable name.

---

### `bulk_rename.py`

Renames locale files from one suffix to another (e.g., `es-mx` → `es`).

```bash
python bulk_rename.py <folder> <src_suffix> <dst_suffix>
```

**Example:**
```bash
python bulk_rename.py ../data/es_MX es-mx es
```

**Use case:** When a locale code changes or you want to merge a country-specific locale into a generic one.

**Requirements:** Python 2+

---

### `installpack.py`

Copies a built language pack from the `data/` folder into a running Pentaho installation.

```bash
python installpack.py <locale> <language_name> <source_dir> <dest_dir> [force]
```

**Example:**
```bash
python installpack.py pt_PT Portuguese ./data/pt_PT /opt/pentaho/pentaho-solutions/system
```

**What it does:**
- Walks the source tree and copies matching locale files to the destination
- Optionally creates directories with the `force` flag
- Patches `supported_languages.properties` files

**Requirements:** Python 2 (uses `print` statement syntax)

---

### `list_translatable_files.sh`

Lists files that still contain `<TRANSLATE ME>` markers for a given locale.

```bash
./list_translatable_files.sh <locale>
```

**Example:**
```bash
./list_translatable_files.sh fr
```

**Output:** Files with untranslated strings and their count.

**Use case:** Quick check of translation progress for a locale.

---

### `update_translatable.sh`

Generates a per-locale report of files needing translation, saved to a timestamped folder.

```bash
./update_translatable.sh
```

**What it does:**
1. Creates a folder named with today's date (e.g., `20260529/`)
2. For each locale under `data/`, runs `list_translatable_files.sh`
3. Saves the output to `<date>/<locale>.txt`

**Use case:** Periodic progress tracking across all locales.

---

## Notes

- `generate-language.sh` requires `PENTAHO_HOME` environment variable to be set.
- `generate_language_bundle.py` and `installpack.py` use **Python 2** syntax. They work but could use a modernization pass.
- These scripts are independent of the Maven build. The Maven build uses `data/` as-is — these tools are for *populating* that data.
