import Bookshelf from "../views/Bookshelf"
import Category from "../views/Category"
import Rank from "../views/Rank"
import Search from "../views/Search"
import Hot from "../views/Hot"
const routes = [
	{
		path : "*",
		redirect : "/bookshelf",
		component : Bookshelf
	},
	{
		path : "/bookshelf",
		name : "bookshelf",
		component : Bookshelf
	},
	{
		path : "/category",
		name : "category",
		component : Category
	},
	{
		path : "/rank",
		name : "rank",
		component : Rank
	},
	{
		path : "/search",
		name : "search",
		component : Search
	},
	{
		path : "/hot/:id",
		name : "hot",
		component :Hot
	}
];

export default routes;