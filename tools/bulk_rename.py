#!/usr/bin/env python
"""Bulk-renames locale files from one suffix to another.

Usage: python bulk_rename.py <folder> <src_suffix> <dst_suffix>
Example: python bulk_rename.py /path/to/data/es_MX es-mx es
"""
import os
import sys

if len(sys.argv) < 4:
    print("Usage: python bulk_rename.py <folder> <src_suffix> <dst_suffix>")
    sys.exit(1)

origin_folder = os.path.abspath(sys.argv[1])
src_suffix = sys.argv[2]
dst_suffix = sys.argv[3]

os.chdir(origin_folder)

# First round: copy files that are already translated, even if only partially
for root, dirs, filenames in os.walk('.'):
    for f in filenames:
        src = os.path.join(root, f)
        g = f.lower()

        if g.endswith(src_suffix.lower() + '.properties'):
            os.rename(src, os.path.join(root, f.replace(src_suffix + '.properties', dst_suffix + '.properties')))
        if g.endswith(src_suffix.lower() + '.js'):
            os.rename(src, os.path.join(root, f.replace(src_suffix + '.js', dst_suffix + '.js')))
