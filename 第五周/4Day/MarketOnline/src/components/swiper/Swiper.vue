<template>
	<div class="swiper-container">
		<!-- 轮播背景 -->
		<div class="swiper-image" :style="{background : 'url(../../.'+ bg[index] + ')'}"></div>
		<!-- 轮播按钮 -->
		<div class="swiper-paginator">
			<span v-for="(item,index) in bg" @mouseover="toggleIndex(index)"  class="paginator-item"></span>
		</div>
	</div>
</template>

<script>
	export default {
		props : {
			slides : {
				type: Array,
				validator (value) { // 判断数组元素类型是否为字符串
				  return value.every(item => Object.prototype.toString.call(item) === '[object String]')
				}
			}
		},
		data : function(){
			return {
				index : 0
			}
		},
		methods : {
			toggleIndex : function(index){
				this.$emit("input",index)
			}
		},
		computed: {
			bg() {
				return this.slides;
			}
		},
	}
</script>

<style scoped="scoped">
.swiper-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .swiper-image {
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .swiper-paginator {
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
