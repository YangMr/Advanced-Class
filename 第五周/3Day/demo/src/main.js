import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"

/* router.beforeEach(function(to,from,next){
	
	console.log("路由跳转之前")
	
})

router.beforeResolve(function(to,from,next){
	console.log("路由正在解析时调用");
	next()
})

router.afterEach(function(to,from,next){
	console.log("路由跳转完成之后调用");
	
})
 */
new Vue({
  el: '#app',
	router,
  render: h => h(App)
})
