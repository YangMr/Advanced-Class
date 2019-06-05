<template>
	<div>
		<form>
			<p>
				<label for="">用户名:</label>
				<input type="text" v-model="user.name">
			</p>
			<p>
				<label for="">密　码:</label>
				<input type="password" v-model="user.pass">
			</p>
			<p>
				<button @click.prevent="login">登录</button>
			</p>
		</form>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				user : {},
			}
		},
		methods : {
			login : function(){
				window.localStorage.setItem("token","asdasdq2132132131");
				this.$router.push("/")
			}
		}
		
	}
</script>

<style>
</style>
