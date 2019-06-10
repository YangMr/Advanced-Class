<template>
	<div class="container clearfix">
		<div class="left">1</div>
		<div class="right">2</div>
		{{actorC}}
	</div>
</template>

<script>
	import Config from "../config/config"
	export default {
		computed : {
			item : function(){
				var that = this;
				return Config.goods.find(function(item){
					return item.name == that.$route.query.name
				})
			},
			actorC : function(){
				return this.item.images;
			}
		}
	}
</script>

<style scoped="scoped">
	.container{
		width: 1120px;
		height: 500px;
		margin: 0 auto;
	}
	.container .left{
		float:left;
		width: 50%;
	}
	.container .right{
		float: right;
		width: 50%;
	}
</style>
