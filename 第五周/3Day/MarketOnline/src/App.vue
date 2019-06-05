<template>
  <div>
    <div class="gs-menu-bg"></div>
    <div class="gs-header">
      <div class="gs-quick-menu">
        <div class="gs-profile">
          <span>你好，游客</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>消息 <strong>0</strong></span>
        </div>
        <ul class="gs-nav">
          <li class="gs-nav-item">
            <router-link class="gs-link" to="/order">我的订单</router-link>
          </li>
          <li class="gs-nav-item">
            <router-link class="gs-link" to="/cart">
              <i class="fa fa-shopping-cart"></i>&nbsp;购物车
            </router-link>
          </li>
          <li class="gs-nav-item">
            <span class="gs-link gs-forbid">收藏夹</span>
          </li>
          <li class="gs-nav-item">
            <span class="gs-link gs-forbid">商家入口</span>
          </li>
        </ul>
      </div>
      <div>
        <div class="gs-logo" @click="toHomepage"></div>
        <div class="gs-search-box">
          <input
            class="gs-search-input"
            type="text"
            placeholder="请输入 商品/店铺"><!--
          --><span class="gs-search-btn">搜&nbsp;&nbsp;索</span>
        </div>
      </div>
    </div>
    <div class="gs-dividor"></div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      toHomepage () {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .gs-link {
    color: #999;
    text-decoration: none;
    outline: none;
  }
  .gs-forbid {
    cursor: not-allowed;
  }
  .gs-menu-bg {
    position: absolute;
    width: 100%;
    height: 30px;
    background-color: #f2f2f2;
    border-bottom: 1px solid #e5e5e5;
  }
  .gs-header {
    width: 1120px;
    margin-left: auto;
    margin-right: auto;
  }
  .gs-quick-menu {
    position: relative;
    font-size: 12px;
    color: #999;
    background-color: #f2f2f2;
  }
  .gs-profile {
    display: inline-block;
    line-height: 30px;
    cursor: pointer;
  }
  .gs-nav {
    position: absolute;
    right: 0;
    display: inline-block;
    line-height: 30px;
    list-style: none;
  }
  .gs-nav-item {
    margin-left: 12px;
    display: inline-block;
  }
  .gs-logo {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 188px;
    height: 75px;
    cursor: pointer;
    background-image: url(./assets/images/logo.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .gs-search-box {
    display: inline-block;
    line-height: 100px;
    float: right;
  }
  .gs-search-input {
    box-sizing: border-box;
    width: 240px;
    line-height: 32px;
    padding-left: 6px;
    outline: none;
    border: 2px solid #95bf47;
    vertical-align: middle;
  }
  .gs-search-btn {
    display: inline-block;
    line-height: 36px;
    padding-left: 16px;
    padding-right: 16px;
    color: #fff;
    font-weight: 600;
    background-color: #95bf47;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
  }
  .gs-dividor {
    height: 2px;
    background-color: #95bf47;
  }
</style>
