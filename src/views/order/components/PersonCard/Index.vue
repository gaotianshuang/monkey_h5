<template>
  <div class="person-card-wrapper">
    <div class="person-info">
      <div>
        <van-image
          style="border-radius: 24px;"
          width="48"
          height="48"
          :src="233"
        />
      </div>
      <div>
        <div class="align-to-left">
          <span class="font-color-deep font-bold px15">
            微信昵称
          </span>
          <span class="font-color-light font-light px10">「未」实名认证</span>
        </div>
        <p class="font-color-light align-to-left font-light px11">藏品数量 / 未实名认证，不可购买</p>
      </div>
    </div>
    <div class="phone-and-id font-color-light">
      <div>
        <p class="font-light px11">手机号码</p>
        <p class="font-medium px12">***</p>
      </div>
      <div>
        <p class="font-light px11">身份证号</p>
        <p class="font-medium px12">***</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="less" scoped>
@import '../../../../utils/style/index.less';

.person-card-wrapper {
  background: linear-gradient(93.91deg, #E6FAFC 6.4%, #B2D8DC 93.6%);
  box-shadow: 0px -2px 8px rgba(88, 53, 0, 0.08);
  border-radius: 16px;

  padding: 28px 24px;
  box-sizing: border-box;
}

.person-info {
  display: flex;
  flex-direction: row;
}

.phone-and-id {
  display: flex;
  flex-direction: row;
}
</style>
