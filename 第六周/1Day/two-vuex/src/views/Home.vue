<template>
	<div>
		<h1>我是HOME组件</h1>
		<br>
		<h2>{{message}}</h2>
		{{getList}}
		<!-- <ul>
			<li v-for="item in list">{{item}}</li>
		</ul> -->
		<hr>
		<Index></Index>
		<hr>
		<Test></Test>
	</div>
</template>

<script>
	import	Index from "./Index"
	import Test from "./Test"
	import {mapGetters} from "vuex"
	export default {
		data : function(){
			return {
				
			}
		},
		computed : {
			...mapGetters([
				"getList"
			]),
			message : function(){
				return this.$store.state.counter
			}
			
			/* list : function(){
				return this.$store.getters.getList;
			} */
		},
		components : {
			Index,
			Test
		}
	}
</script>

<style>
</style>
