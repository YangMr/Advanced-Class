<template>
	<div class="container">
		<div class="swiper-bg" :style="{background: slidesColor[index] }"></div>
		<div class="stage">
			<div class="swiper">
				<Swiper :slides="slidesImage" v-model="index"></Swiper>
			</div>
		</div>
	</div>
</template>

<script>
	import config from "../config/config"
	import Swiper from "../components/Swiper"
	export default {
		data : function(){
			return {
				index : 0
			}
		},
		computed: {
			slidesImage() {
				return config.goods.map(function(item){
					return item.poster;
				}) 
			},
			slidesColor(){
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

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.container{
		position:relative;
		background-color: #f5f5f5;
		border-bottom:1px solid transparent;
		margin: 100px 0;
	}
	.container .swiper-bg{
		height:500px;
		width: 100%;
		background-color: #e5e5e5;
		position: absolute;
		left: 0;
		top: 0;
	}
	.container .stage{
		width: 1120px;
		margin: 0 auto;
		background: #789;
	}
	.container .swiper{
		height: 500px;
		background: #e8e8e8;
	}
</style>
