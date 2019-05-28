const http = require("http");
const request = require("request");
const baseUrl = "http://api.zhuishushenqi.com";
const server = http.createServer(function (req,res) {
    //设置允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    const url = req.url;
    request.get(baseUrl + req.url,function (error,response,body) {
        if(error) console.log(error);
        res.end(body)
    })
});
server.listen(8880);
