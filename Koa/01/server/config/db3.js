//引入mysql模块
const mysql = require("mysql");

//创建数据库连接池
const pool = mysql.createPool({
	host : "localhost",
	user : "root",
	password : "asdqwe123",
	database : "user"
});


//封装mysql
const query = function(sql,values=null){
	//创建promise
	return new Promise((resolve,reject)=>{
		//创建数据库会话连接池
		pool.getConnection((error,connection)=>{
			//如果数据库会话连接池发生错误,则用reject将错误返回出去,如果没有错误,执行sql语句操作
			if(error){
				reject(error)
			}else{
				//执行sql语句操作
				connection.query(sql,values,(error,results)=>{
					if(error){
						reject(error)
					}else{
						resolve(results);
					}
				//结束会话
				connection.release();	
				})
			}
		})
	})
};

module.exports = {query}