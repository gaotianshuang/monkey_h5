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
        <div class="card-content-form">
          <van-field
              v-model="value"
              label="数量"
              input-align="right"
          />
          <van-field name="radio" label="购买数量">
            <template #input>
              <van-radio-group v-model="radio" direction="horizontal">
                <div v-for="(item, index) in 5" :key="index">
                  <van-radio shape="square" :name="item" >
                    <template #icon="props">
                      <div :class="{ activeIcon :props.checked , inactiveIcon: !props.checked }">{{item}}</div>
                    </template>
                  </van-radio>
                </div>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
              v-model="value"
              label="总计"
              input-align="right"
          />
        </div>
        <div class="card-content-btn">
          立即收藏
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api'
export default defineComponent({
  components: {
    // Button
  },
  props: {
    cardShow: {
      type: Boolean,
      default: false
    }
  },
  setup (props, ctx) {
    console.log('setup')

    const flag = ref<boolean>(false)
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
    return {
      flag,
      closeIt,
      value,
      radio
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
