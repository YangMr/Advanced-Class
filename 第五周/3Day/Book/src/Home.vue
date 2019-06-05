<template>
	<div>
		<h1>我是首页组件</h1>
		<hr>
		<div @click="goBook" class="center">
			跳转到图数详情组件
		</div>
	</div>
</template>

<script>
	export default {
		methods : {
			goBook : function(){
				this.$router.push("/BookDetails")
			}
		}
	}
</script>

<style>
	.center{
		font-size:25px;
		text-align:center;
		line-height: 50px;
		cursor: pointer;
	}
</style>
