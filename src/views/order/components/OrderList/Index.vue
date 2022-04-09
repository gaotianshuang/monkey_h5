<template>
  <div class="order-list-wrapper">
    <div v-if="pageStatus === PageStatusEnum.Loading" class="loading-wrapper flex-center">
      <Loading />
    </div>
    <Empty v-if="pageStatus === PageStatusEnum.Empty"/>
    <div v-if="pageStatus === PageStatusEnum.HasOrder" class="collections-wrapper">
      <div v-for="order of ordersList" :key="order.orderID">
        <Order
          :orderID="order.orderID"
          :price="order.price"
          :goodsCount="order.goodsCount"
          :purchaseTime="order.purchaseTime"
          :orderName="order.orderName"
          :imageURL="order.imageURL"
          />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Order from '../Order/Index.vue'
import Empty from '../Empty/Index.vue'
import Loading from '@/components/Loading.vue'

enum PageStatus {
  Loading,
  Empty,
  HasOrder
}

enum GoodsSkuStatus {
  GoodsSkuStatusUnknown = 0,
  GoodsSkuStatusInSale = 1, // 售卖中
  GoodsSkuStatusSold = 2, // 已售卖待上链
  GoodsSkuStatusChainFailed = 3, // 上链失败
  GoodsSkuStatusChainSucceed = 4, // 上链成功
}

enum GoodsSkuTag {
  GoodsSkuTagUnknown = 0,
  GoodsSkuTagCommon = 1, // 普通
  GoodsSkuTagRare = 2, // 稀有
  GoodsSkuTagLegendary = 3, // 史诗
}

interface GoodsSku {
  period_id: string,
  sku_id: string,
  img_url: string,
  owner_uid: string,
  goods_status: GoodsSkuStatus,
  tag: GoodsSkuTag,
  chain_hash: string,
  order_id: string,
  chain_publish_time: number
}

interface DataType {
  isLoading: boolean,
  ordersList: GoodsSku[],
  PageStatusEnum: any
}

const sleep = async (result?: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result || {})
    }, 1000)
  })
}

const mockOrdersResponse = {
  data: {
    orders_list: [{
      imageURL: require('@/assets/home/header@2x.png'),
      orderName: '元气猴233',
      purchaseTime: 1649154494513,
      orderID: '233333',
      goodsCount: 5,
      price: 233
    }, {
      imageURL: require('@/assets/home/header@2x.png'),
      orderName: '元气猴633',
      purchaseTime: 1649154494513,
      orderID: '235533',
      goodsCount: 5,
      price: 233
    }, {
      imageURL: require('@/assets/home/header@2x.png'),
      orderName: '元气猴633',
      purchaseTime: 1649154494513,
      orderID: '2344333',
      goodsCount: 5,
      price: 233
    }]
  }
}

export default Vue.extend({
  components: {
    Order,
    Empty,
    Loading
  },
  data (): DataType {
    return {
      isLoading: true,
      ordersList: [],
      PageStatusEnum: PageStatus
    }
  },
  computed: {
    hasOrder (): boolean {
      return !this.isLoading && this.ordersList && this.ordersList.length > 0
    },
    pageStatus (): PageStatus {
      if (this.isLoading) {
        return PageStatus.Loading
      } else if (this.hasOrder) {
        return PageStatus.HasOrder
      }
      return PageStatus.Empty
    }
  },
  async beforeMount (): Promise<void> {
    await this.getCollections()
  },
  methods: {
    async getCollections (): Promise<void> {
      const result: any = await sleep(mockOrdersResponse)
      this.ordersList = result.data.orders_list
      this.isLoading = false
    }
  }
})
</script>

<style lang="less" scoped>
@import '../../../../utils/style/index.less';
@bg-color: rgba(37, 51, 65, 0.6);

.order-list-wrapper {
  padding-top: 12px;
}

.loading-wrapper {
  height: calc(100vh - 100px);
  justify-content: center;
}

.van-list {
  margin-top: 16px;
  border: 0.5px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
  border-radius: 16px;
}

.van-cell {
  background: @bg-color;
  color: #AAB8C2;

  font-size: 13px;
  font-weight: 500;
  line-height: 18px;

  text-align: left;
  padding: 20px 20px;
}

.van-cell::after {
  border-color: rgba(255, 255, 255, 0.1);
}

.top-border-radius {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.bottom-border-radius {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.no-after::after {
  border: none;
}
</style>
