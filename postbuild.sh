#!/bin/bash
# Browse into './build/' directory
cd build

echo '1/2 Replace file path'
find . -type f -maxdepth 1 | LC_ALL=C xargs -I{} sed -i.backup -e 's,/resume/static/,static/,g' {}

echo '2/2 Clean up'
find . -name '*.backup' -type f -delete
# Done