<template>
	<div class="tab-nav">
		<ul class="clearfix">
			<router-link tag="li" to="/bookshelf"><a>书架</a></router-link>
			<router-link tag="li" to="/category"><a>分类</a></router-link>
			<router-link tag="li" to="/rank"><a>排行</a></router-link>
			<router-link tag="li" to="/search"><a>搜索</a></router-link>
		</ul>
	</div>
</template>

<script>
	
</script>

<style>
	.tab-nav{
		width:100%;
		background : purple;
		position:fixed;
		bottom:0;
	}
	.tab-nav li{
		width:25%;
		height : .35rem;
		line-height: .35rem;
		text-align:center;
		float: left;
	}
	.tab-nav li a{
		color:#fff;
		text-decoration:none;
		display:block;
	}
</style>
