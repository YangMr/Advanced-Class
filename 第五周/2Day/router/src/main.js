import Vue from 'vue'
import App from './App.vue'
//引入路由
import VueRouter from "vue-router"
import routes from "./router/index.js"
// 注册路由
Vue.use(VueRouter);
//创建路由实例
const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
	router,
  render: h => h(App)
})
