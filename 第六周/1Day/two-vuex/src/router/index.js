import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/views/Home"
import Index from "@/views/Index"
import Test from "@/views/Test"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
			path : "/index",
			name : "index",
			component : Index
		},
		{
			path : "/test",
			name : "test",
			component : Test
		}
  ]
})
