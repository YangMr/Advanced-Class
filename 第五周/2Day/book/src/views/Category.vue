<template>
	<div>
		<div class="category">
			<p>男生</p>
			<ul>
				<li @click="test(index)" v-for="(item,index) in male">{{item.title}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				male : ""
			}
		},
		methods : {
			test : function(index){
				this.$router.push({
					name : "hot",
					params : {
						/* id : {
							_id : this.male[index]._id,
							monthRank : this.male[index].monthRank,
							total : this.male[index].totalRank
						} */
						id : this.male[index]
					}
				})
			}
		},
		created(){
			var that = this;
			this.$axios.get("http://localhost:8880/ranking/gender").then(function(res){
				console.log(res.data.male)
				that.male = res.data.male;
			}).catch(function(error){
				console.log(error)
			})
		}
	}
</script>

<style scoped>
	li{
		height:.4rem;
		line-height:.4rem;
		background : #ccc;
		border-bottom:.01rem solid #fff;
		cursor: pointer;
	}
</style>
