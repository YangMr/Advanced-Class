<template>
	<div class="container">
		<div class="swiper-bg" :style="{background:slidesColor[index]}"></div>
		<div class="stage">
			<div class="swiper">
				<Swiper :slides="slidesImage" v-model="index" :interval="time"></Swiper>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from "../components/Swiper"
	import config from "../config/config"
	export default {
		name : "Index",
		data : function(){
			return {
				index : 0,
				time : 1
			}
		},
		computed: {
			slidesImage : function(){
				return config.goods.map(function(item){
					return item.poster;
				})
			},
			slidesColor : function(){
				return config.goods.map(function(item){
					return item.color
				})
			}
		},
		components : {
			Swiper
		}
	}
</script>

<style scoped="scoped">
	.container{
		position: relative;
		background-color: #f5f5f5;
		border-bottom: 1px solid transparent;
		margin-top: 80px;
	}
	.container .swiper-bg{
		width: 100%;
		height: 500px;
		position: absolute;
		left: 0;
		top: 0;
		background: #e5e5e5;;
	}
	.container .stage{
		width: 1120px;
		margin: 0 auto;
		background: #789;
	}
	.container .swiper{
		height: 500px;
		background: #e8e8e8;;
	}
</style>
