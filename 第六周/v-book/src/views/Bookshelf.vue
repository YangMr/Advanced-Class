<template>
	<div>
		<mt-button @click="$emit('addBook','分类')" class="add-book" type="primary">添加小说</mt-button>
	</div>
</template>

<script>
	export default {
		methods : {
			
		}
	}
</script>

<style scoped="scoped">
	.add-book{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
</style>
