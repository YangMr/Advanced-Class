<template>
	<div>
		<h1>我是排行榜组件</h1>
	</div>
</template>

<script>
	import api from "../api/api"
	export default {
		created(){
			api.getRanking().then(function(response){
				console.log(response)
			})
		}
	}
</script>

<style>
</style>
