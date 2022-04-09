<template>
  <div>
    <van-image
      style="margin-top: 50px"
      width="192"
      height="192"
      :src="emptyImgSrc"
    />

    <van-button round block :to="{ name: 'home' }" color="#29BCCF">
      去购买
    </van-button>
  </div>
</template>

<script lang="ts">
export default {
  data (): any {
    return {
      emptyImgSrc: require('@/assets/order/orderEmpty.png')
    }
  }
}
</script>

<style lang="less" scoped>
.wrap{
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.van-button {
  height: 40px;
  width: 112px;

  margin: 0 auto;
}
</style>
