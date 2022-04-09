<template>
  <div class="person-card-wrapper">
    <div class="person-info">
      <div>
        <van-image
          class="avatar"
          round
          width="48"
          height="48"
          :src="imgUrl"
        />
      </div>
      <div>
        <div class="align-to-left" style="align-items: center; margin-bottom: 4px;">
          <span class="nickname font-color-deep font-bold px15">
            {{nickName}}
          </span>
          <van-tag color="rgba(37, 102, 107, 0.1)"
            text-color="rgba(98, 133, 137, 1)">
              {{textOfLabelOfVerifyStatus}}
          </van-tag>
        </div>
        <p class="font-color-light align-to-left font-light px11">藏品数量 / 未实名认证，不可购买</p>
      </div>
    </div>
    <div class="phone-and-id font-color-light">
      <div class="phone-and-id-item" style="width: 113px">
        <p class="font-light px11">手机号码</p>
        <p class="font-medium px12">***</p>
      </div>
      <div class="phone-and-id-item">
        <p class="font-light px11">身份证号</p>
        <p class="font-medium px12">***</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    imgUrl: {
      type: String,
      default: require('@/assets/about/default_avatar.png')
    },
    nickName: {
      type: String,
      default: '游客'
    },
    IDVerified: Boolean,
    phoneNumber: String,
    IDNumber: String
  },
  computed: {
    textOfLabelOfVerifyStatus () {
      if (this.IDVerified) {
        return '实名认证'
      } else {
        return '未实名认证'
      }
    }
  }
})
</script>

<style lang="less" scoped>
@import '../../../../utils/style/index.less';

.person-card-wrapper {
  background: no-repeat top 20px right/64px url('../../../../assets/about/stone.png'), linear-gradient(93.91deg, #E6FAFC 6.4%, #B2D8DC 93.6%);
  box-shadow: 0px -2px 8px rgba(88, 53, 0, 0.08);
  border-radius: 16px;

  padding: 28px 24px;
  box-sizing: border-box;
}

.person-info {
  display: flex;
  flex-direction: row;

  margin-bottom: 32px
}

.avatar {
  margin-right: 10px;
}

.nickname {
  margin-right: 6px;
}

.van-tag {
  font-size: 10px;
  height: 17px;
}

.phone-and-id {
  display: flex;
  flex-direction: row;
}

.phone-and-id-item {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
