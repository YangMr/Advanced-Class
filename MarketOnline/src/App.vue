<template>
  <div id="app" v-cloak>
		<!-- 背景 -->
		<div class="gs-menu-bg"></div>
		<!-- 头部 -->
		<div class="gs-header">
			<!-- 顶部 -->
			<div class="gs-quick-menu">
				<div class="gs-profile">
					<span>您好,游客</span>&nbsp;&nbsp;&nbsp;&nbsp;
					<span>消息 <strong>0</strong></span>
				</div>
				<ul class="gs-nav">
					<li class="gs-nav-item">
						<router-link class="gs-link" to="/order">我的订单</router-link>
					</li>
					<li class="gs-nav-item">
						<router-link class="gs-link" to="/cart">
							<i class="fa fa-shopping-cart"></i>&nbsp;购物车
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
			<div>
				<div class="gs-logo" @click="toHomePage"></div>
				<div class="gs-search-box">
					<input type="text" class="gs-search-input" placeholder="请输入商品/店铺"><!--
          --><span class="gs-search-btn">搜&nbsp;&nbsp;索</span>
				</div>
			</div>
		</div>
		<div class="dividor"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
	methods : {
		//点击跳转到首页
		toHomePage(){
			this.$router.push("/");
		}
	}
}
</script>

<style>
[v-cloak]{
	display: none;
}
.gs-menu-bg{
	width: 100%;
	height: 30px;
	position: absolute;
	background-color: #f2f2f2;
	border-bottom:1px solid #e5e5e5;
}
.gs-header{
	width: 1120px;
	margin: 0 auto;
}
.gs-header .gs-quick-menu{
	position: relative;
	font-size: 12px;
	color:#999;
	background-color: #f2f2f2;
}
.gs-header .gs-profile{
	line-height: 30px;
	display: inline-block;
	cursor: pointer; 
}
.gs-header .gs-nav{
	position: absolute;
	right: 0;
	display: inline-block;
	line-height: 30px;
	list-style-type: none;
}
.gs-header .gs-nav-item{
	display: inline-block;
	margin-left: 12px;
}
.gs-header .gs-link{
	color: #999;
	text-decoration: none;
	outline: none;
}
.gs-header .gs-forbid{
	cursor: not-allowed;
}
.gs-header .gs-logo{
	width: 188px;
	height: 75px;
	background: url(./assets/images/logo.png) no-repeat;
	background-size: cover;
	cursor: pointer;
	margin: 10px 0;
	display: inline-block;
}
.gs-header .gs-search-box{
	display: inline-block;
	float: right;
	line-height: 100px;
}
.gs-header .gs-search-input{
	width: 240px;
	box-sizing: border-box;
	line-height: 32px;
	padding-left: 6px;
	outline: none;
	vertical-align: middle;
	border:2px solid #95bf47;
}
.gs-header .gs-search-btn{
	display: inline-block;
	color: #fff;
	background: #95bf47;
	/* padding-left:16px;
	padding-right: 16px; */
	padding: 0 16px;
	line-height: 36px;
	vertical-align: middle;
	font-weight: 600;
	cursor: pointer;
	-ms-user-select: element;
	-webkit-user-select: none;
	-moz-user-select: none;
}
.dividor{
	height: 2px;
	background: #95bf47;
}
</style>
