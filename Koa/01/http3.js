const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();
const a = "hello"
router.get("/login",async (ctx,next)=>{
   console.log(ctx.querystring)	
   const obj = ctx.query
   ctx.type = "text/html";
   ctx.body = `<h1>姓名是:${obj.name} 密码是:${obj.pwd} </h1>`;

})

app.use(router.routes());
app.listen(3000);
