<template>
	<div>
		<h1>我是分类组件</h1>
	</div>
</template>

<script>
	import api from "../api/api"
	export default {
		created(){
			api.getCategory().then(function(response){
				console.log(response)
			})
		}
	}
</script>

<style>
</style>
