#!/bin/bash
HERE=$(pwd)

LANGUAGE=$1

SERVER_FOLDER='/Applications/pentaho/server/'
SOLUTION_FOLDER='/Applications/pentaho/server/biserver-ee/pentaho-solutions'
PLUGIN='languagepackdistributor'
PLUGIN_FOLDER=$SOLUTION_FOLDER'/system/'$PLUGIN

#PLUGIN_FOLDER=~/Desktop/server

mkdir -p $PLUGIN_FOLDER/data/$LANGUAGE/server


cd $SERVER_FOLDER
find . -iname "*messages.properties" | xargs -I{} rsync -uRv  --exclude='"'$PLUGIN'/*"' {} $PLUGIN_FOLDER/data/$LANGUAGE/server
find . -iname "*messages_"$LANGUAGE".properties" | xargs -I{} rsync -uRv  --exclude='"'$PLUGIN'/*"' {} $PLUGIN_FOLDER/data/$LANGUAGE/server/

REGEX='s/\.properties/_'$LANGUAGE'\.properties/2'
echo $REGEX

find $PLUGIN_FOLDER/data/$LANGUAGE -iname "*messages.properties" |  awk '{print("mv "$1" "$1)}' | sed $REGEX | sh

cd $HERE

#find . \( -iname "messages-tlh.properties" -and \! -path '*languagepackdistributor*' \)
