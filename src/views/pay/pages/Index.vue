<template>
  <div class="pay">
    <div class="pay-tittle">
    </div>
    <div class="pay-icon">
    </div>
    <div class="pay-success">
       支付成功
    </div>
    <div class="opacity5">恭喜您，获得元气猴NFT
    </div>
    <div class="btn">继续收藏</div>
    <div class="opacity5">可在「我的」→「我的藏品」去查看</div>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  components: {
    // Button
  },
  setup () {
    console.log('setup')
    const text = ref<string>('')
    const btnText = ref<string>('测试')
    return {
      text,
      btnText
    }
  }
})
</script>
<style lang="less" scoped>
.pay{
  width: 100%;
  margin: 0 auto;
  text-align: center;
  &-tittle {
    width: 100%;
    height: 2.06rem;
    background: url('../../../assets/home/MONKEY@2x.png') center/100% no-repeat;
    text-align: center;
  }
  &-icon {
    background: url('../../../assets/pay/Component 2@2x.png') center/100% no-repeat;
    width: 375px;
    height: 194px;
  }
  &-success{
    font-size: 22px;
    margin: 10px 0;
  }
  .btn {
    margin: 40px auto;
    width: 160px;
    height: 40px;
    background: #29BCCF;
    border-radius: 50px;
    line-height: 40px;
    font-size: 16px;
  }
}

</style>
