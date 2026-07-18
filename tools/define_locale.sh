#!/bin/bash
# ******************************************************************************
#
# Pentaho
#
# Copyright (C) 2026 by Pentaho Canada Inc. : http://www.pentaho.com
#
# Use of this software is governed by the Business Source License included
# in the LICENSE.TXT file.
#
# Change Date: 2030-06-15
# ******************************************************************************

LC_CTYPE=C
LANG=C
find ../data/$1/resources/lang -type f | xargs -I {} sed -i '' "s/@\$locale@/$2/g" {}
sed -i '' "s/@\$locale@/$2/g" ../data/$1/metadata.json
