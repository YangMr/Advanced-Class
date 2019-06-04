//导入组件
import Home from "../Home.vue"
import Index from "../views/Index.vue"
import About from "../views/About.vue"
import Search from "../views/Search.vue"
//定义路由
const routes = [
	{
		path : "/",
		component : Index
	},
	{
		path : "/index",
		name : "index",
		component : Index,
	},
	{
		path : "/about",
		name : "about",
		component : About
	},
	{
		path : "/search",
		name : "search",
		component : Search
	}
];

export default routes;