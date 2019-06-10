<template>
	<div>
		<h1>{{count}}</h1>
		<br>
		<button @click="increment">Increment Counter</button>
		<button @click="decrement">Subcart Counter</button>
	</div>
</template>

<script>
	import {mapMutations} from "vuex"
	import {SOME_INCREMENT,SOME_DECREMENT} from "../store/mutation-types"
	export default {
		data : function(){
			return {
				
			}
		},
		methods : {
			...mapMutations({
				/* increment : increment,
				decrement : decrement */
				increment : {
					type : SOME_INCREMENT
				},
				decrement : {
					type : SOME_DECREMENT
				}
				
			})
			/* increment : function(){
				this.$store.commit("increment")
			},
			subcart : function(){
				this.$store.commit("decrement")
			} */
		},
		computed : {
			count : function(){
				return this.$store.state.a.counterA
			}
		}
	}
</script>

<style>
</style>
