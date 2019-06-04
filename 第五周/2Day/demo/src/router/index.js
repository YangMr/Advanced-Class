import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册路由
Vue.use(VueRouter)

//导入组件
import Index from '../views/Index'
import About from '../views/About'

//定义路由
const routes = [
	{
		path : "/index",
		name : "index",
		component : Index
	},
	{
		path : "/about",
		name : "about",
		component : About
	}
];

//创建路由实例
const router = new VueRouter({
	routes : routes,
	mode :"history"
});

//导出路由实例
export default {
	router
};
