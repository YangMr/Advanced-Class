<template>
  <div class="container">
    <div class="rc-header">
      <div class="rc-header-right">
        <a
          href="#"
          :class="{'is-active': this.lang === 'chinese'}"
          @click="toggleLang('chinese')">中文</a>&nbsp;/
        <a
          href="#"
          :class="{'is-active': this.lang === 'english'}"
          @click="toggleLang('english')">English</a>
      </div>
      <div class="rc-header-left">
        <img class="rc-logo" :src="media.LOGO_PATH">
        <img class="rc-slogan" :src="media.SLOGAN_PATH">
      </div>
    </div>
    <div class="swiper-container rc-body">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="rc-page rc-page01">
            <div class="rc-galaxy">
              <!--
                旋转星空
                step 1: 使用代理图片以提升首屏加载速度
               -->
              <div
                class="rc-bg rc-layer-bg"
                ref="plbo"
                :style="{backgroundImage: 'url(' + common.GALAXY_LAYER_BG + ')', top: layerEdge, bottom: layerEdge, left: layerEdge, right: layerEdge}">
              </div>
              <div
                class="rc-bg rc-layer-top"
                ref="plto"
                :style="{backgroundImage: 'url(' + common.GALAXY_LAYER_TOP + ')'}">
              </div>
            </div>
            <div class="rc-content-wrapper">
              <div
                class="rc-text-wrapper"
                :style="{visibility: pageIndex === 0 ? 'visible' : 'hidden'}"
                ref="ptwo">
                <h2>{{langs.PAGE_ONE_SLOGAN}}</h2>
                <scroll-number :size="isMobile ? 18 : 24" ref="psno">
                  <span slot="suffix" style="color: #c3c3c3;">{{langs.PAGE_ONE_SUB_SLOGAN}}</span>
                </scroll-number>
              </div>
              <button
                class="btn btn-success btn-try"
                :style="{visibility: pageIndex === 0 ? 'visible' : 'hidden'}"
                ref="pbro">{{langs.TRY_LABEL}}</button>
            </div>
            <!--
              旋转星空
              step 1: 同时, 预加载真实图片
             -->
            <img :src="common.GALAXY_REAL_TOP" v-show="false">
            <img :src="common.GALAXY_REAL_BG" v-show="false">
          </div>
        </div>
        <div class="swiper-slide">
          <div class="rc-page rc-page02">
            <div class="rc-content-wrapper">
              <div
                class="rc-text-wrapper"
                :style="{visibility: pageIndex === 1 ? 'visible' : 'hidden'}"
                ref="ptwt">
                <h2>{{langs.PAGE_TWO_SLOGAN}}</h2>
              </div>
              <div class="rc-step-wrapper">
                <div class="rc-step-stage">
                  <div class="swiper-container rc-step-container">
                    <div class="swiper-wrapper">
                      <div
                        v-for="(step, index) in langs.STEPS_PROFILE"
                        :key="index"
                        class="swiper-slide rc-step">
                        <div class="rc-step-content">
                          <h2 class="rc-step-title">{{langs.STEP_LABEL}} {{index + 1}}</h2>
                          <p class="rc-step-profile">{{step}}</p>
                          <button
                            class="btn"
                            ref="pbdt"
                            v-if="index === 0">{{langs.DOWNLOAD_LABEL}}</button>
                          <button
                            class="btn"
                            ref="pbat"
                            v-if="index === 1">{{langs.AUTH_LABEL}}</button>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-scrollbar"></div>
                    <div class="swiper-button-next" v-if="!isMobile"></div>
                    <div class="swiper-button-prev" v-if="!isMobile"></div>
                  </div>
                </div>
                <div class="rc-step-scene" v-if="!isMobile">
                  <div
                    :style="{backgroundImage: 'url(' + media.STEPS_ACTOR_PATH[stepIndex] + ')'}"
                    class="rc-bg rc-step-actor"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="rc-page rc-page03">
            <div class="rc-content-wrapper">
              <div
                class="rc-text-wrapper"
                :style="{visibility: pageIndex === 2 ? 'visible' : 'hidden'}"
                ref="ptwth">
                <h2>{{langs.PAGE_THREE_SLOGAN}}</h2>
              </div>
              <div class="rc-cars-gallery">
                <div
                  v-for="(car, index) in langs.CARS_PROFILE"
                  :key="index"
                  class="rc-car">
                  <div class="rc-car-card" :title="langs.CARS_TOOLTIP">
                    <div class="rc-car-media">
                      <div
                        :style="{backgroundImage: 'url(' + common.CARS_PATH[index] + ')'}"
                        class="rc-bg rc-bg-scale rc-car-snapshot"></div>
                    </div>
                    <div class="rc-car-profile">
                      <h4>{{car.NAME}}</h4>
                      <div>{{langs.OWNER_LABEL}}:&nbsp;{{car.OWNER}}</div>
                      <div>{{langs.DATE_LABEL}}:&nbsp;{{car.DATE}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="rc-page rc-page04">
            <div
              class="rc-text-wrapper"
              :style="{visibility: pageIndex === 3 ? 'visible' : 'hidden'}"
              ref="ptwf">
              <h2>{{langs.PAGE_FOUR_SLOGAN}}</h2>
            </div>
            <div class="rc-content-wrapper">
              <div class="rc-bg rc-drive-stage">
                <div
                  :style="{backgroundImage: 'url(' + common.DRIVE_STAGE_ACTOR + ')'}"
                  class="rc-bg rc-actor-car" ref="pdcf"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination" v-show="!isMobile"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'animate.css/animate.min.css'
import config from '../config'
import ScrollNumber from '@/widgets/ScrollNumber.vue'
export default {
  name: 'Homepage',
  components: {
    ScrollNumber
  },
  data () {
    return {
      lang: 'chinese',
      pageIndex: 0,
      stepIndex: 0
    }
  },
  beforeCreate () {
    /**
     * 旋转星空
     *  step 3: 计算可视区域对角线, 根据对角线长度撑开容器
     */
    let w = document.body.clientWidth
    let h = document.body.clientHeight
    this.layerEdge = 'calc(50% - ' + Math.ceil(Math.sqrt(w * w + h * h) / 2) + 'px)'
  },
  mounted () {
    this.$nextTick(function () {
       let _self = this
      /* eslint-disable no-new */
      new Swiper('.rc-body', {
        speed: 800,
        direction: 'vertical',
        paginationClickable: true,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination'
        },
        on: {
          slideChangeTransitionEnd () {
            _self.pageIndex = this.activeIndex
            _self.animatePage()
          }
        }
      })
      this.initPage()
    })
  },
  methods: {
    addClass (el, _class) {
      let elClassArr = el.className.split(' ')
      let classArr = _class.split(' ')
      classArr.forEach(item => {
        if (elClassArr.indexOf(item) === -1) {
          // 避免奇怪的类型混入
          elClassArr.push(String(item))
        }
      })
      el.className = elClassArr.join(' ')
      return el
    },
    removeClass (el, _class) {
      let elClassArr = el.className.split(' ')
      let classArr = _class.split(' ')
      classArr.forEach(item => {
        let index = elClassArr.indexOf(item)
        if (index > -1) {
          elClassArr.splice(index, 1)
        }
      })
      el.className = elClassArr.join(' ')
      return el
    },
    bindAnimation (el, x) {
      let _self = this
      let events = [
        'webkitAnimationEnd',
        'mozAnimationEnd',
        'MSAnimationEnd',
        'oanimationend',
        'animationend'
      ]
      _self.addClass(el, x + ' animated')
      events.forEach(event => {
        let func = function () {
          events.forEach(item => {
            el.removeEventListener(item, func)
          })
          _self.removeClass(el, x + ' animated')
        }
        el.addEventListener(event, func)
      })
    },
    initPage01 () {
      setTimeout(() => {
        /**
         * 旋转星空
         *  step 4: 采用真实图片替换代理图片
         */
        this.$refs.plto.style.backgroundImage = 'url(' + this.common.GALAXY_REAL_TOP + ')'
        this.$refs.plbo.style.backgroundImage = 'url(' + this.common.GALAXY_REAL_BG + ')'
      }, 2000)
      this.animatePage01()
    },
    initPage02 () {
      let _self = this
      let pbdt = this.$refs.pbdt[0]
      let pbat = this.$refs.pbat[0]
      let bindAnimation = this.bindAnimation
      new Swiper('.rc-step-container', {
        speed: 600,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChangeTransitionEnd () {
            if (this.activeIndex === 0) {
              bindAnimation(pbdt, 'tada')
            } else if (this.activeIndex === 1) {
              bindAnimation(pbat, 'tada')
            }
            _self.stepIndex = this.activeIndex
          }
        }
      })
    },
    initPage03 () {},
    initPage04 () {},
    initPage () {
      this.initPage01()
      this.initPage02()
      this.initPage03()
      this.initPage04()
    },
    animatePage01 () {
      this.bindAnimation(this.$refs.ptwo, 'fadeIn')
      this.bindAnimation(this.$refs.pbro, 'fadeIn')
      this.$refs.psno.$emit('start')
    },
    animatePage02 () {
      this.bindAnimation(this.$refs.ptwt, 'fadeInDown')
    },
    animatePage03 () {
      this.bindAnimation(this.$refs.ptwth, 'flipInY')
    },
    animatePage04 () {
      this.bindAnimation(this.$refs.ptwf, 'jackInTheBox')
      setTimeout(() => {
        this.bindAnimation(this.$refs.pdcf, 'rc-arrive')
      }, 600)
    },
    // QA: 函数本是对象
    animatePage (index) {
      [
        this.animatePage01,
        this.animatePage02,
        this.animatePage03,
        this.animatePage04
      ][index || this.pageIndex]()
    },
    clearPage01 () {},
    clearPage02 () {},
    clearPage03 () {},
    clearPage04 () {},
    clearPage (index) {
      [
        this.clearPage01,
        this.clearPage02,
        this.clearPage03,
        this.clearPage04
      ][index]()
    },
    toggleLang (lang) {
      this.lang = lang
      this.animatePage()
    }
  },
  computed: {
    langs () {
      return config.langs[this.lang]
    },
    media () {
      return config.media[this.lang]
    },
    common () {
      return config.common
    },
    isMobile () {
      return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))
    }
  }
}
</script>

