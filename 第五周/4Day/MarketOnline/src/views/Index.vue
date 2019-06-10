<template>
	<div class="container">
		<div class="swiper-bg" :style="{background:slidesColor[index]}"></div>
		<div class="stage">
			<ul class="category-nav">
				<li class="cate-nav-item" v-for="(item,index) in navBars" :key="index">
					<i class="cate-nav-icon" :class="item.icon"></i>
					&nbsp;&nbsp;{{item.text}}
				</li>
			</ul>
			<div class="swiper">
				<Swiper :slides="slidesImage" v-model="index"></Swiper>
			</div>
		</div>
		<div class="rec-banner">
			<h1 class="banner-title">精品推荐</h1>
			<ul class="rec-list">
				<li @click="togglePage(item)" class="rec-card" v-for="(item,index) in goods">
					<img class="rec-media" :src="item.cover" alt="">
					<div class="rec-profile">
						<h4>{{item.text}}</h4>
						<p class="rec-params">
						 原价: <span class="rec-price">￥{{ item.price }}</span>&nbsp;
						 促销价: <span class="rec-online-price">￥{{ item.onlinePrice }}</span>
						</p>
					</div>
				</li>
			</ul>
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
			slidesColor(){
				return Config.goods.map(function(item){
					return item.color;
				})
			},
			slidesImage(){
				return Config.goods.map(function(item){
					return item.poster;
				})
			},
			goods : function(){
				return Config.goods;
			}
		},
		components : {
			Swiper
		},
		methods : {
			togglePage : function(item){
				this.$router.push({path : "/goods",query : {name : item.name}})
			}
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
	.container .rec-banner{
		width: 1120px;
		margin: 30px auto;
		padding:30px 0 50px 0;
		background: #fff;
	}
	.container .banner-title{
		padding:8px 15px;
	}
	.container .rec-list{
		list-style:none;
	}
	.container .rec-card{
		display: inline-block;
	}
	  .rec-card {
    display: inline-block;
    width: 25%;
    text-align: center;
    vertical-align: top;
    cursor: pointer;
  }
  .rec-media {
    width: 240px;
  }
  .rec-profile {
    width: 200px;
    display: inline-block;
    color: #444;
  }
  .rec-price {
    text-decoration: line-through;
  }
  .rec-online-price {
    color: #ff0036;
    font-size: 16px;
  }
  .rec-params {
    font-size: 12px;
    color: #888;
  }
</style>
