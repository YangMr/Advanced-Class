<template>
	<div class="cart-container">
		<table v-if="cart.length">
			<colgroup>
				<col name="col01" width="480">
				<col name="col02" width="160">
				<col name="col03" width="120">
				<col name="col04" width="160">
				<col name="col05" width="200">
			</colgroup>
			<thead>
				<tr>
					<th>
						<Checkbox @change="AllChecked" v-model="isAllChecked"></Checkbox>&nbsp;&nbsp;商品
					</th>
					<th>单价</th>
					<th>数量</th>
					<th>金额</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in cart">
					<th>
						<Checkbox @change="oncheckChanged" v-model="isCheckedArray[index]"></Checkbox>&nbsp;&nbsp;{{item.text}}
					</th>
					<th>{{item.price}}</th>
					<th>{{item.quantity}}</th>
					<th>{{item.price * item.quantity}}</th>
					<th>
						<span @click="del(index)">删除</span>
						<span>结算</span>
					</th>
				</tr>
			</tbody>
		</table>
		<div v-else>
			<h1>购物车里还没有东西哦！快去添加吧~~</h1>
		</div>
		<div class="banner-pay">
			<span>￥&nbsp;{{ getTotalPrice() }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
			<span class="btn-pay" @click="payAll">结&nbsp;&nbsp;算</span>
		</div>
	</div>
</template>

<script>
	import Checkbox from "../components/checkbox/Checkbox"
	export default {
		data : function(){
			return {
				isCheckedArray  : [],
				isAllChecked : false,
				cart : []
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getStore();
				this.setCheckedArray();
			})
		},
		methods : {
			del : function(index){
				this.cart.splice(index,1);
				this.setStore()
			},
			getStore : function(){
				var gsStore = window.localStorage.getItem("gsStore");
				if(gsStore){
					gsStore = JSON.parse(gsStore);
					this.cart = gsStore.cart || [];
				}
			},
			setStore : function(){
				var gsStore = {
				  cart: this.cart,
				  order: this.order
				}
				window.localStorage.setItem('gsStore', JSON.stringify(gsStore))
			},
			setCheckedArray : function(){
				this.isCheckedArray = this.cart.map(function(){
					return false;
				})
			},
			oncheckChanged : function(){
				this.isCheckedArray.every(function(item){
					return item;
				}) && (this.isAllChecked = true);
				this.isCheckedArray.some(function(item){
					return !item;
				}) && (this.isAllChecked = false)
			},
			AllChecked : function(){
				this.isCheckedArray.fill(this.isAllChecked)
			},
			//总价方法
			getTotalPrice : function(){
				var that = this;
				var balance = this.cart.filter(function(item,index){
					return that.isCheckedArray[index]
				});
				
				return balance.reduce(function(sum,item){
					return sum + item.price * item.quantity
				},0);
			},
			//结算方法
			payAll : function(){
				
			}
		},
		components : {
			Checkbox
		}
	}
</script>

<style scoped="scoped">
	.cart-container{
		width: 1120px;
		margin: 0 auto;
	}
	th{
		text-align: left;
	}
</style>
