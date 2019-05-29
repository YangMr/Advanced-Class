<template>
    <div class="children">
      我是Children2组件
      <br>
      <h1>{{msg}}</h1>
    </div>
</template>

<script>
    import obj from '../../bus'
    export default {
        name: "Children2",
        data : function () {
          return {
            msg : "123",
            array : ["德玛西亚","艾欧尼亚","暗影之泉","王者荣耀"]
          }
        },
      mounted() {
          var _this = this;
          obj.bus.$on("on-sendData",function (data) {
             console.log(data);
             _this.msg = data;
          });

          obj.bus.$emit("sendArray",this.array);
      }
    }
</script>

<style scoped>
  .children{
    width: 499px;
    border-right:1px solid #ccc;
    border-bottom:1px solid #ccc;
    float: left;
    height: 300px;
    line-height: 300px;
  }
</style>
