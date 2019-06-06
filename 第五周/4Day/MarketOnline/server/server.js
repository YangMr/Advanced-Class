const http = require("http");
const fs = require("fs");
const server = http.createServer(function(req,res){
	//设置跨域
	res.setHeader("Access-Control-Allow-Origin","*");
	// //设置字符编码
	res.setHeader("Content-type","text/plain;charset=utf-8");
	fs.readFile("./data.json","utf-8",function(error,data){
		if(error) console.log(error);
		res.end(data)
	})
});
server.listen(8888);