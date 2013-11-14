#!/bin/bash

ORIGIN=/Applications/pentaho5
DEST=/Applications/pentaho/server/biserver-ee/pentaho-solutions/system/languagepackinstaller/data

HERE=$(pwd)
for locale in "$@"
do
    ./getoriginalmessages.py "$locale" $ORIGIN/server/biserver-ee/tomcat $DEST/"$locale"/tomcat
    ./getoriginalmessages.py "$locale" $ORIGIN/server/biserver-ee/pentaho-solutions/system $DEST/"$locale"/system
    if [ ! -f $DEST/"$locale"/metadata.json ]; then
        cp $DEST/metadata.json $DEST/"$locale"/
    fi
    #cd $DEST/
    #zip -r zips/"$locale" "$locale"
    #cd $HERE
done
