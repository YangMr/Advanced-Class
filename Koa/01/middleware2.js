//引入koa
const Koa = require("koa");
//使用Koa
const app = new Koa();

//设置响应的信息1
app.use(async (ctx,next)=>{
  //执行下一个中间件,但是我后面的内容时下一个中间执行完之后我后面的内容才会执行
  
  //设置响应的文本类型
  ctx.type = "text/html";
  //设置响应的内容
  ctx.body = "<h1>我是第一个中间件</h1>"
  
  await next()
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
