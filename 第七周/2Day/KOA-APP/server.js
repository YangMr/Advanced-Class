const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();


//配置路由
router.get("/",(ctx,next)=>{
	  ctx.set('Access-Control-Allow-Origin',"*");
	ctx.response.type = "text/html";
	ctx.response.body = "<h1>Index Page</h1>";
})

router.get("/home",(ctx,next)=>{
	  ctx.set('Access-Control-Allow-Origin',"*");

	ctx.response.type="text/html";
	ctx.response.body="<h1>Home Page</h1>";
})

router.get("/login",(ctx,next)=>{
	ctx.set('Access-Control-Allow-Origin',"*");
	const data = ctx.request.query;
	if(data.name == "jack" && data.password == 123456){
		ctx.set("Content-Type", "application/json");
	        ctx.response.body = "{message : '登录成功'}";
	}
})

app.use(router.routes());









/*
app.use(async (ctx,next)=>{
	
	await next();
	 ctx.set('Access-Control-Allow-Origin',"*"); 
	ctx.response.type = "text/html";
	ctx.response.body = "<h1>hello world</h1>"
})
*/

app.listen(3000,function(){
	console.log("server is running at http://localhost:3000")
})
