const HomeService = require("../service/home");
module.exports = {
	//根路径的业务逻辑
	index : async function (ctx, next) {
      await ctx.render("home/index", {title: "iKcamp欢迎您"})
    },
	//home路径的业务逻辑
	home : async (ctx,next)=>{
	   //设置响应的类型
	  ctx.type = "text/html";
	  //设置响应的内容
	  ctx.body = "<h1>Home Page</h1>"
	},
	//home动态路径的业务逻辑
	homeParams : async (ctx,next)=>{
	  //接收动态路由的参数
	  const data = ctx.params;
	   //设置响应的类型
	  ctx.type = "text/html";
	  //设置响应的内容
	  ctx.body = `<h1>第一个参数是: ${data.id} 第二个参数是: ${data.name}</h1>`
	},
	//user路径的业务逻辑
	user : async (ctx,next)=>{
	   await ctx.render("common/layout",{
		   title : "首页"
	   })
	},
	//userRegister路径的业务逻辑
	userRegister : async function (ctx, next){
      let params = ctx.request.body
      let name = params.name
      let password = params.password
      let res = await HomeService.register(name,password)
      if(res.status == "-1"){
        await ctx.render("home/login", res.data)
      }else{
        ctx.state.title = "个人中心"
        await ctx.render("home/success", res.data)
      }
    },
	//404业务逻辑
	notFound : async (ctx,next)=>{
	  //设置响应的类型
	  ctx.type = "text/html";
	  //设置响应的内容
	  ctx.body = "<h1>404 Page</h1>"
	}
}