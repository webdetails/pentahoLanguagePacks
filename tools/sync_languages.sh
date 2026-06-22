#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DATA_DIR="${DATA_DIR:-$SCRIPT_DIR/../data}"

# Fallback locales for bootstrapping an empty data/ folder.
STOCK_LOCALES=(en fr de ja)

LOCALES=()
if [ -d "$DATA_DIR" ]; then
	while IFS= read -r -d '' locale_dir; do
		LOCALES+=("$(basename "$locale_dir")")
	done < <(find "$DATA_DIR" -mindepth 1 -maxdepth 1 -type d -print0 | sort -z)
fi

if [ ${#LOCALES[@]} -eq 0 ]; then
	echo "No locale folders found in $DATA_DIR; bootstrapping with stock locales: ${STOCK_LOCALES[*]}"
	LOCALES=("${STOCK_LOCALES[@]}")
fi

"$SCRIPT_DIR/sync_language.sh" "${LOCALES[@]}" "$@"
