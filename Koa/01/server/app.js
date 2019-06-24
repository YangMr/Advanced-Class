//引入koa
const Koa = require("koa");
//引入path模块
const path = require("path");
//使用koa
const app = new Koa();
//引入路由文件router.js
const router = require("./router/router");
//引入bodyparser,这个的主要作用用来接收post方式传递过来的数据
const bodyParser = require("koa-bodyparser");

//引入静态资源koa-static
const staticFiles = require("koa-static");

//设置静态资源目录
const main = staticFiles(path.resolve(__dirname,"/public"))
app.use(main)
//引入模板引擎
const nunjucks = require("koa-nunjucks-2");

//使用模板引擎
app.use(nunjucks({
	ext : "html",
	path : path.join(__dirname,"views"), //指定视图目录
	nunjucksConfig: {
      trimBlocks: true // 开启转义 防Xss
    }
}))

//使用bodyparser
app.use(bodyParser());

router(app);


//设置监听的端口号
app.listen(3000);
