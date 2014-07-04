#!/bin/bash
grep -c -R  "<TRANSLATE ME>" ../data/$1  | grep -v ":0" | cut -c 9-
