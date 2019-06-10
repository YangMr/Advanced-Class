<template>
	<div>
		<h1>{{count1}}</h1>
		<ul>
			<li v-for="item in list">{{item}}</li>
		</ul>
		<br>
		<button @click="add">Add</button>
	</div>
</template>

<script>
	import {mapActions} from "vuex"
	export default {
		data : function(){
			return {
				
			}
		},
		methods : {
			...mapActions([
				"add"
			])
			/* add : function(){
				var that = this;
				setTimeout(function(){
					that.$store.dispatch("aa")
				},2000)
			} */
		},
		computed : {
			count1 : function(){
				return this.$store.state.counter
			},
			list : function(){
				return this.$store.getters.getList;
			}
		}
	}
</script>

<style>
</style>
