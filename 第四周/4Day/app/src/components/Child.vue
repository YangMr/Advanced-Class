<template>
	<div>
		hello
		<Child :count="count+1" v-if="count < 5"></Child>
	</div>
</template>

<script>
	export default {
		name : "Child",
		props : {
			count : {
				type : Number,
				default : 1
			}
		}
	}
</script>

<style>
</style>
