#!/bin/bash -e

rm -rf out/
npm run build
npm run export
rsync -av --delete --exclude '.git' --exclude '.nojekyll' out/ gh-pages/
