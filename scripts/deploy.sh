npm run build

cd public

git init
git add -A
git commit -m 'deploy'

# 找一个快的地方部署
git push -f XXX.git master

cd ../
rm -rf public