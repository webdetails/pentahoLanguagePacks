#!/bin/bash

LC_CTYPE=C
LANG=C
find $1 -type f | xargs -I {} sed -i '' "s/@\$locale@/$2/g" {}
