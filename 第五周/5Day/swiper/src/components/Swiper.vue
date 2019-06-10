<template>
	<div class="swiper-container">
		<div class="swiper-image" :style="{background : 'url(../.'+ bg +')'}"></div>
		<div class="swiper-paginator">
			<span @mouseout="initTimer" @mouseover="toggleIndex(index)" :class="{'paginator-current': index===value}" class="pagination-item" v-for="(item,index) in slides"></span>
		</div>
		{{value}}
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				timer : null
			}
		},
		props : {
			slides : {
				type : Array
			},
			value : {
				type : Number,
				default : 0
			},
			interval : {
				type : Number,
				default : 4
			}
		},
		methods : {
			toggleIndex : function(index){
				this.$emit("input",index);
				clearInterval(this.timer);
			},
			initTimer : function(){
				var that = this;
				this.timer = setInterval(function(){
					that.$emit("input",(that.value + 1) % that.slides.length)
				},that.interval * 1000);
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.initTimer()
			})
		},
		computed: {
			bg : function(){
				return this.slides[this.value]
			}
		},
	}
</script>

<style scoped="scoped">
	.swiper-container{
		position: relative;
		width: 100%;
		height: 100%;
	}
	.swiper-container .swiper-image{
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat:no-repeat ;
	}
	.swiper-container .swiper-paginator{
		text-align: right;
		margin-top: -30px;
		padding-right: 5px;
	}
	.swiper-container .pagination-item{
		width: 16px;
		height: 16px;
		background: #000;
		opacity: 0.3;
		display: inline-block;
		border-radius: 50%;
		cursor: pointer;
		margin-left: 5px;
	}
	.swiper-container .paginator-current{
		background: #fff;
		opacity: 0.6;
	}
</style>
