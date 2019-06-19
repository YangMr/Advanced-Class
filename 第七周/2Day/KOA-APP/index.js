//客户端id
const clientID = 'f8a516b885193d67b95f'
//客户端密钥
const clientSecret = '57100b94ca5d6bb559586e4934919e2ef726be70'

//引入koa
const Koa = require('koa');
//引入path
const path = require('path');
//引入koa静态资源模块
const serve = require('koa-static');
//引入koa路由模块
const route = require('koa-route');
//引入axios模块
const axios = require('axios');

//实例化KOA
const app = new Koa();
//设置静态资源目录
const main = serve(path.join(__dirname));

//创建oauth方法
const oauth = async ctx => {
  //获取到授权码   3.用户同意，GitHub 就会重定向回 A 网站，同时发回一个授权码。
  const requestToken = ctx.request.query.code;
  //打印授权码
  console.log('authorization code:', requestToken);
	//使用axios向github网站发送请求,分别发送了客户端id,客户端密钥,授权码   4.A 网站使用授权码，向 GitHub 请求令牌。
  const tokenResponse = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token?' +
      `client_id=${clientID}&` +
      `client_secret=${clientSecret}&` +
      `code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  });
	//接收到返回的令牌,也就是token  5.GitHub 返回令牌.
  const accessToken = tokenResponse.data.access_token;
  //打印token
  console.log(`access token: ${accessToken}`);
	// 6.A 网站使用令牌，向 GitHub 请求用户数据。
  const result = await axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      accept: 'application/json',
      Authorization: `token ${accessToken}`
    }
  });
  console.log(result.data);
  //接收返回的用户信息
  const name = result.data.name;
  ctx.response.redirect(`/welcome.html?name=${name}`);
};

//静态资源目录接入到koa
app.use(main);

//设置路由,第一个参数是地址,第二个参数回调函数 用户同意，GitHub 就会重定向回 A 网站，同时发回一个授权码。
app.use(route.get('/oauth/redirect', oauth));

//设置监听的端口号
app.listen(8080);