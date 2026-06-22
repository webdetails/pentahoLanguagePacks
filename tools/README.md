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
│  • sync_languages.sh          ──▶  calls sync_language.sh for ALL        │
│  • sync_language.sh           ──▶  calls sync_language-bundle.py         │
│  • sync_language-bundle.py           (core scan engine)                  │
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
./sync_language.sh ro

# 2. Fill in the human-readable name
./define_locale.sh ro "Română"

# 3. Hand data/ro/ to the translator; they fill in the <TRANSLATE ME> strings

# 4. Check progress at any time
./list_translatable_files.sh ro

# 5. Test locally before release
python3 installpack.py ro Romanian ../data/ro /opt/pentaho/pentaho-solutions/system

# 6. Build a distributable pack
cd ..
mvn clean package -DlangCode=ro
```

**Updating all locales after a Pentaho version upgrade**

```bash
export PENTAHO_HOME=/opt/pentaho/server
cd tools/
./sync_languages.sh            # syncs all locales in parallel
./update_translatable.sh       # snapshot of what needs re-translating
```

---

## Scripts Reference

### `sync_language.sh`

Syncs language-pack content from an existing Pentaho installation into the `data/<locale>/` structure.

```bash
./sync_language.sh <locale> [locale2 ...] [--prune] [--keep-missing-plugins] [--refresh-existing-js-markers]
```

**Example:**
```bash
./sync_language.sh pt_PT fr de
```

**Options:**
- `--prune` — pass through to `sync_language-bundle.py`; removes locale files in `data/` that no longer exist on the server. Useful after a Pentaho version upgrade.
- `--keep-missing-plugins` — when pruning, keeps destination `system/` top-level folders that do not exist on the server (for local-only plugins).
- `--refresh-existing-js-markers` — one-time update: for existing locale `.js` files, compare with English and add `<TRANSLATE ME>` where values are still unchanged.

**What it does:**
1. Calls `sync_language-bundle.py` for `tomcat/` and `system/` trees
2. Creates `metadata.json` from template (if not present)
3. Creates `resources/lang/` from the Klingon (`tlh`) template
4. Beautifies `.js` files and removes plugin-cache
5. Runs locales in parallel

**Requirements:** A local Pentaho BI Server installation. Set `PENTAHO_HOME` to your server root:

```bash
export PENTAHO_HOME=/opt/pentaho/server
./sync_language.sh pt_PT fr de --prune --keep-missing-plugins

# One-time JS marker refresh on existing locale files
./sync_language.sh pt_PT --refresh-existing-js-markers
```

Optionally set `DATA_DIR` to override the output directory (defaults to `../data`).

---

### `sync_language-bundle.py`

Core sync engine that scans a Pentaho installation tree for translatable `.properties` and `.js` files, copies existing translations, and marks missing ones with `<TRANSLATE ME>`.

```bash
./sync_language-bundle.py <locale> <source_dir> <dest_dir> [--prune] [--keep-extra-folders] [--refresh-existing-js-markers]
```

**Example:**
```bash
./sync_language-bundle.py pt_PT /opt/pentaho/tomcat ../data/pt_PT/tomcat
```

**Options:**
- `--prune` — after syncing, remove any locale files in `<dest_dir>` that no longer have a corresponding source file in the server installation. Also removes empty directories left behind. Useful after a Pentaho version upgrade removes plugins or bundles.
- `--keep-extra-folders` — when pruning, preserve destination top-level folders that do not exist under `<source_dir>`.
- `--refresh-existing-js-markers` — enable marker refresh for existing locale `.js` files when values still match English.

**Example with pruning:**
```bash
./sync_language-bundle.py pt_PT /opt/pentaho/tomcat ../data/pt_PT/tomcat --prune
```

**What it does:**
- Scans JARs on a whitelist for `messages_<locale>.properties`
- Ignores locale-suffixed installed translation jars (for example `*_es.jar`) to avoid importing already-installed pack artifacts
- Copies existing locale files, creates stubs for missing ones
- Refreshes existing `.properties` keys with `<TRANSLATE ME>` only when destination text is high-confidence English and source value changed (uses language detection)
- Marks generated locale `.js` key/value strings with `<TRANSLATE ME>` for translator tracking
- Optionally (with `--refresh-existing-js-markers`), compares existing locale `.js` values with English source and tags unchanged values with `<TRANSLATE ME>`
- Handles both `_underscore` (Java) and `-hyphen` (IETF/Dojo) locale formats

**Requirements:** Python 3

---

### `sync_languages.sh`

Syncs **all** language packs at once by calling `sync_language.sh` with locale folders discovered under `data/`.

If `data/` has no locale folders yet, it bootstraps with stock locales: `en fr de ja`.

```bash
./sync_languages.sh
```

**Use case:** After a Pentaho version upgrade, sync all locale bundles in `data/` to pick up new/changed translatable strings.

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
python3 bulk_rename.py <folder> <src_suffix> <dst_suffix>
```

