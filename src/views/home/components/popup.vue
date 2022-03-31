<template>
  <div class="popup">
    <div @click="showPopup">展示弹出层</div>
    <van-popup v-model="show" :overlay="true">
         <div class="popup-content">
              <div class="popup-content-tittle">请先实名认证</div>
              <div class="popup-content-tip">实名认证为NFT确权需要，该实名认证信息将建立和欲购买NFT的一一对应之法律关系</div>
              <van-form validate-first @failed="onFailed">
               <!-- 通过 pattern 进行正则校验 -->
               <van-field
                   v-model="value1"
                   name="pattern"
                   placeholder="真实姓名"
                   :rules="[{ pattern, message: '请输入正确内容' }]"
               />
               <!-- 通过 validator 进行函数校验 -->
               <van-field
                   v-model="value2"
                   name="validator"
                   placeholder="身份证号"
                   :rules="[{ validator, message: '请输入正确内容' }]"
               />
               <!-- 通过 validator 进行异步函数校验 -->
               <van-field
                   v-model="value3"
                   name="asyncValidator"
                   placeholder="手机号"
                   :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
               />
                <div class="phone">
                  <van-field
                      v-model="value3"
                      name="asyncValidator"
                      placeholder="短信验证码"
                      :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
                  />
                  <div class="code">获取验证码</div>
                </div>

               <div style="margin: 16px;">
                 <van-button round block type="info" native-type="submit">提交认证信息</van-button>
               </div>
                <div>
                  <van-checkbox v-model="checked" checked-color="#29BBCF">请先同意《用户注册协议》《隐私政策》《元计划-平台服务协议》</van-checkbox>
                </div>
             </van-form>
         </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, ref } from '@vue/composition-api'
import { Toast } from 'vant'

export default defineComponent({
  props: {
    btnText: {
      type: String,
      default: '按钮'
    }
  },
  setup (props) {
    const myBtn = toRef(props, 'btnText')
    const show = ref(false)
    const value1 = ref('')
    const value2 = ref('')
    const value3 = ref('')
    const pattern = /\d{6}/
    const showPopup = () => {
      show.value = true
    }
    // 校验函数返回 true 表示校验通过，false 表示不通过
    const validator = (val:any) => /1\d{10}/.test(val)

    // 校验函数可以直接返回一段错误提示
    const validatorMessage = (val:any) => `${val} 不合法，请重新输入`

    // 校验函数可以返回 Promise，实现异步校验
    const asyncValidator = (val:any) =>
      new Promise((resolve) => {
        Toast.loading('验证中...')

        setTimeout(() => {
          Toast.clear()
          resolve(/\d{6}/.test(val))
        }, 1000)
      })

    const onFailed = (errorInfo:any) => {
      console.log('failed', errorInfo)
    }
    return {
      myBtn,
      show,
      showPopup,
      value1,
      value2,
      value3,
      pattern,
      onFailed,
      validator,
      asyncValidator,
      checked: true
    }
  }
})
</script>
<style lang="less" scoped>
.popup{
   height: 50px;
  padding-bottom: 40px;
  /deep/input.van-field__control::-webkit-input-placeholder  {
    /* placeholder颜色 */
    color: rgba(170, 184, 194, .5);
    /* placeholder字体大小 */
    font-size: 12px;
  }
  /deep/.van-checkbox__label {
    color: rgba(170, 184, 194, .7);
    text-align: left;
  }
  .van-popup {
    width: 311px;
    height: 480px;
    background: #253341;
    border-radius: 16px;
  }
  .van-cell{
     background: #2E3D4D;
    border-radius: 4px;
    margin: 8px 0;
    color: #F5F8FA;
  }
  .van-cell::after {
    border-bottom: none;
  }
  .van-button--info {
    background: #29BCCF;
    border: 0.02rem solid #29BCCF;
  }
  .popup-content{
    margin: 30px;
    &-tittle {
      font-size: 16px;
    }
    &-tip {
      margin: 12px 0;
      font-size: 12px;
      color: rgba(170, 184, 194, .8);
      line-height: 24px;
      text-align: left;
    }
    .phone{
      position: relative;
    }
    .code{
      position: absolute;
      top:17px;
      right: 16px;
      color: #29BCCF;
    }
  }
}
</style>
