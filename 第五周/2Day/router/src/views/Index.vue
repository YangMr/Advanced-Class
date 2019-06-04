<template>
	<div>
		<h1>我是书架组件</h1>
		<hr>
		<div>
			<router-link :to="{name : 'books'}">查看书架</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style>
</style>
