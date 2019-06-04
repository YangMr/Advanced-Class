import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./router/index.js"

import Axios from "axios";
Vue.prototype.$axios = Axios;

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
	router,
  render: h => h(App)
})
