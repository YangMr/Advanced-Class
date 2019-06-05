<template>
  <div class="container">
    <div class="left">
      <div class="actor">
        <img :src="actorC">
        <div
          ref="animPart"
          class="anim-part"
          :class="{'anim-cart': isCart, 'anim-order': isOrder}">
          <img :src="actorC">
        </div>
      </div>
      <ul class="thumbnail-list">
        <li
          class="thumbnail-item"
          v-for="(thumbnail, index) in thumbnails"
          :key="index"
          @mouseover="toggleActor(index)">
          <img class="thumbnail" :src="thumbnail">
        </li>
      </ul>
    </div>
    <div class="right">
      <h2>{{ item.text }}</h2>
      <div class="banner-price">
        <p class="params-item">
          <span class="params-label">价格</span>
          <span class="price-delete">￥{{ item.price }}</span>
        </p>
        <p>
          <span class="params-label">促销价</span>
          <span class="price-strong">￥{{ item.onlinePrice }}</span>
        </p>
      </div>
      <div class="banner-params">
        <p class="params-item"><span class="params-label">发货地</span>{{ item.address }}</p>
        <p class="params-item"><span class="params-label">快递方式</span>{{ item.type }}</p>
      </div>
      <div class="banner-quantity">
        <input
          class="ipt-quantity"
          v-model="quantity"
          type="number"
          min=1
          @keyup="checkQuantity">
      </div>
      <div class="banner-operate">
        <span
          class="btn-operate btn-buy"
          @click="addInOrder">
          立即购买
        </span>
        <span
          class="btn-operate btn-cart"
          @click="addInCart">
          <i class="fa fa-shopping-cart"></i>
          &nbsp;加入购物车
        </span>
      </div>
      <br>
      <div class="banner-state">
        <p class="params-item">
          <span class="params-label">服务承诺</span>
          <span class="params-label deep-gray">正品保证</span>
          <span class="params-label deep-gray">极速退款</span>
          <span class="params-label deep-gray">赠运费险</span>
          <span class="params-label deep-gray">七天无理由退换</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import config from '@/config/config'
  export default {
    name: 'Goods',
    data () {
      return {
        actorIndex: 0,
        quantity: 1,
        isCart: false, // 生成动态类名
        isOrder: false, // 生成动态类名
        cart: [],
        order: []
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.getStore()
        // 监听器作用：当分身动画结束后，去除动画类名
        this.$refs.animPart.addEventListener('animationend', () => {
          this.isCart = false
          this.isOrder = false
        })
      })
    },
    computed: {
      item () {
        return config.goods.find(item => item.name === this.$route.query.name)
      },
      thumbnails () {
        return this.item.thumbnails
      },
      actorC () {
        return this.item.images[this.actorIndex]
      },
      result () {
        return {
          cover: this.item.cover,
          text: this.item.text,
          type: this.item.type,
          price: this.item.onlinePrice,
          quantity: this.quantity
        }
      }
    },
    methods: {
      getStore () {
        let gsStore = window.localStorage.getItem('gsStore')
        if (gsStore) {
          gsStore = JSON.parse(gsStore)
          this.cart = gsStore.cart || []
          this.order = gsStore.order || []
        }
      },
      setStore () {
        let gsStore = {
          cart: this.cart,
          order: this.order
        }
        window.localStorage.setItem('gsStore', JSON.stringify(gsStore))
      },
      toggleActor (index) {
        this.actorIndex = index
      },
      checkQuantity () {
        if (this.quantity < 1 || isNaN(this.quantity)) {
          this.quantity = 1
        }
      },
      addInCart () {
        this.isCart = true
        this.cart.push(this.result)
        this.setStore()
      },
      addInOrder () {
        this.isOrder = true
        this.order.push(this.result)
        this.setStore()
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 1120px;
    margin-left: auto;
    margin-right: auto;
    height: 500px;
  }
  .left {
    padding-top: 50px;
    width: 50%;
    float: left;
  }
  .actor {
    position: relative;
    text-align: center;
  }
  .thumbnail-list {
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 430px;
    list-style: none;
  }
  .thumbnail-item {
    display: inline-block;
    width: 20%;
    cursor: pointer;
  }
  .thumbnail {
    border: 1px solid transparent;
    box-sizing: border-box;
  }
  .thumbnail:hover {
    border-color: rgba(0, 0, 0, .2);
  }
  .right {
    padding-top: 50px;
    overflow: hidden;
  }
  .banner-price,
  .banner-params,
  .banner-quantity,
  .banner-operate,
  .banner-state {
    padding: 5px 12px;
    margin-top: 18px;
  }
  .banner-price {
    margin-right: 80px;
    color: #333;
    background-color: #e9e9e9;
    background-image: url(data:image/png;base64,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);
  }
  .price-delete {
    text-decoration: line-through;
  }
  .price-strong {
    font-weight: 600;
    font-size: 24px;
    color: #ff0036;
  }
  .params-item {
    line-height: 24px;
  }
  .params-label {
    display: inline-block;
    min-width: 75px;
    color: #999;
    font-size: 12px;
  }
  .ipt-quantity {
    width: 120px;
    padding-left: 10px;
    line-height: 32px;
    outline: none;
    border: 1px solid #ccc;
  }
  .btn-operate {
    width: 200px;
    display: inline-block;
    cursor: pointer;
    line-height: 36px;
    text-align: center;
    border: 1px solid #95bf47;
    user-select: none;
  }
  .btn-cart {
    color: #fff;
    background-color: #95bf47;
  }
  .btn-buy {
    color: #95bf47;
    background-color: rgba(149, 191, 103, .1);
  }
  .deep-gray {
    color: #777;
  }
  .anim-part {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
  .anim-cart {
    animation-duration: 500ms;
    animation-name: addInCart;
    animation-timing-function: ease-in-out;
  }
  .anim-order {
    animation-duration: 500ms;
    animation-name: addInOrder;
    animation-timing-function: ease-in-out;
  }
  @keyframes addInCart {
    0% {
      transform: scale(1);
    }
    100% {
      transform: translateX(680px) translateY(-380px) scale(0.01);
    }
  }
  @keyframes addInOrder {
    0% {
      transform: scale(1);
    }
    100% {
      transform: translateX(620px) translateY(-380px) scale(0.01);
    }
  }
</style>
