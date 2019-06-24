//引入mysql模块
const mysql = require("mysql");

//创建数据库,配置信息
const connection = mysql.createConnection({
	host : "127.0.0.1", //数据库地址
	port : 3306,  //设置端口号
	user : "root", //设置数据库用户名
	password : "asdqwe123", //设置数据库密码
	database : "user" ,//设置选中的数据库
});

//连接数据库
connection.connect();

connection.query("select * from users",(error,result,fields)=>{
	if(error) throw error;
	console.log(result);
	console.log(fields)
	
})


//关闭数据库
connection.end()


