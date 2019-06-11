<template>
  <div class="container">
    <div class="header">
      <i class="fa fa-angle-left icon-header icon-bg" @click="toMain"></i>
      <div class="pull-right">
        <i class="fa fa-search icon-header" @click="toSearch"></i>
        <i class="fa fa-share-alt icon-header"></i>
      </div>
    </div>
    <div class="content">
      <h2>{{ news.title }}</h2>
      <p class="news-profile">{{ news.source }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ news.time }}</p>
      <div v-html="news.content"></div>
      <ul>
        <li class="keyword-item"><i class="fa fa-key"></i></li>
        <li
          v-for="(keyword, index) in news.keywords"
          :key="index"
          class="keyword-item">
          {{ keyword }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'NewsPage',
    mounted () {
      this.$nextTick(function () {
        this.getNews({
          id: this.$route.query.id
        })
      })
    },
    computed: {
      ...mapGetters('News', ['news'])
    },
    methods: {
      ...mapActions('News', ['getNews']),
      toMain () {
        this.$router.push('/main')
      },
      toSearch () {
        this.$router.push('/search')
      }
    }
  }
</script>

<style scoped>
  .container {
    height: 100%;
  }
  .header {
    color: #3f3f3f;
    line-height: 32px;
    font-size: 16px;
    padding: 0 10px 2px 10px;
    border-bottom: 1px solid #e8e8e8;
  }
  .icon-header {
    padding: 5px;
    vertical-align: middle;
  }
  .icon-bg {
    font-size: 20px;
  }
  .pull-right {
    float: right;
  }
  .content {
    box-sizing: border-box;
    padding: 25px 15px;
    height: calc(100% - 35px);
    overflow-y: auto;
    color: #222;
  }
  .news-profile {
    padding-top: 6px;
    padding-bottom: 10px;
    color: #999;
  }
  .keyword-item {
    margin-right: 10px;
    list-style: none;
    display: inline-block;
    color: #4095d8;
  }
  .keyword-item:first-child {
    font-size: 16px;
    margin-right: 5px;
  }
</style>
