//引入koa
const Koa = require("koa");
//使用koa
const app = new Koa();
//引入koa-router
//const KoaRouter = require("koa-router");
//const router = new KoaRouter();

const router = require("koa-router")();

//访问Home时
router.get("/home/:aid",async (ctx)=>{
   ctx.type = "text/html";
   ctx.body = "<h1>我是Home页面</h1>"	
});

//访问login时
router.get("/login",async (ctx)=>{
   ctx.type = "text/html";
   ctx.body = "<h1>我是Login页面</h1>"
})

//访问register
router.get("/register",async (ctx)=>{
  ctx.type = "text/html";
   ctx.body = "<h1>我是Register页面</h1>"
})

//使用路由
app.use(router.routes());

//设置监听的端口号
app.listen(3000);

