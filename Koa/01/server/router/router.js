//引入路由
const router = require("koa-router")();
const HomeController = require("../controller/home");

//引入封装的数据库模块
const query = require("../config/db3");

//导出路由
module.exports= (app)=>{
	
	//查
	router.get("/api/getData",async (ctx,next)=>{
		let data = await query.query("select * from users");
		ctx.body = data;
	})
	//增
	router.get("/api/addData",async (ctx,next)=>{
		let data = await query.query("insert into users (username,userpass) values ('nick','66666')");
		ctx.body = "插入成功";
	})
	//删
	router.get("/api/delData",async (ctx,next)=>{
		let data = await query.query("delete from users where id = 1");
		ctx.body = "删除成功";
	})
	//改
	router.get("/api/updateData",async (ctx,next)=>{
		let data = await query.query("update users set username='jack' where id = 2");
		ctx.body = "修改成功";
	})
	
	//设置根路由
	router.get("/",HomeController.index)
	
	//设置home路由
	router.get("/home",HomeController.home)
	
	
	//设置home动态路由
	router.get("/home/:id/:name",HomeController.homeParams)
	
	
	//设置user路由,通过user路由展示注册界面
	router.get("/user",HomeController.user);
	
	
	//设置/user/register,用户接收post方式传递过来的数据
	router.post("/user/register",HomeController.userRegister);
	
	//设置404路由
	router.all("/*",HomeController.notFound);
	
	//使用路由
	app.use(router.routes());
}