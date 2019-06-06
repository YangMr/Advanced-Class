<template>
  <div id="app">
		<!-- 顶部背景 -->
		<div class="gs-menu-bg"></div>
		<!-- 头部 -->
		<div class="gs-header">
			<div class="gs-quick-menu">
				<!-- 头部左 -->
				<div class="gs-profile">
					<span>您好,游客</span>&nbsp;&nbsp;&nbsp;&nbsp;
					<span>消息 <strong>0</strong></span>
				</div>
				<!-- 头部右 -->
				<ul class="gs-nav">
					<li class="gs-nav-item">
						<router-link class="gs-link" to="/order">我的订单</router-link>
					</li>
					<li class="gs-nav-item">
						<router-link class="gs-link" to="/cart">
							<i class="fa fa-shopping-cart"></i>
							购物车
						</router-link>
					</li>
					<li class="gs-nav-item">
						<span class="gs-link gs-forbid">收藏夹</span>
					</li>
					<li class="gs-nav-item">
						<span class="gs-link gs-forbid">商家入口</span>
					</li>
				</ul>
			</div>
			<!-- 搜索 -->
			<div class="gs-logo" @click="backIndex"></div>
			<div class="gs-search-box">
				<input type="text" class="gs-search-input" placeholder="请输入商品/店铺"><!--
				--><span class="gs-search-btn">搜&nbsp;&nbsp;索</span>
			</div>
		</div>
		<!-- 底部边框 -->
		<div class="gs-dividor"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
	methods : {
		backIndex : function(){
			this.$router.push("/");
		}
	}
}
</script>

<style>
.gs-menu-bg{
	width: 100%;
	height: 30px;
	position: absolute;
	top: 0;
	background: #f2f2f2;
	border-bottom:1px solid #e5e5e5;
}
.gs-header{
	width: 1120px;
	margin: 0 auto;
}
.gs-header .gs-quick-menu{
	font-size: 12px;
	position: relative;
	color: #666;
}
.gs-header .gs-profile{
	line-height: 30px;
	display: inline-block;
	cursor: pointer;
}
.gs-header .gs-nav{
	display:inline-block;
	list-style: none;
	position: absolute;
	right: 0;
	line-height: 30px;
}
.gs-header .gs-nav .gs-nav-item{
	display: inline-block;
	margin-left:12px;
}
.gs-header .gs-nav .gs-link{
	text-decoration: none;
	color:#999;
	outline : none;
}
.gs-header .gs-nav .gs-forbid{
	cursor: not-allowed;
}
.gs-header .gs-logo{
	width: 188px;
	height: 75px;
	background: url("./assets/images/logo.png") no-repeat;
	background-size: cover;
	margin: 10px 0;
	cursor: pointer;
	display: inline-block;
}
.gs-header .gs-search-box{
	display: inline-block;
	float: right;
	line-height: 100px;
}
.gs-header .gs-search-input{
	width: 240px;
	height:32px;
	padding-left:6px;
	border:2px solid #95bf47;
	outline: none;
	box-sizing: content-box;
	vertical-align: middle;
}
.gs-header .gs-search-btn{
		display: inline-block;
		color: #fff;
		background: #95bf47;
		padding: 0 16px;
		line-height: 36px;
		vertical-align: middle;
		font-weight: 600;
		cursor: pointer;
		-ms-user-select: element;
		-webkit-user-select: none;
		-moz-user-select: none;
}
.gs-dividor{
	height: 2px;
  background-color: #95bf47;
}
</style>
