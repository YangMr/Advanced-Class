<template>
	<div>
		<Demo>
			<h1 slot="header">我是header区域</h1>
			<p>我是内容1</p>
			<p>我是内容2</p>
			<h1 slot="footer">我是footer区域</h1>
		</Demo>
	</div>
</template>

<script>
	import Demo from './components/Demo'
	export default {
		components : {
			Demo
		}
	}
</script>

<style>
</style>
