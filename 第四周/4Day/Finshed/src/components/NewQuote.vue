<template>
	<div class="new-quote">
		<h5>Quote</h5>
		<textarea v-model="text" name="" id=""></textarea>
		<button @click="Add">Add Quote</button>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				text : ""
			}
		},
		methods : {
			Add : function(){
				this.$emit("text",this.text);
				this.text = "";
			}
		}
	}
</script>

<style scoped="scoped">
	.new-quote{
		width: 600px;
		margin: 0 auto;
	}
	.new-quote h5{
		font-weight: bold;
		padding: 10px 0;
	}
	.new-quote textarea{
		/* resize: none; */
		width: 100%;
		min-height: 100px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	.new-quote button{
		width: 120px;
		height: 35px;
		background: #BDF3FD;
		color: #fff;
		line-height: 35px;
		border: none;
	}
	.new-quote button:hover{
		background: purple;
	}
</style>