**Example:**
```bash
python3 bulk_rename.py ../data/es_MX es-mx es
```

**Use case:** When a locale code changes or you want to merge a country-specific locale into a generic one.

**Requirements:** Python 3

---

### `installpack.py`

Copies a built language pack from the `data/` folder into a running Pentaho installation.

```bash
python3 installpack.py <locale> <language_name> <source_dir> <dest_dir> [force]
```

**Example:**
```bash
python3 installpack.py pt_PT Portuguese ./data/pt_PT /opt/pentaho/pentaho-solutions/system
```

**What it does:**
- Walks the source tree and copies matching locale files to the destination
- Optionally creates directories with the `force` flag
- Patches `supported_languages.properties` files

**Requirements:** Python 3

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
./update_translatable.sh [output_dir]
```

**What it does:**
1. Creates a folder named with today's date (e.g., `20260529/`) unless `output_dir` is provided
2. For each locale under `data/`, computes:
   - total files
   - files that still contain `<TRANSLATE ME>`
   - translated files and `% complete`
3. Saves per-locale reports to `<output_dir>/<locale>.txt`, including per-file key progress for pending files:
   - translated keys / total keys
   - pending keys
   - per-file completion `%`
   - supports both `.properties` and locale `.js` files
4. Saves per-locale file CSVs to `<output_dir>/<locale>-summary-files.csv` with:
   - `group,file,total_keys,translated_keys,percent_complete`
5. Saves per-locale group CSVs to `<output_dir>/<locale>-summary-file-groups.csv` with:
   - `group,total_files,total_keys,translated_keys,percent_complete`
6. Saves an aggregate CSV summary to `<output_dir>/summary.csv`

**Use case:** Periodic progress tracking across all locales.

---

### `move_locale_subtree.py`

General one-time migration helper to move/rename a locale subtree path under `data/<locale>/`.

```bash
python3 move_locale_subtree.py --from-rel REL --to-rel REL [--apply] [locale ...]
```

**Behavior:**
- default is dry-run (prints planned operations)
- with `--apply`, moves folders/files
- if destination exists, merges missing files; on conflict it keeps the destination file and removes the source duplicate

**Example:**
```bash
# analyzer rename (preview only for de)
python3 move_locale_subtree.py \
  --from-rel system/analyzer/scripts/schedulingdialogs \
  --to-rel system/analyzer/scripts/schedulerplugin \
  de

# custom move (new server path layout)
python3 move_locale_subtree.py \
  --from-rel system/pdi-ee-plugin \
  --to-rel system/kettle/plugins/pdi-ee-plugin \
  de

# apply to all locales (analyzer rename)
python3 move_locale_subtree.py \
  --from-rel system/analyzer/scripts/schedulingdialogs \
  --to-rel system/analyzer/scripts/schedulerplugin \
  --apply
```

---

### `apply_known_path_moves.py`

Runs a configured set of known path moves by calling `move_locale_subtree.py` multiple times.

Currently includes:
- `system/analyzer/scripts/schedulingdialogs` -> `system/analyzer/scripts/schedulerplugin`
- `system/pdi-ee-plugin` -> `system/kettle/plugins/pdi-ee-plugin`

```bash
python3 apply_known_path_moves.py [--apply] [locale ...]
```

**Example:**
```bash
# preview all configured moves for one locale
python3 apply_known_path_moves.py de

# apply all configured moves for all locales
python3 apply_known_path_moves.py --apply
```

---

## Notes

- `sync_language.sh` requires `PENTAHO_HOME` environment variable to be set.
- Python-based tools in this folder now target **Python 3**.
- `sync_language.sh` optionally uses `js-beautify` for formatting extracted `.js` files. If not available, the script continues without formatting.
  - To install (optional): `npm install -g js-beautify`
- `sync_language.sh` uses Python `langid` for conservative English detection when deciding whether marker-bearing `.properties` values should be refreshed.
  - Install detector (recommended): `python3 -m pip install langid`
  - If your macOS Python is PEP 668 managed (`externally-managed-environment`), install in a virtualenv:
    - `python3 -m venv .venv`
    - `source .venv/bin/activate`
    - `python3 -m pip install langid`
- These scripts are independent of the Maven build. The Maven build uses `data/` as-is — these tools are for *populating* that data.
- Modern Java (JDK 9+) handles UTF-8 in `.properties` files natively, so `native2ascii` is no longer required.
