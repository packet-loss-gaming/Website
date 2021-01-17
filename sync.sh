#!/bin/bash -e

rm -rf out/
npm run build
rsync -av --delete --exclude '.git' out/ gh-pages/
