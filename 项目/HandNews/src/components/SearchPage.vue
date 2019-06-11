<template>
  <div class="container">
    <div class="header">
      <i class="fa fa-angle-left icon-return" @click="toMain"></i>
      <div class="search-box">
        <i class="fa fa-search"></i>&nbsp;&nbsp;
        <label for="search" v-show="false"></label>
        <input
          id="search"
          type="text"
          placeholder="请输入关键字..."
          class="ipt-search"
          v-model="keyword">
      </div>
      <span class="btn-search" @click="toResult">搜&nbsp;索</span>
    </div>
    <div class="content">
      <!-- 根据历史记录关键字列表是否为空进行判断 -->
      <div class="search-banner" v-if="recordKeywords.length">
        <div class="banner-title">
          <span>历史记录</span>
          <i class="fa fa-trash btn-banner" @click="removeRecord"></i>
        </div>
        <ul class="keyword-list">
          <li
            v-for="(keyword, index) in recordKeywords"
            :key="index"
            class="keyword-item one-line"
            @click="toResultByRecord(keyword)">{{ keyword }}</li>
        </ul>
      </div>
      <div class="search-banner">
        <div class="banner-title">
          <span>猜你想搜的</span>
          <i
            class="fa btn-banner"
            :class="{ 'fa-eye': isVisible, 'fa-eye-slash': !isVisible }"
            @click="toggleVisible"></i>
        </div>
        <ul class="keyword-list" v-if="isVisible">
          <li
            v-for="(keyword, index) in recKeywords"
            :key="index"
            class="keyword-item one-line"
            @click="toResultByRecord(keyword)">{{ keyword }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchPage',
    data () {
      return {
        keyword: '',
        recordKeywords: [],
        recKeywords: [ '5G', '华为新机', '滴滴', '恒大全面大降价', '中国最厉害的后卫', '德安东尼', '应采儿', '黄磊', '冯绍峰', '赵丽颖', '地中海' ],
        isVisible: true
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.getRecord()
      })
    },
    methods: {
      getRecord () {
        let record = window.localStorage.getItem('ztRecord')
        if (record) {
          this.recordKeywords = JSON.parse(record).keywords
        }
      },
      setRecord () {
        window.localStorage.setItem('ztRecord', JSON.stringify({
          keywords: this.recordKeywords
        }))
      },
      removeRecord () {
        this.recordKeywords = []
        window.localStorage.removeItem('ztRecord')
      },
      toggleVisible () {
        this.isVisible = !this.isVisible
      },
      toMain () {
        this.$router.push('/main')
      },
      toResult () {
        // 当关键字不为空串时，条件成立
        if (this.keyword) {
          // 如果当前搜索记录中不包含此关键字，则将其加入记录集合中
          if (this.recordKeywords.findIndex(item => item === this.keyword) === -1) {
            this.recordKeywords.push(this.keyword)
            this.setRecord()
          }
          this.$router.push({path: '/result', query: { keyword: this.keyword }})
        }
      },
      toResultByRecord (keyword) {
        this.$router.push({path: '/result', query: { keyword }})
      }
    }
  }
</script>

<style scoped>
  .container {
    height: 100%;
  }
  .header {
    padding: 8px 15px;
    background-color: #d33d3e;
    overflow: hidden;
  }
  .icon-return {
    text-align: center;
    vertical-align: middle;
    color: #fff;
    font-size: 26px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 10px;
  }
  .search-box {
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 100px);
    line-height: 32px;
    background-color: #fff;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .search-box>i {
    color: #707070;
  }
  .ipt-search {
    width: calc(100% - 26px);
    border: none;
    outline: none;
    line-height: 32px;
  }
  .btn-search {
    display: inline-block;
    vertical-align: middle;
    line-height: 32px;
    padding-left: 10px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
  }
  .content {
    height: calc(100% - 48px);
    overflow-y: auto;
  }
  .search-banner {
    margin-top: 20px;
  }
  .banner-title {
    padding-left: 15px;
    padding-right: 15px;
    line-height: 32px;
    color: #777;
  }
  .btn-banner {
    float: right;
    line-height: 32px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .keyword-list {
    overflow: hidden;
    list-style: none;
    margin-top: 10px;
  }
  .keyword-item {
    box-sizing: border-box;
    float: left;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 28px;
    display: inline-block;
    width: 50%;
    color: #333;
    border-bottom: 1px solid #e8e8e8;
  }
  .keyword-item:nth-child(2n - 1) {
    border-right: 1px solid #e8e8e8;
  }
  .keyword-item:nth-child(1),
  .keyword-item:nth-child(2) {
    border-top: 1px solid #e8e8e8;
  }
  .one-line {
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: nowrap;
  }
</style>
