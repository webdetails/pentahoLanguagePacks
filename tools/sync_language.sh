#!/bin/bash
#
# Syncs language pack data from an existing Pentaho installation.
# Usage: ./sync_language.sh <locale> [locale2 ...] [--prune] [--keep-missing-plugins] [--refresh-existing-js-markers]
#
# Environment variables:
#   PENTAHO_HOME - path to Pentaho BI Server (e.g., /opt/pentaho/server)
#   DATA_DIR     - output data directory (default: ../data)
#
# Options:
#   --prune      Remove locale files in data/ that no longer exist on the server.
#   --keep-missing-plugins
#                When pruning, keep destination system/ top-level folders that do not
#                exist on the server (useful for local-only plugins).
#   --refresh-existing-js-markers
#                One-time update: for existing locale .js files, mark values that still
#                match English source with <TRANSLATE ME>.
#

set -euo pipefail

ORIGIN="${PENTAHO_HOME:?Set PENTAHO_HOME to your Pentaho BI Server root (e.g., /opt/pentaho/server)}"
DEST="${DATA_DIR:-$(cd "$(dirname "$0")/../data" && pwd)}"

sed_in_place() {
    local expr="$1"
    local file="$2"
    if sed --version >/dev/null 2>&1; then
        sed -i -e "$expr" "$file"
    else
        sed -i '' -e "$expr" "$file"
    fi
}

PRUNE_FLAG=""
KEEP_EXTRA_SYSTEM_FOLDERS=false
REFRESH_EXISTING_JS_MARKERS=false
LOCALES=()
for arg in "$@"; do
    if [ "$arg" = "--prune" ]; then
        PRUNE_FLAG="--prune"
    elif [ "$arg" = "--keep-missing-plugins" ]; then
        KEEP_EXTRA_SYSTEM_FOLDERS=true
    elif [ "$arg" = "--refresh-existing-js-markers" ]; then
        REFRESH_EXISTING_JS_MARKERS=true
    else
        LOCALES+=("$arg")
    fi
done

if [ ${#LOCALES[@]} -eq 0 ]; then
    echo "Usage: ./sync_language.sh <locale> [locale2 ...] [--prune] [--keep-missing-plugins] [--refresh-existing-js-markers]"
    echo "  Set PENTAHO_HOME to your Pentaho server root before running."
    exit 1
fi

BUNDLE_FLAGS=()
if [ -n "$PRUNE_FLAG" ]; then
    BUNDLE_FLAGS+=("$PRUNE_FLAG")
fi
if [ "$REFRESH_EXISTING_JS_MARKERS" = true ]; then
    BUNDLE_FLAGS+=("--refresh-existing-js-markers")
fi

SYSTEM_BUNDLE_FLAGS=()
if [ ${#BUNDLE_FLAGS[@]} -gt 0 ]; then
    SYSTEM_BUNDLE_FLAGS=("${BUNDLE_FLAGS[@]}")
fi
if [ "$KEEP_EXTRA_SYSTEM_FOLDERS" = true ]; then
    SYSTEM_BUNDLE_FLAGS+=("--keep-extra-folders")
fi

HERE=$(pwd)
for locale in "${LOCALES[@]}"
do
    (
        # Create files missing in the BI server
        touch "$ORIGIN/pentaho-solutions/system/data-access/resources/messages/messages_supported_languages.properties"

        # Sync the locale bundles
        tomcat_args=("$locale" "$ORIGIN/tomcat" "$DEST/$locale/tomcat")
        if [ ${#BUNDLE_FLAGS[@]} -gt 0 ]; then
            tomcat_args+=("${BUNDLE_FLAGS[@]}")
        fi
        ./sync_language-bundle.py "${tomcat_args[@]}"

        system_args=("$locale" "$ORIGIN/pentaho-solutions/system" "$DEST/$locale/system")
        if [ ${#SYSTEM_BUNDLE_FLAGS[@]} -gt 0 ]; then
            system_args+=("${SYSTEM_BUNDLE_FLAGS[@]}")
        fi
        ./sync_language-bundle.py "${system_args[@]}"

        # Remove marker accidentally appended to messagebundleid values
        common_ui_dir="$DEST/$locale/system/common-ui"
        if [ -d "$common_ui_dir" ]; then
            while IFS= read -r -d '' prop_file; do
                sed_in_place 's/messagebundleid=\(.*\)<TRANSLATE ME>/messagebundleid=\1/g' "$prop_file"
            done < <(find "$common_ui_dir" -iname "*.properties" -print0)
        fi

        rm -rf "$DEST/$locale/tomcat/webapps/pentaho/js"

        # handle metadata
        if [ ! -f "$DEST/$locale/metadata.json" ]; then
            cp "$DEST/metadata.json" "$DEST/$locale/"
            sed_in_place 's/Klingon/@$locale@/g' "$DEST/$locale/metadata.json"
            sed_in_place "s/tlh/$locale/g" "$DEST/$locale/metadata.json"
        fi
        if [ ! -d "$DEST/$locale/resources" ]; then
            rsync -uva "$DEST/tlh/resources" "$DEST/$locale/"
            while IFS= read -r -d '' prop_file; do
                sed_in_place 's/Klingon/@$locale@/g' "$prop_file"
            done < <(find "$DEST/$locale/resources" -iname "*.properties" -print0)
        fi

        if command -v js-beautify >/dev/null 2>&1; then
            while IFS= read -r -d '' js_file; do
                js-beautify -r "$js_file"
            done < <(find "$DEST/$locale" -iname "*.js" -print0)
        else
            echo "WARN: js-beautify not found; skipping JS file formatting. (Optional: npm install -g js-beautify)"
        fi
        rm -rf "$DEST/$locale/system/plugin-cache"

        #cd $DEST/
        #zip -r zips/"$locale" "$locale"
        #cd $HERE
    ) &
done
wait
