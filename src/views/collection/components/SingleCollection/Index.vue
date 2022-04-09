<template>
  <div class="single-collection-wrapper">
    <van-image
      style="border-radius: 12px;"
      width="136"
      height="136"
      :src="imageURL"
    />
    <p class="collection-name">
      {{collectionName}}
    </p>
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
    collectionName: String,
    skuId: String
  },
  methods: {
    toCollectionDetailPage (): void {
      this.$router.push({
        path: `/collection/${this.skuId}/`
      })
    }
  }
})
</script>

<style lang="less" scoped>
.single-collection-wrapper {
  margin-bottom: 15px;
  padding: 14px;
  border-radius: 16px;
  background: #25334199;
}

.collection-name {
  color: #F5F8FA;
  margin: 0;
  text-align: left;
}
</style>
