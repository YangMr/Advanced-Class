import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Index"
import Cart from "@/views/Cart"
import Order from "@/views/Order"
import Goods from "@/views/Goods"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
		{
			path : "/index",
			name : "index",
			component : Index
		},
		{
			path : "/cart",
			name : "cart",
			component : Cart
		},
		{
			path : "/order",
			name : "order",
			component : Order
		},
		{
			path : "/goods",
			name : "goods",
			component : Goods,
		}	
  ]
})
