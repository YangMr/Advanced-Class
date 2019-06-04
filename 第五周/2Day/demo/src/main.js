import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

/* //引入路由
import VueRouter from 'vue-router'
//注册路由
Vue.use(VueRouter)

import Index from './views/Index.vue'
import About from './views/About.vue'

//配置路由
const routes = [
	{
		path : "/index",
		component : Index
	},
	{
		path : "/about",
		component : About
	}
]

const router = new VueRouter({
	// routes :  routes
		 routes
})
 */
new Vue({
  el: '#app',
	router :router.router,
  render: h => h(App)
})