<style scoped>
  .container {
    font-family: Roboto, sans-serif;
    height: 100%;
    /* 禁止用户选中文本 */
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }
  .btn {
    padding: 5px 16px;
    outline: none;
    border: none;
    border-radius: 5px;
    line-height: 20px;
  }
  .btn:hover {
    background-color: #d5d5d5;
  }
  .btn-success {
    background-color: #1ab30b;
    color: #fff;
  }
  .btn-success:hover {
    background-color: #00a532;
  }
  /* header begin */
  .rc-header {
    height: 59px;
    line-height: 60px;
    padding: 10px 40px;
    border-bottom: 1px solid #e5e5e5;
    /* BFC */
    overflow: hidden;
  }
  .rc-header-left {
    height: 100%;
    overflow: hidden;
  }
  .rc-logo {
    height: 100%;
  }
  .rc-slogan {
    float: right;
    height: calc(100% - 30px);
    padding: 15px 0;
    margin-right: 60px;
  }
  .rc-header-right {
    width: 120px;
    height: 100%;
    float: right;
    cursor: default;
  }
  .rc-header-right>a {
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    color: #888;
    /* 去掉跳转的外边框线 */
    outline: 0;
  }
  .rc-header-right>a:hover {
    color: #333;
  }
  .rc-header-right>a.is-active {
    color: #398bfb;
  }
  /* end header */
  .rc-body {
    width: 100%;
    height: calc(100% - 80px);
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    height: 100%;
  }
  .rc-page {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  .rc-bg {
    /* 使图片覆盖整个容器 */
    background-size: cover;
    background-repeat: no-repeat;
    /* 设置背景图片位置居中 */
    background-position: center;
    transition: all 320ms linear;
  }
  .rc-bg.rc-bg-scale:hover {
    /* 放大 1.2 倍 */
    transform: scale(1.2);
  }
  /* page01 begin*/
  .btn-try {
    width: 160px;
  }
  .rc-galaxy {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  .rc-layer-bg {
    /**
     * 旋转星空
     * step 2: 预设 absolute 以使容器可被爆裂拉伸
     */
    position: absolute;
    animation: rotate 300s infinite;
    -webkit-animation: rotate 300s infinite;
    z-index: 1;
  }
  .rc-layer-top {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
  }
  .rc-page01 .rc-content-wrapper {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    top: 80px;
    z-index: 3;
  }
  .rc-page01 .rc-text-wrapper {
    padding: 12px 0;
    line-height: 30px;
  }
  .rc-page01 .rc-text-wrapper>h2 {
    margin-bottom: 8px;
    font-size: 36px;
    line-height: 40px;
    color: #e5e5e5;
  }
  @keyframes rotate {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
  @-webkit-keyframes rotate {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
  /* end page01 */
  /* page02 begin*/
  .rc-page02 {/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e2efff+0,b5cde5+99 */
    background: rgb(226,239,255); /* Old browsers */
    background: -moz-radial-gradient(ellipse at center, rgba(226,239,255,1) 0%, rgba(181,205,229,1) 99%); /* FF3.6-15 */
    background: -webkit-radial-gradient(ellipse at center, rgba(226,239,255,1) 0%,rgba(181,205,229,1) 99%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center, rgba(226,239,255,1) 0%,rgba(181,205,229,1) 99%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2efff', endColorstr='#b5cde5',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }
  .rc-page02 {
    background: #fff;
  }
  .rc-page02 .rc-content-wrapper {
    height: calc(100% - 60px);
    padding: 30px;
  }
  .rc-page02 .rc-text-wrapper {
    line-height: 80px;
  }
  .rc-page02 .rc-text-wrapper>h2 {
    font-size: 32px;
    text-align: center;
    color: #3c3c3c;
  }
  .rc-step-wrapper {
    margin: 15px auto;
    width: 80%;
    min-width: 1006px;
    height: calc(100% - 110px);
    overflow: hidden;
  }
  .rc-step-stage {
    position: relative;
    float: left;
    width: 40%;
    height: 100%;
  }
  .rc-step-container {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
    top: 0;
    bottom: 0;
    max-height: 400px;
  }
  .rc-step {
    position: relative;
  }
  .rc-step-content {
    position: absolute;
    box-sizing: border-box;
    padding: 15px 70px;
    height: 40%;
    min-height: 300px;
    margin: auto;
    top: 0;
    bottom: 0;
    text-align: center;
  }
  .rc-step-title {
    margin: 5px auto;
    width: 140px;
    font-size: 20px;
    line-height: 36px;
    background-color: #4b8bf5;
    border-radius: 20px;
    color: #fff;
  }
  .rc-step-profile {
    margin-top: 30px;
    font-size: 14px;
    letter-spacing: 1.5px;
    line-height: 28px;
    min-height: 80px;
  }
  .rc-step-scene {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  .rc-step-actor {
    position: absolute;
    margin: auto;
    width: calc(100% - 120px);
    height: calc(100% - 60px);
    max-height: 360px;
    top: 0;
    bottom: 0;
    right: 0;
    background-size: contain !important;
  }
  /* end page02 */
  /* page03 begin*/
  .rc-page03 .rc-content-wrapper {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .rc-page03 .rc-text-wrapper {
    margin: 15px 0;
  }
  .rc-page03 .rc-text-wrapper>h2 {
    text-align: center;
    font-size: 26px;
    line-height: 50px;
    color: #3c3c3c;
  }
  .rc-cars-gallery {
    margin: 0 auto;
    width: calc(100% - 80px);
    height: calc(100% - 80px);
  }
  .rc-car {
    display: inline-block;
    vertical-align: top;
    width: 33%;
    margin-bottom: 10px;
  }
  .rc-car-card {
    margin: 0 auto;
    width: 80%;
    cursor: pointer;
    background-color: #eee;
    border-radius: 5px;
  }
  .rc-car-media {
    position: relative;
    padding: 24% 50%;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .rc-car-snapshot {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .rc-car-profile {
    box-sizing: border-box;
    padding: 12px 8px;
    text-align: left;
    font-size: 14px;
    line-height: 20px;
  }
  .rc-car-profile h4 {
    color: #3c3c3c;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 5px;
  }
  /* end page03 */
  /* page04 begin*/
  .rc-page04 .rc-text-wrapper>h2 {
    margin-top: 40px;
    text-align: center;
    font-size: 48px;
    line-height: 80px;
    color: #3c3c3c;
  }
  .rc-page04 .rc-content-wrapper{
    height: calc(100% - 130px);
    padding: 15px 30px;
  }
  .rc-drive-stage {
    position: relative;
    height: 100%;
  }
  .rc-actor-car {
    position: absolute;
    top: 10%;
    right: 0;
    width: 500px;
    height: 225px;
    transform: scale(0.01);
    transition: all 1200ms ease-in;
  }
  .rc-actor-car.rc-arrive {
    top: calc(50% - 135px);
    right: calc(50% - 250px);
    transform: scale(1.2);
  }
  /* end page04 */
  @media screen and (max-width: 415px) {
    .rc-body {
      height: calc(100% - 50px);
    }
    .rc-header {
      height: 29px;
      line-height: 30px;
    }
    .rc-galaxy {
      height: 220px;
    }
    .rc-page01>.rc-content-wrapper {
      top: calc(50% - 10px);
    }
    .rc-page01 .rc-text-wrapper>h2 {
      font-size: 22px;
      color: #4285f4;
    }
    .rc-page02>.rc-content-wrapper {
      top: 80px;
      padding: 30px 0;
    }
    .rc-page02 .rc-text-wrapper>h2 {
      font-size: 22px;
      color: #4285f4;
    }
    .rc-page02 .rc-step-wrapper {
      min-width: 100%;
    }
    .rc-page02 .rc-step-stage {
      width: 100%;
    }
    .rc-page02 .rc-step-content {
      height: 100%;
    }
    .rc-page03 .rc-text-wrapper {
      margin: 0;
    }
    .rc-page03 .rc-text-wrapper>h2 {
      font-size: 22px;
      color: #4285f4;
    }
    .rc-cars-gallery {
      width: 100%;
      height: calc(100% - 50px);
    }
    .rc-car {
      width: 100%;
    }
    .rc-car-card {
      width: 100%;
      height: 100px;
      overflow: hidden;
      border-radius: 0;
    }
    .rc-car-media {
      height: 100%;
      width: 50%;
      float: left;
      border-radius: 0;
      padding: 0;
    }
    .rc-car-profile {
      padding: 5px 12px;
      height: 100%;
      overflow: hidden;
      border-radius: 0;
    }
    .rc-page04 .rc-text-wrapper>h2 {
      font-size: 28px;
      color: #4285f4;
    }
    .rc-page04 .rc-content-wrapper {
      padding-left: 0;
      padding-right: 0;
    }
    .rc-actor-car {
      width: 300px;
      height: 135px;
      right: -120px;
    }
    .rc-actor-car.rc-arrive {
      top: calc(50% - 67px);
      right: calc(50% - 150px);
    }
  }
  @media screen and (max-width: 1078px) {}
  @media screen and (min-width: 1368px) {
    .rc-cars-gallery {
      text-align: left;
    }
  }
</style>
