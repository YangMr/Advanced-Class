//导入组件
import Home from "../Home.vue"
import Task from "../task.vue"
import Index from "../views/Index.vue"
import About from "../views/About.vue"
import Search from "../views/Search.vue"
import Rank from "../views/Rank.vue"
import Detail from "../components/detail/Detail.vue" 
import Books from "../components/books/Books.vue"
import List from "../components/list/List.vue"

//定义路由
const routes = [
	{
		path : "*",
		redirect : "/task",
		component : Task
	},
	{
		path : "/task",
		name : "task",
		component : Task,
	},
	{
		path : "/list/",
		name : "list",
		component : List,
	},
	{
		path : "/index",
		name : "index",
		component : Index,
		children : [
			{
				path : "books",
				name : "books",
				component : Books
			}
		]
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
	},
	{
		path : "/rank",
		name : "rank",
		component : Rank,
		children : [
			{
				path : "detail",
				component : Detail
			}
		]
	}
];

export default routes;