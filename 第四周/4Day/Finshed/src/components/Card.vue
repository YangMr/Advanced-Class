<template>
	<div v-if="arrText.length" class="clearfix">
		<app-text @click.native="del" v-for="(item,index) in arrText">{{item}}</app-text>
	</div>
</template>

<script>
	import Text from './Text'
	export default{
		props:["arrText"],
		methods : {
			del : function(index){
				this.$emit("data",index);
				
			}
		},
		components : {
			"appText":  Text
		}
	}
</script>

<style>
	
</style>
