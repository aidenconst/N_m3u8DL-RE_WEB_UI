const express = require("express");
const router = express.Router();
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");
const WebSocket = require("ws");
const cors = require("cors");
const axios = require("axios");
const { spawn, fork, exec } = require("child_process");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const expressJwt = require("express-jwt"); // 用于路由权限控制
const jwt = require("jsonwebtoken"); // 用于签发、解析`token`
const Jwt = require("jsonwebtoken"); // 用于签发、解析`token`
const pm2 = require("pm2");
const secretKey = "aidenSEAFORESTyibin";

const IdentifyENVvar = (VariableName) => {
  exec(
    `${VariableName} ${VariableName === "ffmpeg" ? "" : "-"}-version`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`${VariableName} 环境变量安装或配置无效`);
        // 处理 FFmpeg 未安装或环境变量未配置的情况
        return false;
      } else {
        console.log(`${VariableName} 安装正确，环境变量配置成功`);
        return true;
      }
    }
  );
};

/* 获取一个期限为72小时的token */
function getToken(payload = {}) {
  return jwt.sign(payload, secretKey, {
    expiresIn: "72h",
  });
}
/**路由守卫**/
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];
  if (token == null)
    return res.sendStatus(401); // 如果没有token，返回未授权的状态码
  try {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) return res.sendStatus(401);
      //  const newToken = getToken(decoded.username);
      res.decoded = decoded;
      //res.header("Authoization", newToken);//每次访问延长授权时间
      next(); // 调用下一个中间件或路由处理器
    });
  } catch (error) {
    return res.send({
      code: -1,
      data: null,
      error: "请刷新登录后重试！",
      message: "请刷新登录后重试！",
    });
  }
}
/** 重启程序
 *   延时1s重启
 */
