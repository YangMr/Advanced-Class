const http = require("http");
const querystring = require("querystring");
const server = http.createServer(function (req,res) {
    //设置跨域
    res.setHeader("Access-Control-Allow-Origin","*");

    console.log(querystring.parse(req.url));
    res.end("success")
});
server.listen(8000);
