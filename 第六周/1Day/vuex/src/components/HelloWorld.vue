<template>
  <div class="hello">
			<button @click="change">跳转到Index组件</button>
			<hr>
			<h1>{{gC}}</h1>
			<hr>
			<button @click="add">ADD DATA</button>
  </div>
</template>

<script>
	import {mapGetters} from "vuex"
	import {mapMutations} from "vuex"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '我想好好学习'
    }
  },
	computed : {
		...mapGetters({
			"gC": "getCounter"
		})
	},
	methods : {
		change : function(){
			this.$router.push({name : "index"})
		},
		...mapMutations({
			add : {
				type : "INCREMENT",
				num : 10
			}
		})
		//add : function(){
			
			/* this.$store.commit({
				type : "INCREMENT",
				num : 10
			}) */
			
		//}
	},
	created(){
		/* this.msg= this.$store.getters.getCounter; */
		// this.msg = this.gC
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
