<template>
  <div class="content">
    <table class="table-goods" v-if="order.length">
      <colgroup>
        <col name="col01" width="480">
        <col name="col02" width="160">
        <col name="col03" width="120">
        <col name="col04" width="160">
        <col name="col05" width="200">
      </colgroup>
      <thead>
      <tr>
        <th class="col01">商品</th>
        <th class="col02">单价</th>
        <th class="col03">数量</th>
        <th class="col04">金额</th>
        <th class="col05">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="(item, index) in order"
        :key="index">
        <td class="col01 one-line" :title="item.text">
          <img class="thumbnail-goods" :src="item.cover">&nbsp;
          {{ item.text }}
        </td>
        <td class="col02">￥{{ item.price }}</td>
        <td class="col03">{{ item.quantity }}</td>
        <td class="col04">￥{{ item.price * item.quantity }}</td>
        <td class="col05">
          <span class="btn-text" @click="drop(index)">退款</span>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="placeholder" v-else>当前并无订单！快去下单吧~~</div>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    data () {
      return {
        order: [],
        cart: []
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.getStore()
      })
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
      drop (index) {
        this.order.splice(index, 1)
        this.setStore()
      }
    }
  }
</script>

<style scoped>
  .content {
    width: 1120px;
    margin-left: auto;
    margin-right: auto;
  }
  .one-line {
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .table-goods {
    width: 100%;
    margin-top: 15px;
    color: #555;
    table-layout: fixed;
    border-collapse: collapse;
    user-select: none;
    cursor: default;
  }
  .table-goods>tbody>tr {
    transition: background-color 200ms linear;
    border-top: 1px solid #ebeef5;
  }
  .table-goods>tbody>tr:last-child {
    border-bottom: 1px solid #ebeef5;
  }
  .table-goods>tbody>tr:hover {
    background-color: rgba(149, 191, 103, .1);
  }
  .table-goods th,
  .table-goods td {
    text-align: left;
    font-size: 16px;
    padding-left: 12px;
  }
  .table-goods th {
    line-height: 52px;
  }
  .table-goods td {
    line-height: 120px;
  }
  .thumbnail-goods {
    width: 100px;
    vertical-align: middle;
  }
  .btn-text {
    color: #409eff;
    font-size: 14px;
    cursor: pointer;
  }
  .placeholder {
    color: #555;
    line-height: 80px;
    font-size: 24px;
  }
</style>
