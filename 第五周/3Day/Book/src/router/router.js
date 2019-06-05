import Vue from 'vue'
import VueRouter from "vue-router"

//引入创建的四个页面
import Main from "../Main.vue"
import Home from "../Home.vue"
import Categories from "../Categories.vue"
import ShoppingCart from "../ShoppingCart.vue"
import Me from "../Me.vue"
import BookDetails from "../BookDetails.vue"
//将路由接入到Vue
Vue.use(VueRouter)

//创建路由实例
export default new VueRouter({
	mode : "history",
	base : __dirname,
	routes : [
		{
			path : "/", 
			component : Main,
		},
		{
			path : "/main", 
			component : Main,
			children : [
				{name : "Home", path : "/",component : Home},
				{name : "Categories", path : "/categories",component : Categories},
				{name : "ShoppingCart", path : "/shopping-cart",component : ShoppingCart},
				{name : "Me", path : "/me",component : Me}
			]
		},
		{
			name : "BookDetails",
			path : "/bookdetails",
			component : BookDetails
		}
	]
})

		/* {name : "Home", path : "/",component : Home},
		{name : "Categories", path : "/categories",component : Categories},
		{name : "ShoppingCart", path : "/shopping-cart",component : ShoppingCart},
		{name : "Me", path : "/me",component : Me},
		{name : "BookDetails", path : "/bookdetails",component : BookDetails} */
	/* [
		{path : "/home",component : Home},
		{path : "/explorer",component :Explorer},
		{path : "/cart",component : Cart},
		{path : "/me",component : Me}
		
	] */