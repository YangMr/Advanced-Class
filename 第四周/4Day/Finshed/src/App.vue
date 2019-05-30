<template>
  <div id="app">
		<Header :maxLength="maxLength" :arrText="arrText"></Header>
		<NewQuote @text="getText"></NewQuote>
		<Card :arrText="arrText" @data="getIndex"></Card>
		<Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'	
import NewQuote from './components/NewQuote'
import Card from './components/Card'
import Footer from './components/Footer'
export default {
  name: 'app',
  data () {
    return {
      maxLength : 10,
			arrText : ["我想好好学习1"]
    }
  },
	components : {
		Header,
		NewQuote,
		Card,
		Footer
	},
	methods : {
		getText : function(data){
			if(this.arrText.length >= this.maxLength){
				return alert("请先删除在添加");
			}
			this.arrText.push(data)
		},
		getIndex : function(index){
			this.arrText.splice(index,1)
		}
	}
}
</script>

<style>
#app{
	width: 1000px;
	margin: 0 auto;
}
</style>
