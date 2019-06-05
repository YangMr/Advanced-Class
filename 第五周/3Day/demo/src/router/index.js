import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Home from "../views/Home.vue"
import List from "../views/List.vue"
import Login from "../views/Login.vue"

export default new VueRouter({
	routes : [
		{
			path : "/",
			component : Home
			/* beforeEnter : function(to,from,next){
				console.log("进入路由时");
				next({path : "/list"});
			} */
		},
		{
			path : "/home",
			name : "home",
			component : Home
		},
		{
			path : "/list",
			name : "list",
			component : List
		},
		{
			path : "/login",
			name : "login",
			component : Login
		}
	]
	// scrollBehavior(to,from,savedPosition){
	// 	console.log(savedPosition)
	// 	if(savedPosition){
	// 		return {x : 0, y: 0}
	// 	}else{
	// 		return savedPosition;
	// 	}
	// }
})