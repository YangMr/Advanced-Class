<template>
  <div
    class="scroll-number"
    :style="{fontSize: size + 'px'}">
    <slot name="prefix"></slot>
    <span class="number">{{value}}</span>
    <slot name="suffix"></slot>
  </div>
</template>

<script>
import TWEEN from 'tween.js'
export default {
  name: 'ScrollNumber',
  data () {
    return {
      value: 0,
      animation: null
    }
  },
  props: {
    total: {
      type: Number,
      default: 15374
    },
    size: {
      type: Number,
      default: 24
    }
  },
  mounted () {
    this.$nextTick(function () {
      const animate = function (time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      requestAnimationFrame(animate)
      let _self = this
      let surface = {value: 0}
      this.animation = new TWEEN.Tween(surface)
        .to({value: _self.total}, 1600)
      this.animation.easing(TWEEN.Easing.Exponential.Out).onUpdate(() => {
        _self.value = Math.floor(surface.value)
      })
      // 监听父组件通讯事件
      this.$on('start', () => {
        surface.value = 0
        this.animation.start()
      })
    })
  }
}
</script>

<style scoped>
  .number {
    display: inline-block;
    min-width: 40px;
    color: #ea4335;
    text-align: center;
    font-weight: 600;
  }
</style>
