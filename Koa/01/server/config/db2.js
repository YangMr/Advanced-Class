//引入mysql模块
const mysql = require("mysql");

//创建数据库连接池
const pool = mysql.createPool({
	host : "localhost",
	user : "root",
	password : "asdqwe123",
	database : "user"
});

//在数据池中进行会话操作
pool.getConnection((error,connection)=>{
	//如果有错误,则抛出错误
	if(error) throw error;
	
	//可以进行增删该查
	connection.query("select * from users",(error,results,fields)=>{
		console.log(results);
	})
	
	//结束会话
	connection.release()
})

