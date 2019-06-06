// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局导入公共样式
import "./assets/css/base.css"
//全局导入字体库
import "font-awesome/css/font-awesome.min.css"

//全局导入axios
import Axios from "axios"
//将axios接入到vue
Vue.prototype.$axios = Axios


Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
