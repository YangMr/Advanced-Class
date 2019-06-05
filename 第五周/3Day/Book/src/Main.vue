<template>
	<div>
		 <Tab></Tab>
		<div class="content">
			<!-- 使用router-view渲染试图 -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Tab from "./components/Tab.vue"	
	export default {
		components : {
			Tab
		}
	}
</script>

<style>
</style>
