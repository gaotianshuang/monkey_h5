<template>
  <div class="wrap">
    <van-tabs v-model="active" background="#141519" color="#29BCCF">
      <van-tab title="全部" name="all" title-class="title-class">
        <div>
          <OrderList />
        </div>
      </van-tab>
      <van-tab title="已支付" name="paid" title-class="title-class">
        <div>
          <OrderList />
        </div>
      </van-tab>
      <van-tab title="已关闭" name="closed" title-class="title-class">
        <div>
          <OrderList />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OrderList from '../components/OrderList/Index.vue'

export default Vue.extend({
  data () {
    return {
      active: 'all'
    }
  },
  components: {
    OrderList
  }
})
</script>

<style lang="less" scoped>
.wrap{
  width: 100%;
  height: 100vh;

  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
  text-align: center;

}
.title-class {
  background: #141519;

  font-weight: 400;
  font-size: 12px;
  line-height: 17px;

  color: #AAB8C2;
  opacity: 0.7;
}

.title-class.van-tab--active {
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;

  color: #F5F8FA;
}

.van-tabs__line {
  background-color: #29BCCF;
}

</style>
