//引入http模块,可以通过这个模块创建服务器
const http = require("http");
//引入request模块,通过引入的request模块请求数据
const request = require("request");
//创建服务器
const server = http.createServer(function (req,res) {
    //设置编码
    res.setHeader("Content-type","text/plain;charset=UTF-8");
    //设置允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    console.log(req.url)
    request.get("http://api.zhuishushenqi.com/book/auto-complete" + req.url,function (error,response,body) {
        res.end(body);
    })
});
//设置监听的端口号
server.listen(8888);

