import Vue from 'vue'
import App from './App.vue'
import router from './router/router'




new Vue({
  el: '#app',
	//将路由实例添加到Vue实例
	router,
  render: h => h(App)
})
