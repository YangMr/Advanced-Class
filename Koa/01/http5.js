const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());
router.get("/login",async (ctx,next)=>{
   console.log(ctx.querystring)	
   const obj = ctx.query
   ctx.type = "text/html";
   ctx.body = `<h1>姓名是:${obj.name} 密码是:${obj.pwd} </h1>`;

})

router.get("/home/:id/:name",async ctx=>{
  console.log(ctx.params);
  ctx.type = "text/html";
  ctx.body = `第一个动态路由: ${ctx.params.id} 第二个动态路由: ${ctx.params.name}`	
})

router.get("/user",async (ctx,next)=>{
  ctx.type = "text/html";
  ctx.body = `
	<form method="post" action="/user/register">
	    <p>
	       <label>用户名:</label>
	       <input type="text" name="username">
	    </p>
	    <p>
	       <label>密　码:</label>
	       <input type="password" name="pwd">
	    </p>
	    <p>
	       <input type="submit" value="注册">
	    </p>
	</form>`;
})

router.post("/user/register",async (ctx,next)=>{
   console.log(ctx.request.body);
   const data = ctx.request.body;
   ctx.body = `<h1>用户名是: ${data.username} 密码是: ${data.pwd}</h1>`	
})

app.use(router.routes());
app.listen(3000);
