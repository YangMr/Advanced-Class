<template>
		<div>
			<slot></slot>
		</div>
</template>

<script>
</script>

<style scoped="scoped">
	div{
		font-family: 'Arizonia', cursive;
		border:1px solid #ccc;
		padding: 15px;
		border-radius: 5px;
		float: left;
		font-size: 25px;
		margin: 20px;
		cursor: pointer;
	}
	div:hover{
		background: pink;
	}
</style>
