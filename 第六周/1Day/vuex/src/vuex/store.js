import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
import mutations from "./mutations"
import {INCREMENT,INCREMENT2,INCREMENT3} from "./mutation-type.JS"
const store = new Vuex.Store({
	state : {
		count : 0
	},
	//用于获取store里面的数据
	getters : {
		getCounter : function(state){
			return state.count;
		}
	},
	mutations,
	//{
		/* INCREMENT : function(state,num){
			state.count += num.num;
		},
		INCREMENT2 : function(state,num){
			state.count += num.num;
		},
		INCREMENT3: function(state,num){
			state.count += num.num;
		} */
	//},
	actions : {
		a : function({commit},num){
			commit("INCREMENT",num)
		}
	}
})

export default store

