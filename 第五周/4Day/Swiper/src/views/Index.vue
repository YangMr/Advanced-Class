<template>
	<div class="container">
		<div class="swiper-bg"></div>
		<div class="stage">
			<div class="swiper">
				<Swiper></Swiper>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from "../components/Swiper"
	export default {
		
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
	.container .swiper{
		height: 500px;
		background: #e8e8e8;
	}
</style>
