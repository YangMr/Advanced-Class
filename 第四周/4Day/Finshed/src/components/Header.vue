<template>
	<div>
		<h1>Quotes Added</h1>
		<div class="progress">
		  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width:value}">
			{{arrText.length}}/{{maxLength}}
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		name : "Header",
		props:["maxLength","arrText"],
		data : function(){
			return {
				
			}
		},
		computed:{
			value : function(){
				return this.arrText.length / this.maxLength * 100 + "%"
			}
		}
	}
</script>

<style scoped>
	h1{
		font-size: 22px;
		font-weight: normal;
		margin-top: 10px; 
		padding: 15px 0;
		color: #666;
	}
</style>
