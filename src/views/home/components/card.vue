<template>
  <div class="card">
    <van-popup
        v-model="flag"
        closeable
        position="bottom"
        :style="{ height: '80%' }"
        @close="closeIt"
    >
      <div class="card-content">
          <img class="card-content-img" src="../../../assets/home/header@2x.png"/>
          <div class="card-content-instructions">
              <p>每售出一份元气猴，价格上涨<span>0.02元</span></p>
              <p>售出越多，价格越高</p>
          </div>
        <div class="card-content-form" v-if="lock">
          <van-field
              v-model="periodInfo.sku_price"
              label="单价"
              input-align="right"
          />
          <van-field name="radio" label="购买数量">
            <template #input>
              <van-radio-group v-model="radio" direction="horizontal">
                <div v-for="(item, index) in 5" :key="index">
                  <van-radio shape="square" :name="item" :disabled="index > periodInfo.sku_limit-1">
                    <template #icon="props">
                      <div :class="{ activeIcon :props.checked , inactiveIcon: !props.checked }">{{item}}</div>
                    </template>
                  </van-radio>
                </div>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
              readonly
              :value="total"
              label="总计"
              input-align="right"
          />
        </div>
        <div class="card-content-form" v-else>
          <van-field
              :value="lockInfo.sku_price"
              label="单价"
              input-align="right"
              readonly
          />
          <van-field name="radio" label="购买数量" >
            <template #input>
              <van-radio-group v-model="lockInfo.sku_count" direction="horizontal">
                <div v-for="(item, index) in 5" :key="index">
                  <van-radio shape="square" :name="item" :disabled="index !=lockInfo.sku_count-1">
                    <template #icon="props">
                      <div :class="{ activeIcon :props.checked , inactiveIcon: !props.checked }">{{item}}</div>
                    </template>
                  </van-radio>
                </div>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
              readonly
              :value="lockInfo.total_price"
              label="总计"
              input-align="right"
          />
        </div>
        <div class="card-content-btn" @click="collection" v-if="lock">
          立即收藏
        </div>
        <div class="card-content-btn"  v-else>
           价格已锁定,前往支付中
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch, computed } from '@vue/composition-api'
import Api from '@/apis'
import { Toast } from 'vant'
export default defineComponent({
  components: {
    // Button
  },
  props: {
    cardShow: {
      type: Boolean,
      default: false
    },
    periodInfo: {
      type: Object,
      default: {}
    },
    periodID: {
      type: Number,
      default: 0
    }
  },
  setup (props, ctx) {
    console.log('setup')

    watch(() => props.cardShow, val => {
      if (val) {
        flag.value = props.cardShow
      }
    },
    { immediate: true }
    )
    const closeIt = () => {
      console.log('eee')
      ctx.emit('close')
    }
    const value = ref<string>('45')
    const radio = ref<number>(1)
    const flag = ref<boolean>(false)
    const lock = ref<boolean>(true)
    const lockInfo = ref({})
    const total = computed(() => {
      let num = 0
      if (radio.value === 1) {
        num = props.periodInfo.sku_price
      } else if (radio.value === 2) {
        num = 2 * props.periodInfo.sku_price + +0.01
      } else if (radio.value === 3) {
        num = 3 * props.periodInfo.sku_price + +0.03
      } else if (radio.value === 4) {
        num = 4 * props.periodInfo.sku_price + +0.06
      } else if (radio.value === 5) {
        num = 5 * props.periodInfo.sku_price + +0.10
      }
      return num
    })
    const collection = async () => {
      try {
        // eslint-disable-next-line no-undef
        const params = {
          period_id: props.periodID,
          sku_count: radio.value
        }
        const result = await Api.home.saveOrder(params)
        lock.value = false
        lockInfo.value = result.data
        const WxPayData = result.data.wx_pay
        setTimeout(() => {
          function onBridgeReady () {
            // eslint-disable-next-line no-undef
            WeixinJSBridge.invoke('getBrandWCPayRequest', {
              appId: WxPayData.app_id, // 公众号ID，由商户传入
              timeStamp: WxPayData.timestamp, // 时间戳，自1970年以来的秒数
              nonceStr: WxPayData.nonce_str, // 随机串
              package: WxPayData.package,
              signType: WxPayData.sign_type, // 微信签名方式：
              paySign: WxPayData.pay_sign // 微信签名
            },
            function (res) {
              if (res.err_msg == 'get_brand_wcpay_request:ok') {
                // 使用以上方式判断前端返回,微信团队郑重提示：
                // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              }
            })
          }
          if (typeof WeixinJSBridge === 'undefined') {
            if (document.addEventListener) {
              document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
            } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
              document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
            }
          } else {
            onBridgeReady()
          }
        }, 100)
        console.log(result, 'saveOrder')
      } catch (err) {
        console.log(err, 'err')
      }
    }
    return {
      flag,
      closeIt,
      value,
      radio,
      total,
      collection,
      lock,
      lockInfo
    }
  }
})
</script>
<style lang="less" scoped>
.card{
  .van-popup{
    width: 375px;
    background: #253341;
    border-radius: 18px 18px 0 0;
  }
  &-content{
    margin-top: 48px;
    &-img {
      width: 180px;
      height: 180px;
    }
    &-instructions {
      margin-top: 20px;
      color: #AAB8C2;
      span {
       color:  #29BCCF;;
      }
    }
    &-btn {
      margin: 40px auto;
      width: 160px;
      height: 20px;
      font-size: 16px;
      background: #29BCCF;
      border-radius: 54px;
      width: 311px;
      height: 40px;
      line-height: 40px;
    }
    &-form{
      width: 80%;
      margin: 0 auto;
      .van-cell{
        background-color: #253341;
        // border-bottom: 1px solid rgba(245, 248, 250, 0.2);
        /deep/.van-field__label{
          color: rgba(255, 255, 255, .7);
        }
        /deep/.van-field__control {
          color: #FFFFFF;
        }
        /deep/ .van-radio--disabled {
          .inactiveIcon{
            width: 20px;
            height: 20px;
            background: #3E5063;
            opacity: 0.2;
            border-radius: 4px;
            font-size: 12px;
            color: #FFFFFF;
            text-align: center;
          }
        }
      }
      .activeIcon{
        width: 20px;
        height: 20px;
        background: #29BCCF;
        border-radius: 4px;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        color: #FFFFFF;
      }
      .inactiveIcon{
        width: 20px;
        height: 20px;
        background: #465B70;
        border-radius: 4px;
        font-size: 12px;
        color: #FFFFFF;
        text-align: center;
      }
    }
  }

}

</style>
