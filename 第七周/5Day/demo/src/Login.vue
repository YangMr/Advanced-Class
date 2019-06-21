<template>
	<div>
		<h1>我是登录页面</h1>
		<hr>
		
		<ul>
			<li>
				<label for="">用户名: </label>
				<input type="text" v-model="name">
			</li>
			<li>
				<label for="">密　码:</label>
				<input type="password" v-model="pwd">
			</li>
			<li>
				<button @click="submit">登录</button>
			</li>
		</ul>
		
	</div>
</template>

<script>
	
	export default {
		data : function(){
			return {
				name : "",
				pwd : ""
			}
		},
		methods : {
			submit : function(){
				axios.get("")
			}
		}
	}
	
</script>

<style>
</style>
