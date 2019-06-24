//引入koa
const Koa = require("koa");
//使用koa
const app = new Koa();
//设置响应的内容
app.use(async (ctx,next)=>{
  //获取请求的路径
  if(ctx.request.url === "/home"){
     ctx.type = "text/html";	  
     ctx.body = "<h1>我是Home页面</h1>"
  }else{
     await next()
  }
});

app.use(async (ctx,next)=>{
  //获取请求的路径
  if(ctx.url === "/login"){
     ctx.type = "text/html";
     ctx.body = "<h1>我是登录页面</h1>";	  
  }else{
     await next()
  }
})

app.use(async (ctx,next)=>{
  //获取请求的路径
  if(ctx.url === "/register"){
     ctx.type = "text/html";
     ctx.body = "<h1>我是注册页面</h1>";
  }else{
    await next()
  }
})

//设置监听的端口号
app.listen(3000);

