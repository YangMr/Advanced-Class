<template>
	<div class="container">
		<div class="swiper-bg"></div>
		<div class="stage">
			<ul class="category-nav">
				<li class="cate-nav-item" v-for="(item,index) in navBars.navbars" :key="index">
					<i class="cate-nav-icon" :class="item.icon"></i>
					&nbsp;&nbsp;{{item.text}}
				</li>
			</ul>
			<div class="swiper">
				<Swiper :slides="slides" v-model="index"></Swiper>
			</div>
			{{index}}
		</div>
	</div>
</template>

<script>
	import Swiper from "../components/swiper/Swiper"
	import Config from "../config/config.js"
	export default {
		data : function(){
			return {
				index : 0
			}
		},
		computed: {
			navBars() {
				return Config.navbars;
			},
			slides(){
				return Config.goods.map(function(item){
					return item.poster;
				})
			}
		},
		components : {
			Swiper
		},
		created(){
			// var _this = this;
			// this.$axios.get("http://localhost:8888/").then(function(response){
			// 	_this.data = response.data;
			// 	console.log(typeof response.data.goods.__ob__.value)
			// }).catch(function(error){
			// 	console.log(error)
			// })
		}
	}
</script>

<style scoped>
	.container{
		position:relative;
		background: #f5f5f5;
		border-bottom: 1px solid transparent;
	}
	.container .swiper-bg{
		width: 100%;
		height: 500px;
		position: absolute;
		left: 0;
		top: 0;
		background: #e5e5e5;
	}
	.container .stage{
		width: 1120px;
		margin: 0 auto;
		background: #789;
	}
	.container .category-nav{
		width: 200px;
		height: 500px;
		background: rgba(0,0,0,0.3);
		position: absolute;
		z-index: 2;
	}
	.container .cate-nav-item{
		color: #fff;
		list-style-type: none;
		padding-left:12px;
		line-height: 35px;
		cursor: pointer;
	}
	.container .cate-nav-item:hover{
		color: #787878;
		background-color: rgba(255, 255, 255, .8);
	}
	.container .cate-nav-icon{
		opacity: 0.5;
	}
	.container .swiper{
		height: 500px;
		background: #e8e8e8;
	}
</style>
