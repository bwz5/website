#!/bin/bash
echo "Beggining automation upload to github pages"

cd /Users/benjaminzou/Desktop/CornellProjects/Website

rm -r docs 
npm run build 
mv build docs 

git add .
git commit -m "update"
git push 

echo "Automation process is complete."