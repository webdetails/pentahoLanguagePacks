#!/bin/bash

set -euo pipefail

if [ $# -lt 1 ]; then
	echo "Usage: ./list_translatable_files.sh <locale>"
	exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DATA_DIR="${DATA_DIR:-$SCRIPT_DIR/../data}"
LOCALE="$1"
LOCALE_DIR="$DATA_DIR/$LOCALE"

if [ ! -d "$LOCALE_DIR" ]; then
	echo "Locale folder not found: $LOCALE_DIR" >&2
	exit 1
fi

grep -R -c -- "<TRANSLATE ME>" "$LOCALE_DIR" \
	| grep -v ":0" \
	| sed "s#^$DATA_DIR/##"
