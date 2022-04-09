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
  
  export interface GoodsSku {
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