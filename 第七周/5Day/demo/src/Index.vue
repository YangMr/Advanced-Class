<template>
	<div>
		<h1>我是首页</h1>
		<button @click="change">进入仓库</button>
	</div>
</template>

<script>

	export default {
		methods : {
			change : function(){
				this.$router.push({name : "repository"});
			}
		}
	}
</script>

<style>
</style>
