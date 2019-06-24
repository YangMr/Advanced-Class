//引入koa
const Koa = require("koa");
//使用Koa
const app = new Koa();

//设置响应的信息1
app.use(async (ctx,next)=>{
  //设置响应的文本类型
  ctx.type = "text/html";
  //设置响应的内容
  ctx.body = "<h1>我是第一个中间件</h1>"
});

//设置响应的信息2
app.use(async (ctx,next)=>{
  //设置响应的文本类型
  ctx.type = "text/html";
  //设置响应的内容
  ctx.body = "<h1>我是第二个中间件</h1>"
})

//设置监听的端口号
app.listen(3000);
