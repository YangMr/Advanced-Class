<template>
	<span @click="toggleChanged" class="checkbox" :class="{active:value}"></span>
</template>

<script>
	export default {
		props : {
			value : {
				type : Boolean,
				default : false
			}
		},
		methods : {
			toggleChanged : function(){
				this.$emit("input",!this.value);
				this.$emit("change")
			}
		}
	}
</script>

<style scoped="scoped">
	.checkbox{
		display: inline-block;
		width: 16px;
		height: 16px;
		border:1px solid #dcdfe6;
		cursor: pointer;
		position: relative;
		box-sizing: border-box;
	}
	.checkbox:after{
		content: "";
		width:8px;
		height: 8px;
		display: block;
		position: absolute;
		left:0;
		top: 0;
		bottom:0;
		right:0;
		margin: auto;
	}
	.checkbox:hover{
		border-color:#95bf47;
	}
	.checkbox.active{
		border-width:2px;
		border-color:#95bf47;
	}
	.checkbox.active:after{
		 background-color: #95bf47;
	}
</style>
