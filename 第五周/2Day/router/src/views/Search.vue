<template>
	<div>
		<button class="btn" @click="$router.push({name : 'about'})">跳转到首页</button>
	</div>
</template>

<script>
	export default {
		methods : {
			test : function(){
				// this.$router.push({name : "index"})
			}
		}
	}
</script>

<style scoped="scoped">
	
	.btn{
		width:120px;
		height: 30px;
		border: 1px solid #ccc;
		background: purple;
		color: #fff;
	}
</style>
