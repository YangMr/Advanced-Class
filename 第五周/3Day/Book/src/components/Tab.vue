<template>
	<div>
		<div class="tabs">
			<ul>
				<router-link tag="li" :to="{name : 'Home'}">
					<div><img src="../assets/images/home.svg" alt=""></div>
					<div>首页</div>
				</router-link>
				<router-link tag="li" :to="{name : 'Categories'}">
					<div><img src="../assets/images/category.svg" alt=""></div>
					<div>分类</div>
				</router-link>
				<router-link tag="li" :to="{name : 'ShoppingCart'}">
					<div><img src="../assets/images/cart.svg" alt=""></div>
					<div>购物车</div>
				</router-link>
				<router-link tag="li" :to="{name : 'Me'}">
					<div><img src="../assets/images/me.svg" alt=""></div>
					<div>我</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
.tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px #000;
  width: 100%;
}
.tabs > ul, .tabs > ul > li {
    margin: 0;
    padding: 0;
 }

 .tabs ul {
    display: table;
    width: 100%;
}
.tabs > ul > li {
    text-align: center;
    font-size: 10px;
    display: table-cell;
    padding: 8px 12px;
}
.tabs > ul > li.active {
    color: #D0021B;
}
</style>
