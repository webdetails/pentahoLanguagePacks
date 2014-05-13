#!/bin/bash

outputF=$(date "+%Y%m%d")
mkdir $outputF

for lang in $(find ../data -depth 1 -type d | cut -c 9- )
do
    myfile=$outputF/"$lang".txt
    ./list_translatable_files.sh  $lang | pbcopy
    echo "$(pbpaste | wc -l) files require attention:" > $myfile
    echo "" >> $myfile
    pbpaste >> $myfile
done
