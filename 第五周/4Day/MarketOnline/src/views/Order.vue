<template>
	<div class="container-order">
		<table v-if="order.length">
			<tr>
				<th>商品</th>
				<th>单价</th>
				<th>数量</th>
				<th>金额</th>
				<th>操作</th>
			</tr>
			<tr v-for="(item,index) in order" :key="index">
				<td>
					<img :src="item.cover" alt="">
					<span>{{item.text}}</span>
				</td>
				<td>{{item.price}}</td>
				<td>{{item.quantity}}</td>
				<td>{{item.price * item.quantity}}</td>
				<td @click="del(index)">退款</td>
			</tr>
		</table>
		<h2 v-else>当前并无订单！快去下单吧~~</h2>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				order : []
			}
		},
		methods : {
			del : function(index){
				this.order.splice(index,1)
			}
		},
		created(){
			if(window.localStorage.getItem("gsStore")){
				console.log(JSON.parse(window.localStorage.getItem("gsStore")))
				this.order = JSON.parse(window.localStorage.getItem("gsStore")).order
			}
		}
	}
</script>

<style scoped="scoped">
	.container-order{
		width: 1120px;
		margin: 0 auto;
	}
	table{
		width: 100%;
    margin-top: 15px;
    color: #555;
    table-layout: fixed
	}
	table img{
		width: 110px;
		height: 120px;
	}
</style>
