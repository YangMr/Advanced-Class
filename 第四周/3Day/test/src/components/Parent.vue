<template>
    <div class="parent">
      <h1>我是父组件</h1>
      <hr>
      <div class="container">
        <my-children1></my-children1>
        <my-children2></my-children2>
      </div>
    </div>
</template>

<script>
    import Children1 from './Child/Children1'
    import Children2 from './Child/Children2'
    export default {
        name: "parent",
        components : {
          "my-children1" : Children1,
          "my-children2" : Children2
        }
    }
</script>

<style scoped>
  .parent{
    text-align: center;
  }
  .parent .container{
    width: 1000px;
    margin: 0 auto;
  }
</style>
