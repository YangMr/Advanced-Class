const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();
const a = "hello"
router.get("/login",async (ctx,next)=>{
   ctx.type = "text/html";
   ctx.body = `<h1>姓名是: 密码是: </h1>`;

})

app.use(router.routes());
app.listen(3000);
