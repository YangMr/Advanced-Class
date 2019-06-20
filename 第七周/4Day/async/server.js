const Koa = require("koa");
const path = require("path");
const serve = require("koa-static");
const bodyParser = require("koa-bodyparser");
const router = require("koa-router")();
const app = new Koa();


const main = serve(path.join(__dirname + "/public"));
app.use(main);
app.use(bodyParser());
app.use(router.routes());

router.get("/phoneLocation",async (ctx,next)=>{
	await next()
	ctx.response.body = "hello"
	
	/* setTimeout(()=>{
		ctx.response.body = "hello"
		//ctx.response.body = "{suceess : true, obj : {province : '北京', city : '北京'}}"
	},1000) */
})

/* app.use("/phoneLocation",async (ctx,next)=>{
	
	setTimeout(()=>{
		ctx.response.body = "{suceess : true, obj : {province : '北京', city : '北京'}}"
	},1000)
	await next()
}) */




app.listen(3000);

