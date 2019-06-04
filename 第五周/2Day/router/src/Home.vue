<template>
	<div class="nav">
		<ul>
			<li><router-link :to="{name : 'index'}">书架</router-link></li>
			<li><router-link :to="{name : 'about'}">分类</router-link></li>
			<li><router-link :to="{name : 'index'}">排行</router-link></li>
			<li><router-link :to="{name : 'search'}">搜索</router-link></li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.nav{
		position: fixed;
		bottom:0;
		left:0;
		width: 100%;
	}
	ul{
		margin: 0;
		padding: 0;
		list-style: none; 
		
	}
	ul li{
		width: 25%;
		background: #333;
		
		height: 40px;
		text-align: center;
		line-height: 40px;
		float: left;
	}
	ul li a{
		text-decoration: none;
		color: #fff;
		display: block;
	}
</style>
