<template>
  <div id="app">
		<Tab></Tab>
		<router-view></router-view>
  </div>
</template>

<script>	
import Tab from "./views/Tab.vue"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	components : {
		Tab
	}
}
</script>

<style>

</style>
