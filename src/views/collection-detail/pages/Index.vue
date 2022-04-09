<template>
  <div class="wrap">
    <van-image
      style="border-radius: 12px;"
      width="136"
      height="136"
      :src="collectionDetailToShow.img_url || ''"
    />

    <p>{{collectionDetailToShow.sku_name}}</p>
    <p>{{collectionDetailToShow.tag_names}}</p>

    <div>
      <p>
        <span>收藏者</span>
        <span>{{collectionDetailToShow.owner_name}}</span>
      </p>
      <p>
        <span>获取时间</span>
        <span>{{collectionDetailToShow.chain_publish_time || '--'}}</span>
      </p>
      <p>
        <span>哈希值</span>
        <span>{{collectionDetailToShow.chain_hash || '--'}}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    collectionDetailToShow (): any {
      return {}
    }
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
