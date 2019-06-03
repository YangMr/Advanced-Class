<template>
	<div class="container">
		<div class="swiper-bg" :style="{backgroundColor : slidesColor[index]}"></div>
		<div class="state">
			<ul class="category-nav">
				<li class="cate-nav-item" v-for="(item,index) in navbars" :key="index">
					<i class="cate-nav-icon" :class="item.icon"></i>
					&nbsp;&nbsp;{{item.text}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import config from '../config/config'
	export default {
		name : "Index",
		data : function(){
			return {
				index : 0
			}
		},
		computed: {
			slidesColor() {
				return config.goods.map(item=>item.color)
			},
			navbars(){
				return config.navbars;
			}
		},
	}
</script>

<style scoped="scoped">
	.container{
		position: relative;
		background: #f5f5f5;
		border-bottom:1px solid transparent;
	}
	.container .swiper-bg{
		width: 100%;
		height: 500px;
		background-color: #e5e5e5;
		position: absolute;
		left: 0;
		top: 0;
	}
	.container .state{
		width: 1120px;
		margin: 0 auto;
		background-color: #789;
	}
	.container .category-nav{
		position: absolute;
		width: 200px;
		height: 500px;
		list-style: none;
		display: inline-block;
		background: rgba(0,0,0,0.25);
	}
	.container .cate-nav-item{
		padding-left: 12px;
		color: #fff;
		cursor: pointer;
		line-height: 35px;
	}
	.container .cate-nav-item:hover{
		color: #787878;
		background-color: rgba(255,255,255,0.8);
	}
	.container .cate-nav-icon{
		opacity: 0.5;
	}
</style>
