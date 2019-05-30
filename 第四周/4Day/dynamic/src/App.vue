<template>
  <div id="app">
     <!-- <ComA></ComA> -->
		 <!-- <component :is="currentView"></component>
		 <hr>
		 <button @click="changeView('A')">显示ComA组件的内容</button>
		 <button @click="changeView('B')">显示ComB组件的内容</button>
		 <button @click="changeView('C')">显示ComC组件的内容</button> -->
		 <ul>
			 <li @click="changeView('A')">首页</li>
			 <li @click="changeView('B')">个人中心</li>
			 <li @click="changeView('C')">关于我们</li>
		 </ul>
			<div class="clear"></div>
		 <component :is="currentView"></component>
  </div>
</template>

<script>
	import ComA from './components/ComA'
	import ComB from './components/ComB'	
	import ComC from './components/ComC'	
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
			currentView : "ComA"
    }
  },
	methods : {
		changeView : function(data){
			console.log(data)
			this.currentView = "Com" + data;
		}
	},
	components : {
		ComA,
		ComB,
		ComC
	}
}
</script>

<style>
 #app{
	 width: 1000px;
	 margin: 30px auto;
 }
 #app ul{
	 list-style: none;
	 margin: 0;
	 padding: 0;
 }
 #app ul li{
	 float: left;
	 width: 150px;
	 height: 35px;
	 background: pink;
	 text-align: center;
	 line-height:35px;
 }
 #app ul li:hover{
	 background: purple;
	 color: #fff;
	 cursor: pointer;
 }
 .clear{
	 clear: both;
 }
</style>
