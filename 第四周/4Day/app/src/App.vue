<template>
  <div id="app">
		<Books :books="books">
			<template slot="book" scope="props">
					<li>{{props.bookName}}</li>
			</template>
		</Books>
  </div>
</template>

<script>
import Books from "./components/Books"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
			books : [
				{name : "Vue.js实战"},
				{name : "JavaScript实战"},
				{name : "jQuery实战"}
			]
    }
  },
	components : {
		Books
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
