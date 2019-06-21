import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from "../Index.vue"
import Login from "../Login.vue"
import Repository from "../Repository.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
		{
			path : "/login",
			name : "login",
			component : Login
		},
		{
			path : "/repository",
			name : "repository",
			meta : {
				requireAuth : true,// 添加该字段，表示进入这个路由是需要登录的
			},
			component : Repository
		}
  ]
})
