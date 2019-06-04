<template>
	<div>
		<h1>我是list组件</h1>
		<hr>
		<b>{{data}}</b>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				data : ""
			}
		},
		created(){
			this.data = this.$route.query.id
		}
	}
</script>

<style>
</style>
