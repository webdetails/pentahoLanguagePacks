#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DATA_DIR="${DATA_DIR:-$SCRIPT_DIR/../data}"
OUTPUT_DIR="${1:-$(date "+%Y%m%d")}"  # Optional custom output folder

mkdir -p "$OUTPUT_DIR"

SUMMARY_FILE="$OUTPUT_DIR/summary.csv"
echo "locale,total_files,pending_files,translated_files,percent_complete" > "$SUMMARY_FILE"

PY_HELPER="$(mktemp)"
trap 'rm -f "$PY_HELPER"' EXIT

cat > "$PY_HELPER" <<'PY'
import csv
import os
import re
import sys

locale_dir, data_dir, output_dir, lang = sys.argv[1:5]


def derive_group_and_file(rel_path):
    parts = rel_path.split('/')
    if len(parts) >= 2 and parts[0] == 'system':
        group = '/'.join(parts[:2])
        file_part = '/'.join(parts[2:])
    elif len(parts) >= 4 and parts[0] == 'tomcat' and parts[1] == 'webapps':
        group = '/'.join(parts[:4])
        file_part = '/'.join(parts[4:])
    elif len(parts) >= 3 and parts[0] == 'tomcat' and parts[1] == 'webapps':
        group = '/'.join(parts[:3])
        file_part = '/'.join(parts[3:])
    elif len(parts) >= 2:
        group = '/'.join(parts[:2])
        file_part = '/'.join(parts[2:])
    else:
        group = parts[0] if parts else '.'
        file_part = rel_path
    return group, file_part


def metrics_for_file(path):
    if path.endswith('.js'):
        with open(path, 'r', encoding='utf-8', errors='ignore') as f:
            text = f.read()

        # Approximate translatable JS entries as string literal key/value pairs.
        js_pairs = re.findall(r'["\']([^"\']+)["\']\s*:\s*(["\'])(.*?)\2', text, re.DOTALL)
        total = len(js_pairs)
        pending = sum(1 for _, _, value in js_pairs if '<TRANSLATE ME>' in value)

        if total == 0:
            pending = text.count('<TRANSLATE ME>')
            if pending > 0:
                total = pending

        translated = max(0, total - pending)
        pct = 100.0 if total == 0 else (translated * 100.0 / total)
        return total, translated, pending, pct

    # Default: .properties style parsing
    total = 0
    pending = 0
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        for line in f:
            if '<TRANSLATE ME>' in line:
                pending += 1
            stripped = line.strip()
            if not stripped:
                continue
            if stripped.startswith('#') or stripped.startswith('!'):
                continue
            if '=' in line:
                total += 1

    if total == 0 and pending > 0:
        total = pending

    translated = max(0, total - pending)
    pct = 100.0 if total == 0 else (translated * 100.0 / total)
    return total, translated, pending, pct


files_csv = os.path.join(output_dir, f'{lang}-summary-files.csv')
groups_csv = os.path.join(output_dir, f'{lang}-summary-file-groups.csv')
report_file = os.path.join(output_dir, f'{lang}.txt')

total_files = 0
file_rows = []
group_acc = {}
pending_details = []

for root, _, filenames in os.walk(locale_dir):
    for filename in filenames:
        abs_path = os.path.join(root, filename)
        total_files += 1

        if not (filename.endswith('.properties') or filename.endswith('.js')):
            continue

        total_keys, translated_keys, pending_keys, file_pct = metrics_for_file(abs_path)
        if total_keys == 0:
            continue

        rel_to_locale = os.path.relpath(abs_path, locale_dir).replace(os.sep, '/')
        rel_to_data = os.path.relpath(abs_path, data_dir).replace(os.sep, '/')
        group, file_part = derive_group_and_file(rel_to_locale)

        file_rows.append((group, file_part, total_keys, translated_keys, file_pct))

        if group not in group_acc:
            group_acc[group] = [0, 0, 0]  # files, total_keys, translated_keys
        group_acc[group][0] += 1
        group_acc[group][1] += total_keys
        group_acc[group][2] += translated_keys

        if pending_keys > 0:
            pending_details.append((rel_to_data, translated_keys, total_keys, pending_keys, file_pct))

pending_files = len(pending_details)
translated_files = max(0, total_files - pending_files)
percent_complete = 0.0 if total_files == 0 else (translated_files * 100.0 / total_files)

file_rows.sort(key=lambda r: (r[0], r[1]))
with open(files_csv, 'w', newline='', encoding='utf-8') as f:
    w = csv.writer(f)
    w.writerow(['group', 'file', 'total_keys', 'translated_keys', 'percent_complete'])
    for group, file_part, total_keys, translated_keys, file_pct in file_rows:
        w.writerow([group, file_part, total_keys, translated_keys, f'{file_pct:.2f}'])

with open(groups_csv, 'w', newline='', encoding='utf-8') as f:
    w = csv.writer(f)
    w.writerow(['group', 'total_files', 'total_keys', 'translated_keys', 'percent_complete'])
    for group in sorted(group_acc.keys()):
        g_files, g_total_keys, g_translated_keys = group_acc[group]
        g_pct = 100.0 if g_total_keys == 0 else (g_translated_keys * 100.0 / g_total_keys)
        w.writerow([group, g_files, g_total_keys, g_translated_keys, f'{g_pct:.2f}'])

pending_details.sort(key=lambda r: r[0])
with open(report_file, 'w', encoding='utf-8') as f:
    f.write(f'{translated_files}/{total_files} files complete ({percent_complete:.2f}%)\n')
    f.write(f'{pending_files} files require attention:\n\n')
    f.write('Files requiring attention (translated_keys/total_keys, pending_keys, complete%):\n')
    for rel_path, done_keys, total_keys, pending_keys, file_pct in pending_details:
        f.write(f'{rel_path} ({done_keys}/{total_keys}, pending: {pending_keys}, {file_pct:.2f}%)\n')

print(f'{lang},{total_files},{pending_files},{translated_files},{percent_complete:.2f}')
PY

for locale_dir in "$DATA_DIR"/*; do
    [ -d "$locale_dir" ] || continue

    lang="$(basename "$locale_dir")"
    locale_summary="$(python3 "$PY_HELPER" "$locale_dir" "$DATA_DIR" "$OUTPUT_DIR" "$lang")"

    printf "%s\n" "$locale_summary" >> "$SUMMARY_FILE"
done

echo "Reports written to: $OUTPUT_DIR"
