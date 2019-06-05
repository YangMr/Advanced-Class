<template>
  <div class="swiper-container">
    <!-- 使用动态样式更换背景图片 -->
    <div
      :style="{backgroundImage: 'url(' + bg + ')'}"
      class="swiper-image"></div>
    <!-- 定义切换按钮 -->
    <div class="swiper-paginator">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="paginator-item"
        :class="{'paginator-current': index === value}"
        @mouseover="toggleIndex(index)"
        @mouseout="initTimer"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
    props: {
      slides: { // slides接收用于切换的图片数组
        type: Array,
        validator (value) { // 判断数组元素类型是否为字符串
          return value.every(item => Object.prototype.toString.call(item) === '[object String]')
        }
      },
      interval: { // 设置切换间隔时间，默认4s
        type: Number,
        default: 4
      },
      value: { // ① 自定义v-model，用于接收幻灯片页码，默认为0
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        timer: null
      }
    },
    computed: {
      bg () {
        return this.slides[this.value]
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.initTimer()
      })
    },
    methods: {
      initTimer () {
        this.timer = setInterval(() => { // 设置定时器，定时切换幻灯片
          // ② 自定义v-model，通知父级修改当前页码
          this.$emit('input', (this.value + 1) % this.slides.length)
        }, this.interval * 1000)
      },
      toggleIndex (index) { // 当鼠标划过幻灯片切换按钮时
        this.$emit('input', index) // ② 自定义v-model，通知父级修改当前页码
        clearInterval(this.timer) // 清楚定时器
      }
    }
  }
</script>

<style scoped>
  .swiper-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .swiper-image {
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .swiper-paginator {
    margin-top: -30px;
    padding-right: 5px;
    text-align: right;
    list-style: none;
  }
  .paginator-item {
    cursor: pointer;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 5px;
    border-radius: 50%;
    background-color: #000;
    opacity: 0.3;
  }
  .paginator-current {
    background-color: #fff; /* 当前激活的幻灯片切换按钮样式 */
    opacity: .6;
  }
</style>
