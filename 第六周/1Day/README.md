# VUEX
## 安装
	cnpm install vuex --save
## 使用
	一.创建一个store.js文件
	
	import Vue from "vue"
	import Vuex from "vuex"
	
	//将Vuex接入到Vue
	Vue.use(Vuex)
	
	//配置store
	const store = new Vuex.Store({
		//状态
		state : {
			
		},
		//获取
		getters : {
			
		},
		//改变
		Mutation : {
			
		},
		//提交
		action : {
			
		}
	})
	
	export default store
	
	二.在main.js文件引入store.js文件
	
	import store form "./vuex/store"
	
	new Vue({
		store
	})

## getters的使用

	//获取getters数据的方式1
	this.$store.getters.方法名|属性名
	
	//获取getters数据的方式2
	import {mapGetters} from "vuex"
	
	computed : {
		...mapGetters([
			方法名|属性名
		])
	}
	
	computed : {
		...mapGetters({
			自定义名称 :方法名｜属性名
		})
	}

## mutations的使用

	//作用:用户同步的去改变数据
	mutations : {
		"事件名" :　function(state,接收参数){
			
		}
	}
	
	//调用方式一
	this.$store.commit("事件名",传递的参数)
	
	//调用方式二
	import {mapMutations} from "vue"
	
	methods : {
		...mapMutations([
			"事件名"
		])
	}
	
	methods : {
		...mapMutations({
			事件 : 事件名
		})
	}