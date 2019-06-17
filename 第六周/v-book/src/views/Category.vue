<template>
	<div>
		<section v-for="(item,key,index) in category">
			<p class="category-type">{{categoryType[key]}}</p>
			
			<ul>
				<li v-for="(item,index) in item">
					<p class="category">{{item.name}}</p>
					<span class="book-count">{{item.bookCount}}</span>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	import api from "../api/api"
	import { Indicator } from 'mint-ui';
	export default {
		data : function(){
			return {
				category : "",
				categoryType : {
					female : "女生",
					male : "男生",
					picture : "其他",
					press : "出版"
				}
			}
		},
		created(){
			var that = this;
			Indicator.open();
			api.getCategory().then(function(response){
				that.category = response.data;
				Indicator.close();
			})
		}
	}
</script>

<style scoped="scoped">
	ul{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-left: .15rem;
		margin-right: .15rem;
	}
	ul li{
		width: 33.3%;
		text-align: center;
	}
	.category {
		font-weight: bold;
		font-size: .16rem;
		margin-bottom: .1rem;
		margin-top: .18rem;
		line-height: .18rem;
	}
	.category-type {
		line-height: .4rem;
		margin-top: 0;
		margin-bottom: 0;
		margin-left: .1rem;
		margin-right: .1rem;
		border-bottom: 1px solid #f3eded;
	}
	.book-count {
		color: #959595;
	}
	section:last-child > p{
		border-bottom: none;
	}
</style>
