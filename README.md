# N_m3u8DL-RE_WEB_UI

API接口和标题在public/_app.config.js里面修改

api接口

VITE_GLOB_API_URL:<span style="color:red;">http://localhost:3599/</span>

ws接口

VITE_GLOB_WS_URL:<span style="color:red;">http://localhost:3600/

网站标题

VITE_GLOB_WEB_TITLE:<span style="color:red;">m3u8DL_console</span>

默认express端口:3599
默认ws端口:3600

1. git clone https://github.com/aidenconst/N_m3u8DL-RE_UI_Server.git
2. cd N_m3u8DL-RE_UI_Server
3. npm install
4. npm start

API接口可以给油猴脚本或者插件使用
接口地址：http://localhost:3599/download
post参数:
title,
url,
retrycounts,
saveFilePaths,
setbinaryMeMrges,
setdecryptions,
threadCountss
参数可以只给title和url，其它参数于预先设置好就行

