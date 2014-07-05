#/usr/bin/python
import os
import sys
import shutil
# import zipfile
# import codecs

origin_folder = os.path.abspath('/Users/carlos/webdetails/bi/biserver-ce/pentaho-solutions/system/languagePackInstaller/data/se')
origin_folder = os.path.abspath('/Users/carlos/Downloads/system');

os.chdir(origin_folder)

src_suffix = 'es-mx';
dst_suffix = 'es';

# First round: copy files that are already translated, even if only partially
for root, dirs, filenames in os.walk('.'):
    for f in filenames:
        src = os.path.join(root, f)
        g = f.lower()

        if g.endswith(src_suffix.lower() + '.properties'):
            os.rename(src, os.path.join(root,f.replace(src_suffix + '.properties', dst_suffix + '.properties')))
        if g.endswith(src_suffix.lower() + '.js'):
            os.rename(src, os.path.join(root,f.replace(src_suffix + '.js', dst_suffix + '.js')))
        if g.endswith(src_suffix.lower() + '.js'):
            os.rename(src, os.path.join(root,f.replace(src_suffix.lower() + '.js', dst_suffix + '.js')))
