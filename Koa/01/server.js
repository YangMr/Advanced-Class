//引入koa
const Koa = require("koa");
//使用koa
const app = new Koa();

//设置响应的内容
app.use(async (ctx)=>{
   ctx.response.body = "<h1>我是koa</h1>"
});

//设置监听的端口号
app.listen(3000);
