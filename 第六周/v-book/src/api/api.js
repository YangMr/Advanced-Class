import Vue from "vue"
const baseUrl = "http://127.0.0.1:8010";
export default {
	//获取所有分类
	getCategory : function(){
		return Vue.http.get(baseUrl +"/cats/lv2/statistics");
	}
}