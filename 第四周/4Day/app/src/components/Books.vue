<template>
	<div>
		<ul>
			<slot name="book" v-for="book in books" :book-name="book.name"></slot>
		</ul>
	</div>
</template>

<script>
	export default {
		props : ["books"]
	}
</script>

<style>
</style>
