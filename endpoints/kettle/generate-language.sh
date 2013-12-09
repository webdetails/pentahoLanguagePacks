#!/bin/bash

ORIGIN=~/biserver-ce-bare/
DEST=~/biserver-ce/pentaho-solutions/system/languagePackInstaller/data

HERE=$(pwd)
for locale in "$@"
do
    ./generate_language_bundle.py "$locale" $ORIGIN/tomcat $DEST/"$locale"/tomcat
    ./generate_language_bundle.py "$locale" $ORIGIN/pentaho-solutions/system $DEST/"$locale"/system
    if [ ! -f $DEST/"$locale"/metadata.json ]; then
        cp $DEST/metadata.json $DEST/"$locale"/
    fi
    #cd $DEST/
    #zip -r zips/"$locale" "$locale"
    #cd $HERE
done
