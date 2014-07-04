#!/usr/bin/env python

import os
import sys
import shutil

languageCode = sys.argv[1]
language = sys.argv[2]
origin_folder = os.path.abspath(sys.argv[3].replace('file://', ''))
destination_folder = os.path.abspath(sys.argv[4].replace('file://', ''))
force_copy = False
if len(sys.argv) > 5:
    force_copy = (sys.argv[5] == 'force')
    if force_copy:
        print "A forced copy was requested. I'm hoping you know what you are doing"

os.chdir(origin_folder)
for root, dirs, filenames in os.walk('.'):
    for f in filenames:
        g = f.lower()
        src = os.path.join(root, f)
        dst =  os.path.realpath(os.path.join(destination_folder, root, f))
        dst_parent = os.path.dirname(dst);
        #print 'Found ' + src + ' which should go to ' + dst
        if not os.path.exists( os.path.dirname(dst) ) and not force_copy:
            continue

        if g.endswith(languageCode.lower() + '.properties'):
            if force_copy or not os.path.exists(dst_parent):
                os.makedirs(dst_parent)
            # Copy files
            print 'Copying ' +  os.path.realpath(os.path.join(origin_folder, src)) + ' to ' + dst
            shutil.copy2(src, dst)

        elif g.endswith('supported_languages.properties'):
            if force_copy:
                if not os.path.exists(dst_parent):
                    os.makedirs(dst_parent)
                if not os.path.exists(dst):
                    # Create an empty file
                    with open(dst, 'w') as file:
                        file.write('#')

            # Patch the file
            print 'Patching ' + dst
            with open(dst, 'r+') as file:
                lines = file.readlines()
                for line in lines:
                    if line.startswith(languageCode):
                        break

                else:
                    print 'Creating ' + dst
                    file.write('\n' + languageCode + ' = ' + language + '\n')
