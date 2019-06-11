<template>
  <div class="container">
    <span class="btn-redirect" @click="redirect">点击进入</span>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    methods: {
      redirect () {
        this.$router.push('/main')
      }
    }
  }
</script>

<style scoped>
  .container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(../assets/images/index.gif);
    background-position: center bottom;
    background-repeat: no-repeat;
  }
  .btn-redirect {
    float: right;
    margin: 3px;
    padding: 1px 8px;
    background-color: #919191;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
</style>
