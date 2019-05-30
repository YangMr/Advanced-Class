<template>
	<div>
		<Child :count="1"></Child>
	</div>
</template>

<script>
	import Child from './components/Child'
	export default {
		components : {
			Child
		}
	}
</script>

<style>
</style>
