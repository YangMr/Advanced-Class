<template>
	<div>
		<div class="input-number">
			<button @click="handleDown" :disabled="currentValue <= min">-</button>
			<input @change="handleChange" v-model="currentValue" type="text">
			<button @click="handleUp" :disabled="currentValue >= max ">+</button>
		</div>
	</div>
</template>

<script>
	function isValueNumber(val){
		return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(val + " ");
	}
	
	export default {
		data : function(){
			return {
				currentValue : this.value
			}
		},
		watch : {
			currentValue : function(val){
				this.$emit("input",val);
				// this.$emit("on-change",val)
			},
			value : function(val){
				this.updateValue(val)
			}
		},
		methods : {
			updateValue : function(val){
				if(val > this.max) val = this.max;
				if(val < this.min) val = this.min;
				this.currentValue = val;
			},
			handleUp : function(){
				if(this.currentValue >= this.max) return;
				this.currentValue++;
			},
			handleDown : function(){
				if(this.currentValue <= this.min) return;
				this.currentValue--;
			},
			handleChange : function(event){
				var val = event.target.value.trim();
				var max = this.max;
				var min = this.min;
				
				if(isValueNumber(val)){
					val = Number(val);
					this.currentValue =val;
					if(val > max){
						this.currentValue = max;
					}else if(val < min){
						this.currentValue = min;
					}
				}else{
					event.target.value = this.currentValue
				}
			}
		},
		props : {
			max : {
				type : Number,
				default : Infinity
			},
			min : {
				type : Number,
				default : -Infinity
			},
			value : {
				type : Number,
				default : 0
			}
		},
		mounted(){
			this.updateValue(this.value)
		}
	}
</script>

<style>
</style>
