import Vue from "vue"
const baseUrl = "http://62.234.157.199:8888";
export default {
	//获取所有分类
	getCategory : function(){
		return Vue.http.get(baseUrl +"/cats/lv2/statistics");
	},
	//获取排行榜类型
	getRanking : function(){
		return Vue.http.get(baseUrl +"/ranking/gender");
	}
}