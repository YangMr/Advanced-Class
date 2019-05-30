<template>
	<div>
		<div class="header">
			<slot name="header"></slot>
		</div>
		<div class="container">
			<slot></slot>
		</div>
		<div class="footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		mounted(){
			var header = this.$slots.header;
			console.log(header)
		}
	}
</script>

<style>
</style>
