<template>
    <div class="children">
      我是Children1组件
      <br>
      <button @click="send">Send Data</button>
      <ul v-if="message.length">
        <li v-for="item in message">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
</template>

<script>

    import obj from '../../bus'
    export default {
        name: "Children1",
        data : function(){
          return {
            text : "hello",
            message : []
          }
        },
        methods : {
          send : function () {
            obj.bus.$emit("on-sendData",this.text)
          }
        },
        mounted() {
            var _this = this;
            obj.bus.$on("sendArray",function (data) {
              _this.message = data
            })
        }
    }
</script>

<style scoped>
  .children{
    width: 498px;
    border-right:1px solid #ccc;
    border-bottom:1px solid #ccc;
    border-left:1px solid #ccc;
    float: left;
    height: 300px;
    line-height: 300px;
  }
</style>
