#!/bin/bash
#
# Generates language pack data from an existing Pentaho installation.
# Usage: ./generate-language.sh <locale> [locale2 ...]
#
# Environment variables:
#   PENTAHO_HOME - path to Pentaho BI Server (e.g., /opt/pentaho/server)
#   DATA_DIR     - output data directory (default: ../data)
#

set -euo pipefail

ORIGIN="${PENTAHO_HOME:?Set PENTAHO_HOME to your Pentaho BI Server root (e.g., /opt/pentaho/server)}"
DEST="${DATA_DIR:-$(cd "$(dirname "$0")/../data" && pwd)}"

if [ $# -eq 0 ]; then
    echo "Usage: ./generate-language.sh <locale> [locale2 ...]"
    echo "  Set PENTAHO_HOME to your Pentaho server root before running."
    exit 1
fi

HERE=$(pwd)
for locale in "$@"
do
    (
        # Create files missing in the biserver
        touch  $ORIGIN/pentaho-solutions/system/data-access/resources/messages/messages_supported_languages.properties

        # Generate the bundles
        ./generate_language_bundle.py "$locale" $ORIGIN/tomcat $DEST/"$locale"/tomcat
        ./generate_language_bundle.py "$locale" $ORIGIN/pentaho-solutions/system $DEST/"$locale"/system

        # fix
        find  $DEST/"$locale"/system/common-ui/ -iname "*.properties" | xargs -I {} sed -i '' 's/messagebundleid=\(.*\)<TRANSLATE ME>/messagebundleid=\1/g' {}

        rm -rf $DEST/"$locale"/tomcat/webapps/pentaho/js

        # handle metadata
        if [ ! -f $DEST/"$locale"/metadata.json ]; then
            cp $DEST/metadata.json $DEST/"$locale"/
            sed -i '' 's/Klingon/@$locale@/g'  $DEST/"$locale"/metadata.json
            sed -i '' "s/tlh/$locale/g"  $DEST/"$locale"/metadata.json
        fi
        if [ ! -d $DEST/"$locale"/resources ]; then
            rsync -uva $DEST/tlh/resources $DEST/"$locale"/
            find $DEST/"$locale"/resources -iname "*.properties" |  xargs -I {} sed -i '' 's/Klingon/@$locale@/g' {}
        fi

        find $DEST/"$locale" -iname "*.js" | xargs js-beautify -r
        rm -rf $DEST/"$locale"/system/plugin-cache

        #cd $DEST/
        #zip -r zips/"$locale" "$locale"
        #cd $HERE
    ) &
done
wait
