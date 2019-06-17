<template>
	<div>
		<!-- 子页面展示 -->
		<mt-tab-container v-model="selected" :value="selected">
		  <mt-tab-container-item id="书架">
			<mt-header fixed :title="selected"></mt-header>
			<Bookshelf @addBook="changeSelected" class="tab-container"></Bookshelf>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="分类">
			<mt-header fixed :title="selected"></mt-header>
			<Category class="tab-container"></Category>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="排行">
			<mt-header fixed :title="selected"></mt-header>
			<Ranking class="tab-container"></Ranking>
		  </mt-tab-container-item>
		   <mt-tab-container-item id="搜索">
		  	搜索
		  </mt-tab-container-item>
		</mt-tab-container>
		
		<!-- 底部tab -->
		<mt-tabbar v-model="selected" :fixed="true" :value="selected">
		  <mt-tab-item id="书架">
			<img slot="icon" src="../assets/image/book.svg">
			书架
		  </mt-tab-item>
		  <mt-tab-item id="分类">
			<img slot="icon" src="../assets/image/category.svg">
			分类
		  </mt-tab-item>
		  <mt-tab-item id="排行">
			<img slot="icon" src="../assets/image/rank.svg">
			排行
		  </mt-tab-item>
		  <mt-tab-item id="搜索">
			<img slot="icon" src="../assets/image/search.svg">
			搜索
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
	import Bookshelf from "./Bookshelf"
	import Category from "./Category"
	import Ranking from "./Ranking"
	export default {
		data : function(){
			return {
				selected : "书架"
			}
		},
		methods : {
			changeSelected : function(data){
				this.selected = data;
			}
		},
		components : {
			Bookshelf,
			Category,
			Ranking
		}
	}
</script>

<style scoped="scoped">
	.tab-container{
		width: 100vw;
		min-height: 100vh;
		padding:.4rem 0 .55rem 0;
		box-sizing: border-box;
		background: #fff;;
	}
</style>
