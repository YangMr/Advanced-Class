//引入koa,是为了使用koa,koa能够搭建后端服务
const Koa = require("koa");
//引入path,在这里面目前是为了解决静态资源目录路径问题
const path = require("path");
//引入路由,引入路由是为了跳转到重定向的定制,接收授权码
const router = require("koa-router")();
//引入koa-static,设置静态资源目录
const serve = require("koa-static");
//引入axios,是为请求数据以及发送数据
const axios = require("axios");
//引入querystring模块
//设置客户端id
const clientID = "d386671dffecc12c6d4a";
//设置客户端密钥
const clientSecret = "a09ca57a613b91340589d9ff365eacbbdf12def0";

//使用koa
const app = new Koa();

//设置静态资源目录
const main = serve(path.join(__dirname));

const oauth = async ctx =>{
	//获取授权码
	const requestToken = ctx.request.query.code;
	console.log(requestToken);
	
	//将授权码发送给Github,Github接收到之后,会给我们返回令牌,也就token
/* 	const tokenResponse = await axios({
		method : "post",
		url : "https://github.com/login/oauth/access_token?client_id=" + clientID + "&client_secret=" + clientSecret + "&code=" + requestToken,
		headers : {
			accept : "application/json"
		} 
	}); */
	
	//接收令牌
	/* const accessToken = tokenResponse.data.access_token;
	console.log(accessToken); */
	
	//再将令牌发送给github,github会给我们返回用户的信息
	/* const result =await axios({
		method : "get",
		url : "https://api.github.com/user",
		headers : {
			accept : "application/json",
			 Authorization : `token ${accessToken}`
		}
	});
	
	//接收数据
	const name = result.data.name;
	console.log(result.data.name);
	//重定向到欢迎页面'
	ctx.response.redirect(`/welcome.html?name=${encodeURIComponent(name)}`) */
}


//设置重定向页面的路由
/* router.get("/oauth/redirect",oauth); */


//将静态资源目录接入到Koa
app.use(main);
//将路由接入到Koa
app.use(router.routes());



//设置监听的端口号
app.listen(8080);