<template>
	<div>
		<div class="back">
			<span @click="backTo">&lt; 返回</span>
		</div>
		
		<h1>我是分类组件</h1>
		
		
		
	</div>
</template>

<script>
	export default {
		methods : {
			backTo : function(){
				this.$router.go(-1)
			}
			
		}
	}
</script>

<style scoped="scoped">
	.back{
		width: 100%;
		background: purple;
		color:#fff;
		height:30px;
		line-height: 30px;
	}
</style>
