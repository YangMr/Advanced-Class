<template>
	<div>
		<h1>{{message}}</h1>
		
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				message : ""
			}
		},
		created(){
			this.message = this.$store.getters.getCounter;
		}
	}
</script>

<style>
</style>
