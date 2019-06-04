<template>
	<div>
		<!-- <router-link to="/list/hello">跳转到list</router-link> -->
		<!-- <button class="btn" @click="test">跳转到list组件</button> -->
		<!-- <router-link :to="{name : 'list', params : {id : 'hello123'}}">跳转到list</router-link> -->
		<!-- <button class="btn" @click="test1">跳转到list组件</button> -->
	<!-- 	<button class="btn" @click="test2">跳转到list组件</button> -->
		<router-link :to="{path : '/list', query : {id : '123456789'}}">跳转到list</router-link>
	</div>
</template>

<script>
	export default {
		methods : {
			/* test : function(){
				this.$router.push({
					path : "/list/110"
				})
			} */
			/* test1 : function(){
				this.$router.push({
					name : "list",
					params : {
						id : "hello789"
					}
				})
			} */
			/* test2 : function(){
				this.$router.push({
					path : '/list',
					query : {
						id : "123466789"
					}
				})
			} */
			
		}
	}
</script>

<style>
	.btn{
		padding:10px 20px;
		border:1px solid #ccc;
	}
</style>
