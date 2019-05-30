import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import Main from './Main.vue'
import Component from './Component'
new Vue({
  el: '#app',
  render: h => h(App2)
})
