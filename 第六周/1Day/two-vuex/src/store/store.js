import Vue from "vue"
import Vuex from "vuex"
import MoudleA from "./MoudleA.js"
Vue.use(Vuex)
import {
	SOME_INCREMENT,
	SOME_DECREMENT
} from "./mutation-types"
const store = new Vuex.Store({
	state : {
		counter : 1,
		list : [1,10,21,3,78,17,4,2,33]
	},
	getters : {
		getList : function(state){
			return state.list.filter(function(item){
				return item < 10;
			})
		}
	},
	mutations : {
		[SOME_INCREMENT]: function(state){
			state.counter++;
		},
		[SOME_DECREMENT] : function(state){
			state.counter--;
		}
	},
	actions : {
		add : function({commit}){
			commit("increment")
		}
	},
	modules : {
		a : MoudleA
	}
});

export default store