<template>
	<div>
		<h1>追书最热帮</h1>
		<hr>
		<ul>
			<li v-for="(item,index) in books">{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				message : "",
				books : ""
			}
		},
		mounted(){
			var that = this;
			this.message = this.$route.params.id
			this.$axios.get("http://localhost:8880/ranking/" + this.message._id).then(function(res){
				console.log(res)
				that.books = res.data.ranking.books
			}).catch(function(error){
				console.log(error)
			})
			
		}
	}
</script>

<style>
</style>
