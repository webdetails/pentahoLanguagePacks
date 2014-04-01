#!/bin/bash

LC_CTYPE=C
LANG=C
find ../data/$1/resources/lang -type f | xargs -I {} sed -i '' "s/@\$locale@/$2/g" {}
sed -i '' "s/@\$locale@/$2/g" ../data/$1/metadata.json
