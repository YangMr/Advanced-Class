<template>
    <div>
      {{message}}
      <br>
      <button @click="changeData">Change Data</button>
    </div>
</template>

<script>
    export default {
        name: "child",
        data:function () {
          return {
            message : "",
            childText : "Ha Ha Ha"
          }
        },
        props : ["parentData"],
        mounted() {
          this.message = this.parentData;
          this.$emit("childText",this.childText)
        },
        methods : {
          changeData : function () {
            this.message = "我想好好学习";
            this.$emit("send",this.message);
          }
        }
    }
</script>

<style scoped>

  button{
    margin-top: 30px;
    padding:10px;
    border: 1px solid #ccc;
    background: purple;
    color:#fff;
    font-size: 22px;
    cursor: pointer;
  }

</style>
