<template>
  <div class="single-order-wrapper font-light">
    <div class="title flex px12">
      <!-- 订单号，如【订单号：14417765341】 -->
      <span>
        订单号：{{orderID}}
      </span>
      <!-- 订单状态，如【已支付】 -->
      <span>
        {{orderStatus}}
      </span>
    </div>
    <div class="info-part flex-center">
      <van-image
        style="border-radius: 12px; margin-right: 12px"
        width="64"
        height="64"
        :src="imageURL"
      />
      <div style="flex-grow: 1;">
        <p class="info order-name-and-goods-count flex px12">
          <!-- 订单名字，如【元气猴一期】 -->
          <span class="font-medium">{{orderName}}</span>
          <!-- 商品数量，如【x3】 -->
          <span>x{{goodsCount}}</span>
        </p>

        <!-- 购买时间，如【购买时间：2022-04-01 18:00】 -->
        <p class="info align-to-left px11" style="color: rgba(170, 184, 194, 0.5);">
          购买时间：{{formattedTime}}
        </p>

        <!-- 付款金额，如【实付：¥30.42】 -->
        <p class="info align-to-left px12">
          实付：￥{{formattedPrice}}
        </p>
      </div>
    </div>
  </div>
</template>

/**
*  用于在藏品列表页展示单个藏品信息
*  点击可以跳转到藏品详情页
*/

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    imageURL: String,
    orderName: String,
    purchaseTime: Number,
    orderID: String,
    goodsCount: Number,
    price: Number
  },
  computed: {
    orderStatus () {
      return '已支付'
    },
    formattedPrice () {
      return this.price
    },
    formattedTime () {
      return new Date(this.purchaseTime).toDateString()
    }
  }
})
</script>

<style lang="less" scoped>
@import '../../../../utils/style/index.less';

.single-order-wrapper {
  margin-bottom: 12px;
  background: rgba(37, 51, 65, 0.6);
  border: 0.5px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;

  padding: 0 20px 16px;
}

.title {
  margin-bottom: 12px;
  padding: 12px 0;
  justify-content: space-between;
  border-bottom: rgba(37, 51, 65, 0.1) solid 0.5px;
}

.info-part {
  justify-content: space-between;
  height: 64px;
  width: 100%;
}

.info {
  margin-bottom: 4px;
}

.order-name-and-goods-count {
  justify-content: space-between;
}

.collection-name {
  color: #F5F8FA;
  margin: 0;
  text-align: left;
}
</style>
