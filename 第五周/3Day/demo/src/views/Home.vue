<template>
	<div>
		<h1>我是HOME组件</h1>
		<br>
						<button class="btn" @click="goList">go list</button>
		
		<p>我是第1个</p>
		<p>我是第2个</p>
		<p>我是第3个</p>
		<p>我是第4个</p>
		<p>我是第5个</p>
		<p>我是第6个</p>
		<p>我是第7个</p>
		<p>我是第8个</p>
		<p>我是第9个</p>
		<p>我是第10个</p>
		<p>我是第11个</p>
		<p>我是第12个</p>
		<p>我是第13个</p>
		<p>我是第14个</p>
		<p>我是第15个</p>
		<p>我是第16个</p>
		<p>我是第17个</p>
		<p>我是第18个</p>
		<p>我是第19个</p>
		<p>我是第20个</p>
		<p>我是第21个</p>
		<p>我是第22个</p>
		<p>我是第23个</p>
		<p>我是第24个</p>
		<p>我是第25个</p>
		<p>我是第26个</p>
		<p>我是第27个</p>
		<p>我是第28个</p>
		<p>我是第29个</p>
		<p>我是第30个</p>
		<p>我是第31个</p>
		<p>我是第32个</p>
		<p>我是第33个</p>
		<p>我是第34个</p>
		<p>我是第35个</p>
		<p>我是第36个</p>
		<p>我是第37个</p>
		
		<p>我是第38个</p>
		<p>我是第39个</p>
		<p>我是第40个</p>
	</div>
</template>

<script>
	export default {
		methods : {
			goList : function(){
				this.$router.push({name : "list"})
			}
		},
		beforeRouteLeave(to,from,next){
			if(localStorage.getItem("token")){
				next()
			}else{
				console.log("222")
				next({name:"login"})
			}
			/* if(localStorage.getItem("token")){
				next();
			}else{
				next({name : "login"})
			} */
		}
		/* created(){
			console.log(this.$route.meta.flag)
		} */
	}
</script>

<style>
	.btn{
		width: 150px;
		height: 35px;
		border:1px solid #ccc;
		background: purple;
		color: #fff;
		cursor: pointer;
		font-size:25px;
	}
</style>
