<template>
  <div class="wrap">
    <div v-if="pageStatus === PageStatusEnum.Loading" class="loading-wrapper">
      <Loading />
    </div>
    <Empty v-if="pageStatus === PageStatusEnum.Empty"/>
    <div v-if="pageStatus === PageStatusEnum.HasCollection" class="collections-wrapper">
      <div v-for="collection of collectionsList" :key="collection.sku_id">

        <SingleCollection :imageURL="collection.img_url" :collectionName="collection.goods_name"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Empty from '../components/Empty/Index.vue'
import SingleCollection from '../components/SingleCollection/Index.vue'
import Loading from '@/components/Loading.vue'

enum PageStatus {
  Loading,
  Empty,
  HasCollection
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
  collectionsList: GoodsSku[],
  PageStatusEnum: any
}

const sleep = async (result?: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result || {})
    }, 5000)
  })
}

const mockCollectionsResponse = {
  data: {
    goods_list: [
      // {
      //   goods_name: '233',
      //   period_id: '233233233',
      //   sku_id: '233233233233',
      //   img_url: require('@/assets/collection/Empty.png'),
      //   owner_uid: '233233233233',
      //   goods_status: '233',
      //   tag: '233',
      //   chain_hash: '233233233233',
      //   order_id: '233233233233',
      //   chain_publish_time: '233233233233'
      // },
      // {
      //   goods_name: '666',
      //   period_id: '233233233',
      //   sku_id: '66666666666',
      //   img_url: require('@/assets/collection/Empty.png'),
      //   owner_uid: '233233233233',
      //   goods_status: '233',
      //   tag: '233',
      //   chain_hash: '233233233233',
      //   order_id: '233233233233',
      //   chain_publish_time: '233233233233'
      // },
      // {
      //   goods_name: '999',
      //   period_id: '233233233',
      //   sku_id: '99999999999',
      //   img_url: require('@/assets/collection/Empty.png'),
      //   owner_uid: '233233233233',
      //   goods_status: '233',
      //   tag: '233',
      //   chain_hash: '233233233233',
      //   order_id: '233233233233',
      //   chain_publish_time: '233233233233'
      // }
    ],
    total_count: 10
  }
}

export default Vue.extend({
  data (): DataType {
    return {
      isLoading: true,
      collectionsList: [],
      PageStatusEnum: PageStatus
    }
  },
  computed: {
    hasCollection (): boolean {
      return !this.isLoading && this.collectionsList && this.collectionsList.length > 0
    },
    pageStatus (): PageStatus {
      if (this.isLoading) {
        return PageStatus.Loading
      } else if (this.hasCollection) {
        return PageStatus.HasCollection
      }
      return PageStatus.Empty
    }
  },
  async beforeMount (): Promise<void> {
    await this.getCollections()
  },
  methods: {
    async getCollections (): Promise<void> {
      const result: any = await sleep(mockCollectionsResponse)
      this.collectionsList = result.data.goods_list
      this.isLoading = false
    }
  },
  components: {
    Empty,
    Loading,
    SingleCollection
  }
})
</script>

<style lang="less" scoped>
.wrap{
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.loading-wrapper {
  height: calc(100% - 60px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.collections-wrapper {
  padding-top: 15px;
  display: flex;

  // 声明宽度并且使用wrap，则可以自动换行
  flex-wrap: wrap;
  width: 100%;

  // padding-left、padding-left与box-sizing控制宽度，justify-content控制中间行的间距
  padding: 15px 15px 0;
  box-sizing: border-box;
  justify-content: space-between;
}
</style>
