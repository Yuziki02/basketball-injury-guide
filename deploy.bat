@echo off
echo 开始部署网站...

echo 1. 添加所有修改...
git add .

echo 2. 提交更改...
git commit -m "更新网站内容"

echo 3. 推送到GitHub...
git push

echo 4. 构建项目...
npm run build

echo 5. 部署到GitHub Pages...
npm run deploy

echo 部署完成！
echo 请等待几分钟后访问: https://yuziki02.github.io/basketball-injury-guide/

pause 