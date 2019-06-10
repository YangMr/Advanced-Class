<template>
	<div class="swiper-container">
		<div class="swiper-image" :style="{backgroundImage: 'url(' + bg + ')'}"></div>
		<div class="swiper-paginator">
			<span  @mouseout="initTimer" @mouseover="toggleIndex(index)" v-for="(item,index) in slides" :class="{'paginator-current':index === value }" :key="index" class="paginator-item"></span>
		</div>
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
				type :Number,
				default : 4
			}
		},
		computed: {
			bg() {
				return this.slides[this.value]
			}
		},
		methods: {
			toggleIndex(index) {
				this.$emit("input",index);
				clearInterval(this.timer)
			},
			initTimer : function(){
				var that = this;
				this.timer = setInterval(function(){
					that.$emit("input",(that.value + 1) % that.slides.length);
				},that.interval * 1000)
			}
		},
		mounted(){
			 this.$nextTick(function () {
				this.initTimer()
			})
		}
	}
</script>

<style scoped="scoped">
	.swiper-container{
		position: relative;
		width: 100%;
		height: 100%;
	}
	.swiper-container .swiper-image{
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.swiper-container .swiper-paginator{
		margin-top: -30px;
		padding-right: 5px;
		text-align: right;
		list-style: none;
	}
	.paginator-item {
		cursor: pointer;
		display: inline-block;
		width: 16px;
		height: 16px;
		margin-left: 5px;
		border-radius: 50%;
		background-color: #000;
		opacity: 0.3;
    }
    .paginator-current {
		background-color: #fff; /* 当前激活的幻灯片切换按钮样式 */
		opacity: .6;
    }
</style>
