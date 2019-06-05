<template>
  <div class="container">
    <div class="swiper-bg"
         :style="{backgroundColor: slidesColor[index]}"></div>
    <div class="stage">
      <ul class="category-nav">
        <li
          v-for="(item, index) in navbars"
          :key="index"
          class="cate-nav-item">
          <i class="cate-nav-icon" :class="item.icon"></i>
          &nbsp;&nbsp;{{ item.text }}
        </li>
      </ul>
      <div class="swiper">
        <Swiper :slides="slidesImage" v-model="index"></Swiper>
      </div>
    </div>
    <div class="rec-banner">
      <h1 class="banner-title">精品推荐</h1>
      <ul class="rec-list">
        <li
          class="rec-card"
          v-for="(item, index) in goods"
          :key="index"
          @click="togglePage(item)">
          <img class="rec-media" :src="item.cover"/>
          <div class="rec-profile">
            <h4>{{ item.text }}</h4>
            <p class="rec-params">
              原价: <span class="rec-price">￥{{ item.price }}</span>&nbsp;
              促销价: <span class="rec-online-price">￥{{ item.onlinePrice }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Swiper from '@/widgets/Swiper'
  import config from '@/config/config'
  export default {
    name: 'Index',
    components: { Swiper },
    data () {
      return {
        index: 0
      }
    },
    computed: {
      navbars () {
        return config.navbars
      },
      goods () {
        return config.goods
      },
      slidesColor () {
        return config.goods.map(item => item.color)
      },
      slidesImage () {
        return config.goods.map(item => item.poster)
      }
    },
    methods: {
      togglePage (item) {
        this.$router.push({ path: 'goods', query: { name: item.name } })
      }
    }
  }
</script>

<style scoped>
  .container {
    position: relative;
    background-color: #f5f5f5;
    border-bottom: 1px solid transparent;
  }
  .swiper-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background-color: #e5e5e5;
  }
  .stage {
    width: 1120px;
    margin-left: auto;
    margin-right: auto;
    background-color: #789;
  }
  .category-nav {
    display: inline-block;
    position: absolute;
    width: 200px;
    height: 500px;
    z-index: 2;
    list-style: none;
    background-color: rgba(0, 0, 0, 0.55);
  }
  .cate-nav-item {
    padding-left: 12px;
    line-height: 35.7143px;
    color: #fff;
    cursor: pointer;
  }
  .cate-nav-item:hover {
    color: #787878;
    background-color: rgba(255, 255, 255, .8);
  }
  .cate-nav-icon {
    opacity: .5;
  }
  .swiper {
    height: 500px;
    background-color: #e8e8e8;
  }
  .rec-banner {
    margin: 30px auto;
    padding-top: 30px;
    padding-bottom: 50px;
    width: 1120px;
    background-color: #fff;
  }
  .banner-title {
    padding: 8px 15px;
  }
  .rec-list {
    list-style: none;
  }
  .rec-card {
    display: inline-block;
    width: 25%;
    text-align: center;
    vertical-align: top;
    cursor: pointer;
  }
  .rec-media {
    width: 240px;
  }
  .rec-profile {
    width: 200px;
    display: inline-block;
    color: #444;
  }
  .rec-price {
    text-decoration: line-through;
  }
  .rec-online-price {
    color: #ff0036;
    font-size: 16px;
  }
  .rec-params {
    font-size: 12px;
    color: #888;
  }
</style>
