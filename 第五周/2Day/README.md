# vue-router 路由
## 一.路由的基本使用
### 1.安装
	cnpm install vue-router --save
### 2.使用
	import vueRouter from "vue-router"
	Vue.use(vueRouter)
	
	
	
### 路由跳转:

	<router-link to="/index"></router-link>
	<router-link :to="{path : '/index'}"></router-link>
	<router-link :to="{name : '/index'}"></router-link>

### 路由传参:
	
	<router-link to="/index/hello"></router-link>
	
	<router-link :to="{name : '/index', params : { id : 'hello' }}"></router-link>

	<router-link :to="{path: '/index', query : { id : 'hello' }}"></router-link>
	
	this.$route.push("/index/hello")
	
	this.$route.push({name : "index", params : {id : 'hello'}})
	
	this.$route.push({path : '/list', query : {id : 'hello'}})