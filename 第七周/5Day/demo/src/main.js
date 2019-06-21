// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/store"
Vue.config.productionTip = false
//路由拦截
router.beforeEach((to,from,next)=>{
	if(to.meta.requireAuth){
		if(store.state.token){
		
			next();
		}else{
			next({
				path : "/login",
				query :  {redirect: to.fullPath}
			})
		}
	}else{
		console.log("22")
		next()
	}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
