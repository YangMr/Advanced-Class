<template>
  <div id="app">
    {{msg}}
    <br>
    <h1>{{text}}</h1>
    <hr>
    <app-child :parentData="msg" @send="getData" @childText="getText"></app-child>
  </div>
</template>

<script>

//引入Child组件
import Child from './components/Child'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text : "Hello world Vue.js"
    }
  },
  // 注册组件
  components : {
    "app-child" : Child
  },
  methods : {
    getData : function (data) {
      this.msg = data;
    },
    getText : function (data) {
      this.text = data
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
