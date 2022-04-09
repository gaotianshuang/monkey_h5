<template>
  <van-list>
    <van-cell @click="clickLatestEvent" class="top-border-radius">
      <div class="action">
        <div>
          <van-icon class="left-icon" name="bullhorn-o" color="#AAB8C2"/>
          最新活动
        </div>
        <van-icon name="arrow" color="#AAB8C2"/>
      </div>
    </van-cell>
    <van-cell @click="clickMyOrder">
      <div class="action">
        <div>
          <van-icon class="left-icon" name="balance-list-o" color="#AAB8C2"/>
          我的订单
        </div>
        <van-icon name="arrow" color="#AAB8C2"/>
      </div>
    </van-cell>
    <van-cell @click="clickJoinGroup">
      <div class="action">
        <div>
          <van-icon class="left-icon" name="friends-o" color="#AAB8C2"/>
          加入社区
        </div>
        <van-icon name="arrow" color="#AAB8C2"/>
      </div>
    </van-cell>
    <van-cell @click="clickCustomService">
      <div class="action">
        <div>
          <van-icon class="left-icon" name="service-o" color="#AAB8C2"/>
          客服咨询
        </div>
        <van-icon name="arrow" color="#AAB8C2"/>
      </div>
    </van-cell>
    <van-cell @click="clickGongzhonghao">
      <div class="action">
        <div>
          <van-icon class="left-icon" name="chat-o" color="#AAB8C2"/>
          公众号
        </div>
        <van-icon name="arrow" color="#AAB8C2"/>
      </div>
    </van-cell>
    <van-cell @click="clickProtocol" class="bottom-border-radius no-after">
      <div class="action">
        <div>
          <van-icon class="left-icon" name="description" color="#AAB8C2"/>
          法律协议
        </div>
        <van-icon name="arrow" color="#AAB8C2"/>
      </div>
    </van-cell>
  </van-list>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    clickLatestEvent () {
      console.log('click LatestEvent')
    },
    clickMyOrder () {
      console.log('click MyOrder')
      this.$router.push({
        path: '/order-list'
      })
    },
    clickJoinGroup () {
      console.log('click JoinGroup')
    },
    clickCustomService () {
      console.log('click CustomService')
    },
    clickGongzhonghao () {
      console.log('click Gongzhonghao')
    },
    clickProtocol () {
      console.log('click Protocol')
    }
  }
})
</script>

<style lang="less" scoped>
@bg-color: rgba(37, 51, 65, 0.6);

.van-list {
  margin-top: 16px;
  border: 0.5px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
  border-radius: 16px;
}

.van-cell {
  background: @bg-color;

  font-size: 13px;
  font-weight: 500;
  line-height: 18px;

  text-align: left;
  padding: 20px 20px;
}
.van-cell__value--alone {
  color: #AAB8C2;
}
.van-cell::after {
  border-color: rgba(255, 255, 255, 0.1);
}

.action {
  display: flex;
  justify-content: space-between;
}
.left-icon {
  font-weight: 700;
  margin-right: 8px
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
