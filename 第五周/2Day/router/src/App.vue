<template>
  <div id="app">
		<!-- <Home></Home>
		<router-view></router-view> -->
	<!-- 	<Task></Task> -->
		<router-view></router-view>
  </div>
</template>

<script>
import Home from "./Home.vue"	
import Task from "./task.vue"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	components : {
		Home,
		Task
	}
}
</script>

<style>
	html,body,div{margin: 0; padding: 0;}
</style>
