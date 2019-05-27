//引入http模块,通过http模块创建服务器
const http = require("http");
//引入文件系统模块
const fs = require("fs");
//创建服务器
const server = http.createServer(function (req,res) {
    //设置编码
    res.setHeader("Content-type","text/plain;charset=UTF-8");
    //设置允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    fs.readFile("./list.json","utf-8",function (error,response) {
        if(error) console.log(error);
        // console.log(response);
        res.end(response)
    })
});
//设置监听的端口号
server.listen(8889)