function restartMain() {
  setTimeout(() => {
    exec("nodemon index.js", (error, stdout, stderr) => {
      if (error) {
        console.error(`执行出错: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  }, 1000);
}
const configFile = path.join(__dirname, "config.json");
const configData = JSON.parse(fs.readFileSync(configFile, "utf8"));
//express配置
const port = configData.port || 3600;
const app = express();
// 设置静态文件路径
app.use(express.static("public"));
//多进程配置
var threadCounts = configData.threadCounts || 5; //默认设置并发数量
var downloadTasks = []; //数据池
var threads = new Set(); //当前并发线程池
var tasksToProcess = []; //暂存执行线程池数据
var worker;
//用户登录信息配置
const defaultUsername = configData.userName || "console";
const defaultPassword = configData.passWord || "123456";

//ws配置
const clients = []; // 保存所有连接的客户端

//环境变量配置状态，启动时检查一次
var ffmpegIdentify = false;
var Nm3u8DLREIdentify = false;
if (process.env.INIT_DONE !== "true") {
  //环境变量配置状态，启动时检查一次
  ffmpegIdentify = IdentifyENVvar("ffmpeg");
  Nm3u8DLREIdentify = IdentifyENVvar("N_m3u8DL-RE");
  process.env.INIT_DONE = "true";
}
//下载信息默认配置
var apiToken = configData.apiToken || "6666"; //API验证
var saveFile = configData.saveFile || "/app/download"; //保存目录
var tempDir = configData.tempDir || "/app/download/temp"; //零时目录
var threadCount = configData.threadCount || 12; //线程数
var retrycount = configData.retrycount || 5; //分片下载重试次数
var ffmpegPath = ffmpegIdentify
  ? "ffmpeg"
  : configData.ffmpegPath || "/app/plugin/ffmpeg/ffmpeg"; //ffmpeg目录
var Nm3u8DLRE = Nm3u8DLREIdentify
  ? "N_m3u8DL-RE"
  : configData.Nm3u8DLRE || "/app/plugin/N_m3u8DL-RE/N_m3u8DL-RE"; //N_m3u8DL-RE目录
var binaryMeMrge = configData.binaryMeMrge || true; //是否二进制合并
var mp4RealTimeDecryption = configData.mp4RealTimeDecryption || true; //是否实时解密MP4分片
/**json操作**/
/**更新json文件**/
function writeJson(fileName = "done.json", data) {
  // 文件路径
  const filePath = path.join(__dirname, `json/${fileName}`);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    //判断文件是否存在
    if (err) {
      // 文件不存在，创建写入流
      const writeStream = fs.createWriteStream(filePath);
      jsonStr = JSON.stringify(data);
      writeStream.write(jsonStr);
      writeStream.end();
    } else {
      // 文件存在，追加写入
      // 创建一个可以追加写入的流
      const writeStream = fs.createWriteStream(filePath, { flags: "a" });
      // 获取文件大小
      const stats = fs.statSync(filePath);
      const fileSize = stats.size;
      var jsonStr = "";
      if (fileSize > 0) {
        jsonStr = "," + JSON.stringify(data);
      } else {
        // 将数据转换为JSON字符串
        jsonStr = JSON.stringify(data);
      }
      // 写入文件
      writeStream.write(jsonStr);
      //关闭工作流
      writeStream.end();
    }
  });
}
/**读取json文件**/
function readJson(fileName = "done.json") {
  return new Promise(function (resolve, reject) {
    const filePath = path.join(__dirname, `json/${fileName}`);
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log(err);
        //  throw err;
        resolve([]);
      } else {
        const jsonData = JSON.parse(`[${data}]`);
        resolve(jsonData);
      }
    });
  });
}
/**允许跨域请求**/
router.use(cors());
//设置跨域访问
router.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use(express.urlencoded({ extended: true }));
// Express 中间件来解析 JSON 请求体
app.use(express.json());
/**
 * 公共函数
 * **/
//生成哈希值
const hash = (text) => {
  return crypto.createHash("sha256").update(text).digest("hex");
};
//生成md5,取前16位
const md5 = (str) => {
  return crypto
    .createHash("md5")
    .update(str + Date.now())
    .digest("hex")
    .substring(0, 16);
};
/**操作json删除json文件内指定id数据
 * id   string    被删除的id
 * key  string    操作的json文件名，不含扩展名
 */
const jsonDelItem = (id, fileName) => {
  return new Promise(function (resolve, reject) {
    const filePath = path.join(__dirname, `json/${fileName}.json`);
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      const jsonData = JSON.parse(`[${data}]`);
      var filter = jsonData.find((item) => item.id === id);
      var index = jsonData.indexOf(filter);
      index > -1 && jsonData.splice(index, 1);
      const writeStream = fs.createWriteStream(filePath, { flags: "w" });
      const newData = JSON.stringify(jsonData).replace(/^\[|\]$/g, "");
      writeStream.write(newData);
      writeStream.end();
      writeStream.on("finish", () => {
        console.log("文件覆盖写入完成。", filePath);
        resolve(true);
      });
      writeStream.on("error", (err) => {
        console.error(`${filePath}写入过程中发生错误:`, err);
        reject(false);
      });
    });
  });
};
//检查文件是否存在
const fileNameIsSave = (file) => {
  return new Promise((resolve, reject) => {
    fs.access(file, fs.constants.F_OK, (err) => {
      if (err) {
        resolve(false);
        return;
      }
      resolve(true);
    });
  });
};
//ws广播给所有用户
function notifyClients(message) {
  clients.forEach(function (client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}
function formatHeaders(headers) {
  return Object.keys(headers).reduce((header, name) => {
    header[String(name).toLowerCase()] = headers[name];
    return header;
  }, {});
}
const isNotEmpty = (str) => str && str.length > 0;
/**
 *  下载图片
 *  @url      String    图片下载url
 *  @savePath   String    文件或目录
 **/
async function downloadAndSaveImage(url, savePath = "images") {
  try {
    // 发送HTTP请求获取图片二进制数据
    const response = await axios.get(url, {
      responseType: "arraybuffer", // 设置响应类型为二进制数据流
    });
    // 将二进制数据写入文件
    fs.writeFileSync(savePath, response.data);
    console.log(`图片下载成功: ${savePath}`);
  } catch (error) {
    console.error("图片下载错误:", error);
  }
}
/**mp4下载
 * url          string  下载url
 * file         string  文件保存路径
 * title        string  保存文件名
 * wsMsg        obj     回调信息
 * parentPorts  obj     回调句柄
 */
async function downloadmp4(url, file, title, wsMsg, parentPorts) {
  var downinfo = {};
  let startTime = Date.now(); // 记录开始时间
  let response = await axios({
    timeout: 60000,
    method: "get",
    responseType: "stream", // 请求文件流
    headers: {
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      Pragma: "no-cache",
    },
    url,
    onDownloadProgress(ProgressEvent) {
      const now = Date.now(); // 记录当前时间
      const timeDiff = now - startTime; // 计算时间差
      const load = ProgressEvent.loaded;
      const total = ProgressEvent.total;
      const progress = ((load / total) * 100).toFixed(2);
      const totalSize = (total / 1024 / 1024).toFixed(2);
      const loadSize = (load / 1024 / 1024).toFixed(2);
      downinfo = {
        downclip: Math.floor(loadSize), //已下载分片数
        totalclip: Math.floor(totalSize), //所有分片数
        downprogress: progress, //下载进度百分比
        downsize: loadSize, //已下载文件大小
        downsizeunit: "MB", //已下载文件大小单位
        totalsize: totalSize, //文件总大小
        totalsizeunit: "MB", //文件总大小单位
        downspeed: 0, //下载速度
        downspeedunit: "", //下载速度单位
      };
      if (timeDiff > 0) {
        const downloadSpeed = ProgressEvent.loaded / timeDiff; // 转换为KB/s
        const downloadSpeeds = downloadSpeed.toFixed(0);
        downinfo.downspeed =
          downloadSpeeds < 1024
            ? downloadSpeed.toFixed(2)
            : (downloadSpeeds / 1024).toFixed(2);
        downinfo.downspeedunit = downloadSpeeds < 1024 ? "KB" : "MB";
        console.log(
          `下载速度：${downinfo.downspeed}${downinfo.downspeedunit}/s`
        ); // 打印下载速度
      }
      wsMsg.code = 200;
      wsMsg.msg = "下载中...";
      wsMsg.info = downinfo;
      parentPorts.postMessage(wsMsg); //回调给主进程
      if (progress == 100) {
        console.log("下载完成,保存到：", file);
      }
    },
  });
  let responseHeaders = formatHeaders(response.headers);
  let fileLength = Number(responseHeaders["content-length"]);
  let readerStream = response.data.pipe(fs.createWriteStream(file));
  // 监听 WraiteStream 的 finish 事件
  readerStream.on("finish", () => {
    if (fileLength === readerStream.bytesWritten) {
      wsMsg.code = 200;
      wsMsg.msg = "下载完成";
      downinfo.downprogress = 100;
      wsMsg.info = downinfo;
      parentPorts.postMessage(wsMsg); //回调给主进程
      const jsonData = {
        id: wsMsg.id,
        title: wsMsg.title,
        downurl: wsMsg.downurl,
        time: Date.now(),
        size: `${wsMsg.info.totalsize}${wsMsg.info.totalsizeunit}`,
      };
      writeJson("done.json", jsonData);
      console.log(`${title}--视频下载成功!`);
    }
  });
  readerStream.on("error", (err) => {
    const jsonData = {
      msg: "axios下载错误",
      id: wsMsg.id,
      title: wsMsg.title,
      downurl: wsMsg.downurl,
      time: Date.now(),
    };
    writeJson("fail.json", jsonData);
    parentPorts.postMessage(wsMsg);
    //console.error(`${title}--视频下载失败!`);
  });
}
//下载主函数
/**下载 M3U8 文件的函数
 *   task        object  下载数据信息
 *   parentPorts any     子进程句柄，用于回调下载进度信息给主进程
 **/
function downloadM3U8(
  id,
  tsFileIsSave,
  url,
  file,
  fileTs,
  title,
  wsMsg,
  tempInfo,
  parentPorts
) {
  var downinfo = {};
  // ffmpeg 命令和参数
  const m3u8DLArgs = [
    url,
    "--use-ffmpeg-concat-demuxer",
    "--save-name",
    title,
    "--save-dir",
    tempInfo.saveFilePaths,
    "--tmp-dir",
    tempDir,
    "--ffmpeg-binary-path",
    ffmpegPath,
    "--ui-language",
    "zh-CN",
    "--thread-count",
    tempInfo.threadCountss,
    "--download-retry-count",
    tempInfo.retrycounts,
    "--binary-merge",
    tempInfo.setbinaryMeMrges,
    "--mp4-real-time-decryption",
    tempInfo.setdecryptions,
  ];
  //设置header，header必须为json格式,如：var json = {Cookie: "mycookie",}
  if (tempInfo.header) {
    for (let key in tempInfo.header) {
      m3u8DLArgs.push("-H");
      m3u8DLArgs.push(`${key}: ${tempInfo.header[key]}`);
    }
  } else {
    m3u8DLArgs.push("-H");
    m3u8DLArgs.push(
      "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
    );
  }
  // 创建 ffmpeg 子进程
  const m3u8DLArgsProcess = spawn(Nm3u8DLRE, m3u8DLArgs);
  // 监听标准输出（stdout）
  m3u8DLArgsProcess.stdout.on("data", (data) => {
    let info = data.toString();
    console.log(info);
    if (
      info.includes("404 (Not Found)") ||
      info.includes("Connection refused")
    ) {
      //无法连接，重试
      const matcha = info.match(/\((\d+)\/(\d+)\)/);
      if (matcha) {
        console.log(`ID:${id},404错误,正在重试${matcha[0]}...`);
        wsMsg.code = 500;
        wsMsg.msg = `404错误或拒绝访问,重试${matcha[0]}...`;
        parentPorts.postMessage(wsMsg); //回调给主进程
        const jsonData = {
          msg: "404错误",
          id: wsMsg.id,
          title: wsMsg.title,
          downurl: wsMsg.downurl,
          time: Date.now(),
        };
        writeJson("fail.json", jsonData);
      }
    } else {
      const regex =
        /(\d+)\/(\d+)\s+(\d+\.\d+)%\s+(\d+\.\d+)(KB|MB|GB)\/(\d+\.\d+)(KB|MB|GB)\s+(\d+\.\d+)(GBps|MBps|KBps|Bps)/;
      const match = info.match(regex);
      if (match) {
        downinfo = {
          downclip: parseFloat(match[1]), //已下载分片数
          totalclip: parseFloat(match[2]), //所有分片数
          downprogress: parseFloat(match[3]), //下载进度百分比
          downsize: parseFloat(match[4]), //已下载文件大小
          downsizeunit: match[5], //已下载文件大小单位
          totalsize: parseFloat(match[6]), //文件总大小
          totalsizeunit: match[7], //文件总大小单位
          downspeed: parseFloat(match[8]), //下载速度
          downspeedunit: match[9], //下载速度单位
        };
        wsMsg.code = 200;
        wsMsg.msg = "下载中...";
        wsMsg.info = downinfo;
        parentPorts.postMessage(wsMsg); //回调给主进程
        //console.log(`分片信息[${downinfo.downclip}/${downinfo.totalclip}]--文件大小[${downinfo.downsize}${downinfo.downsizeunit}/${downinfo.totalsize}${downinfo.totalsizeunit}]--下载速度[${downinfo.downspeed}${downinfo.downspeedunit}]--进度[${downinfo.downprogress}%]`);
      }
      return {
        id,
        title,
        tsFileIsSave,
      };
    }
  });
  // 监听标准错误（stderr）
  m3u8DLArgsProcess.stderr.on("data", (data) => {
    console.error(`下载错误: ${data.toString()}`);
    wsMsg.code = 500;
    wsMsg.msg = "下载错误,错误信息:" + data.toString();
    wsMsg.info = "";
    parentPorts.postMessage(wsMsg); //回调给主进程
    const jsonData = {
      msg: "下载错误",
      id: wsMsg.id,
      title: wsMsg.title,
      downurl: wsMsg.downurl,
      time: Date.now(),
    };
    writeJson("fail.json", jsonData);
    reject({
      id,
      title,
      tsFileIsSave,
    });
  });
  // 监听进程关闭,下载完成
  m3u8DLArgsProcess.on("close", async (code) => {
    console.log(`下载完成！-->文件保存至:${file}`);
    wsMsg.code = 200;
    wsMsg.msg = "下载完成！";
    wsMsg.info = {
      downclip: downinfo.totalclip, //已下载分片数
      totalclip: downinfo.totalclip, //所有分片数
      downprogress: 100, //下载进度百分比
      downsize: downinfo.totalsize, //已下载文件大小
      downsizeunit: downinfo.downsizeunit, //已下载文件大小单位
      totalsize: downinfo.totalsize, //文件总大小
      totalsizeunit: downinfo.totalsizeunit, //文件总大小单位
      downspeed: 0, //下载速度
      downspeedunit: downinfo.downspeedunit, //下载速度单位
    };
    const jsonData = {
      id: wsMsg.id,
      title: wsMsg.title,
      downurl: wsMsg.downurl,
      time: Date.now(),
      size: `${wsMsg.info.totalsize}${wsMsg.info.totalsizeunit}`,
    };
    writeJson("done.json", jsonData);

    parentPorts.postMessage(wsMsg); //回调给主进程
    return {
      id,
      title,
      tsFileIsSave,
    };
  });
  // 捕获异常
  m3u8DLArgsProcess.on("error", (error) => {
    wsMsg.code = 400;
    wsMsg.msg = `报错:FFmpeg process error: ${error.message}`;
    wsMsg.info = "";
    console.log("下载异常");
    const jsonData = {
      msg: "ffmpeg报错",
      id: wsMsg.id,
      title: wsMsg.title,
      downurl: wsMsg.downurl,
      time: Date.now(),
    };
    writeJson("fail.json", jsonData);
    parentPorts.postMessage(wsMsg); //回调给主进程
    //notifyClients(wsMsg);
    return {
      id,
      title,
      tsFileIsSave,
    };
  });
}
function downloadMain(task, parentPorts) {
  return new Promise(async (resolve, reject) => {
    const { id, title, url, imgUrl, tempInfo } = task;
    const wsMsg = {
      code: 500,
      info: { downprogress: 0 },
      msg: "",
      id: id,
      downurl: url,
      title: title,
    };
    //console.log(`下载数据：`, task);
    const file = `${tempInfo.saveFilePaths}/${title}.mp4`; //拼接视频文件路径
    const fileTs = `${tempInfo.saveFilePaths}/${title}.ts`;
    const imgFile = `${tempInfo.saveFilePaths}/${title}-poster.jpg`; //拼接图片文件路径
    const fileIsSave = await fileNameIsSave(file);
    const tsFileIsSave = await fileNameIsSave(fileTs);
    //console.log(`保存目录：${file}`);
    //console.log(`ts保存目录：${fileTs}`);
    if (fileIsSave == false && tsFileIsSave == false) {
      if (imgUrl) {
        downloadAndSaveImage(imgUrl, imgFile);
      } else {
        console.log(`封面缺失,跳过...`);
      }
      if (url.indexOf(".m3u8") !== -1) {
        //N_m3u8DL-RE下载
        console.log("N_m3u8DL-RE下载");
        downloadM3U8(
          id,
          tsFileIsSave,
          url,
          file,
          fileTs,
          title,
          wsMsg,
          tempInfo,
          parentPorts
        );
      } else {
        //axios文件流下载
        console.log("axios下载");
        console.log(`线程数更新为：${threadCount}`);
        downloadmp4(url, file, title, wsMsg, parentPorts);
      }
    } else {
      wsMsg.code = 300;
      wsMsg.msg = `文件已存在,跳过...`;
      wsMsg.info = "";
      console.log(`文件已存在,跳过...`);
      parentPorts.postMessage(wsMsg); //回调给主进程
      resolve({
        id,
        title,
        tsFileIsSave,
      });
    }
  });
}
//主线程
if (isMainThread) {
  /**express服务端启动**/
  const server = app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}`);
    console.log(`WebSocket server running at ws://localhost:${port}`);
  });
  /**ws服务端启动**/
  const wss = new WebSocket.Server({ server: server }); //开启WebSocket服务端
  //ws监听用户连接
  wss.on("connection", function connection(ws, req) {
    const queryParamsString = req.url.split("?")[1]; // 获取URL中的查询参数部分
    const searchParams = new URLSearchParams(queryParamsString);
    // 解析参数
    const token = searchParams.get("Authorization");
    const payload = jwt.verify(token, secretKey);
    const username = payload.username;
    if (!token || !username) {
      //如果没有提供正确的token或者token不正确，关闭连接
      ws.close();
      return;
    }
    // 添加客户端到数组
    clients.push(ws);
    notifyClients({
      code: 800,
      title: "M3U8下载配套api",
      info: { downprogress: 100 },
      downurl: "baidu.com",
      msg: "欢迎连接WS",
    });
    // 当客户端关闭连接时，从数组中移除
    ws.on("close", function () {
      clients.splice(clients.indexOf(ws), 1);
    });
  });
  /**主线程主任务**/
  router.get("/downloadfail", authenticateToken, async (req, res) => {
    const jsonObj = await readJson("fail.json");
    jsonObj.reverse();
    res.send({
      code: 0,
      data: jsonObj,
      message: "下载失败数据",
    });
  });
  router.get("/downloaddone", authenticateToken, async (req, res) => {
    const jsonObj = await readJson("done.json");
    jsonObj.reverse();
    res.send({
      code: 0,
      data: jsonObj,
      message: "下载成功数据",
    });
  });
  router.get("/user/info", authenticateToken, (req, res) => {
    const jsonData = {
      code: 0,
      data: {
        id: 0,
        realName: defaultUsername,
        roles: ["super"],
        username: defaultUsername,
      },
      error: null,
      message: "ok",
    };
    //const jsonObj = JSON.parse(jsonData)
    res.send(jsonData);
  });
  router.post("/auth/refresh", (req, res) => {
    const jsonData = {
      code: -1,
      data: null,
      error: "登录认证过期，请重新登录后继续。",
      message: "登录认证过期，请重新登录后继续。",
    };
    res.sendStatus(401).send(jsonData);
  });
  router.post("/auth/logout", (req, res) => {
    res.clearCookie("jwt");
    delete req.headers.authorization;
    const jsonData = {
      code: 0,
      data: "",
      error: null,
      message: "ok",
    };
    //const jsonObj = JSON.parse(jsonData)
    res.send(jsonData);
  });
  router.post("/auth/login", (req, res) => {
    const { username, password, selectAccount, captcha } = req.body;
    console.log({ defaultUsername, defaultPassword, username, password });
    if (defaultUsername === username && defaultPassword === password) {
      console.log("账号密码验证通过");
      const token = getToken({ username });
      //console.log(token)
      res.header("Authoization", token);
      res.cookie("jwt", token, {
        maxAge: 3 * 24 * 60 * 60 * 1000, // Cookie有效时长（毫秒）
        httpOnly: true, // 仅通过HTTP协议访问（前端不可访问）
        secure: false, // 仅在HTTPS协议下传输
        sameSite: "lax", // 防止CSRF攻击
      });
      const jsonData = {
        code: 0,
        data: {
          id: 0,
          password: md5(password),
          realName: username,
          roles: ["super"],
          username: username,
          accessToken: token,
        },
        error: null,
        message: "ok",
      };
      //const jsonObj = JSON.parse(jsonData)
      res.send(jsonData);
    } else {
      const jsonData = {
        code: 1,
        data: {},
        error: "账号或密码错误",
        message: "账号或密码错误",
      };
      res.send(jsonData);
    }
  });
  router.get("/auth/codes", (req, res) => {
    const jsonData = {
      code: 0,
      data: ["AC_100100", "AC_100110", "AC_100120", "AC_100010"],
      error: null,
      message: "ok",
    };
    // const jsonObj = JSON.parse(jsonData)
    res.send(jsonData);
  });
  router.get("/getconfig", authenticateToken, (req, res) => {
    const filePath = path.join(__dirname, "config.json");
    //console.log(filePath)
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      //console.log(data)
      const jsonData = JSON.parse(data);
      res.send({ code: 0, data: jsonData, msg: "获取成功" });
    });
  });
  router.post("/editconfig", authenticateToken, (req, res) => {
    const data = req.body;
    data.userName = configData.userName;
    data.passWord = configData.passWord;
    const filePath = path.join(__dirname, "config.json");
    const newJson = JSON.stringify(data);
    fs.writeFile(filePath, newJson, (err) => {
      if (err) throw err;
      restartMain();
      res.send({
        code: 0,
        data: { code: 0, msg: "1秒后重启服务器" },
        msg: "更新成功",
      });
    });
  });
  // 删除json中指定数据
  router.post("/delJsonItem", authenticateToken, async (req, res) => {
    const { id, key } = req.body;
    const upType = await jsonDelItem(id, key);
    const data = {
      code: 0,
      data: { type: upType },
      message: "更新成功",
    };
    res.send(data);
  });
  // API端接收下载信息
  router.post("/download", (req, res) => {
    const {
      title,
      url,
      retrycounts,
      saveFilePaths,
      setbinaryMeMrges,
      setdecryptions,
      threadCountss,
      imgUrl,
      token,
    } = req.body;
    if (token !== apiToken) {
      res.send({
        code: 0,
        data: {},
        msg: "token错误",
      });
      return;
    }
    //单次下载设置参数
    const tempInfo = {
      retrycounts: retrycounts || retrycount,
      saveFilePaths: saveFilePaths || saveFile,
      setbinaryMeMrges: setbinaryMeMrges || binaryMeMrge,
      setdecryptions: setdecryptions || mp4RealTimeDecryption,
      threadCountss: threadCountss || threadCount,
    };
    console.log("配置信息:", tempInfo);
    //计算hash值
    const id = md5(title);
    const addInfo = { id, title, url, imgUrl, tempInfo };
    //console.log(addInfo.id);
    //notifyClients(addInfo)
    //添加到待下载池
    downloadTasks.push(addInfo);
    //添加到线程池
    if (threads.size < 5) {
      //如果只有新增的一条数据且没有正在执行的子线程
      //console.log("执行主线程");
      downMain();
    } else {
      console.log(
        `未执行-->数据池数据:${downloadTasks.length}条,运行中子线程：${threads.size}`
      );
    }
    // 如果任务队列中有任务，则启动下载进程池
    res.send({
      code: 0,
      data: { id, title, url },
      msg: "已加入下载队列",
    });
  });
  app.use("/", router);
  /**下载主程序**/
  function downMain() {
    let addThread = threadCounts - threads.size; //计算添加多少任务
    tasksToProcess = downloadTasks.splice(0, addThread); //取出任务数据
    console.log(`本次添加${tasksToProcess.length}个子线程下载任务`);
    for (let i = 0; i < tasksToProcess.length; i++) {
      //循环加入执行线程池
      threads.add(new Worker(__filename, { workerData: tasksToProcess[i] })); //加入到执行线程池
    }
    //console.log(`本次运行 ${threads.size} 个子线程任务...任务池还剩余:${downloadTasks.length}条下载任务`);
    for (let worker of threads) {
      //循环监听线程任务执行状态
      worker.on("error", (err) => {
        throw err;
      }); //线程出错
      worker.on("exit", () => {
        //线程结束退出
        threads.delete(worker);
        //console.log(`子线程退出, 当前还有${threads.size} 个线程运行中...`);
        if (threads.size < 5 && downloadTasks.length > 0) {
          //执行线程池任务完成
          console.log(`任务池还有其它待下载任务,继续下载...`);
          downMain();
        }
      });
      //所有子进程回调信息加入到primes
      worker.on("message", (msg) => {
        //console.log('主线程接收到子线程回调信息',msg);
        //primes = primes.concat(msg);
        notifyClients(msg);
      });
    }
  }
} else {
  //子线程
  const { parentPort, workerData } = require("worker_threads");
  downloadMain(workerData, parentPort);
}
