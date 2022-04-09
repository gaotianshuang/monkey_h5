<template>
  <div class="popup">
    <div class="certification" @click="showPopup">
      「认证」元素猴，更早踏上数字藏品之旅
       <div class="certification-btn">去认证</div>
    </div>
    <van-popup v-model="show" :overlay="true">
         <div class="popup-content">
              <div class="popup-content-tittle">请先实名认证</div>
              <div class="popup-content-tip">实名认证为NFT确权需要，该实名认证信息将建立和欲购买NFT的一一对应之法律关系</div>
              <van-form validate-first @failed="onFailed" :ref="formbox">
               <!-- 通过 pattern 进行正则校验 -->
               <van-field
                   v-model="name"
                   name="pattern"
                   placeholder="真实姓名"
                   :rules="[{ validator:validatorName, message: '请输入正确姓名' }]"
               />
               <!-- 通过 validator 进行函数校验 -->
               <van-field
                   v-model="ID"
                   name="validator"
                   placeholder="身份证号"
                   :rules="[{ validator:validatorID, message: '请输入正确身份证号码' }]"
               />
               <!-- 通过 validator 进行异步函数校验 -->
               <van-field
                   v-model="phone"
                   name="asyncValidator"
                   placeholder="手机号"
                   :rules="[{ validator: ValidatorPhone, message: '请输入正确手机号码' }]"
               />
                <div class="phone">
                  <van-field
                      v-model="code"
                      name="asyncValidator"
                      placeholder="短信验证码"
                      :rules="[{ validator: ValidatorCode, message: '请输入正确验证码' }]"
                  />
                  <div class="code" v-if="!disabled" @click="getVerifyCod">{{btnTitle}}</div>
                  <div class="code" v-if="disabled">{{btnTitle}}</div>
                </div>

               <div style="margin: 16px;">
                 <van-button round block type="info" native-type="submit" @click="submit">提交认证信息</van-button>
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
/* eslint-disable */
// @ts-nocheck
import { defineComponent, toRef, ref } from '@vue/composition-api'
import { Toast, Dialog } from 'vant'
import Api from '@/apis/index'

export default defineComponent({
  props: {
    btnText: {
      type: String,
      default: '按钮'
    }
  },
  setup (props) {
    // @ts-nocheck
    const myBtn = toRef(props, 'btnText')
    const show = ref(false)
    const name = ref('')
    const ID = ref('')
    const code = ref('')
    const phone = ref('')
    const btnTitle = ref('获取验证码')
    const disabled = ref(false)
    const formbox = ref(null)
    const failed = ref(false)
    const checked = ref(false)
    const showPopup = () => {
      show.value = true
    }
    // 校验函数返回 true 表示校验通过，false 表示不通过 汉字
    const validatorName = (val:any) => /^[\u2E80-\u9FFF]+$/.test(val)
    // 纯数字
    const ValidatorCode = (val:any) => /^\d{1,}$/.test(val)
    // 校验函数身份证
    const validatorID = (val:any) =>
      /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
        .test(val)
    // 校验手机号码
    const ValidatorPhone = (val: any) =>
      /^((\+|00)86)?1[3-9]\d{9}$/.test(val)
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
      failed.value = true
      console.log('failed', errorInfo)
    }
    const getVerifyCod = async () => {
      let time = 60
      const timer = setInterval(() => {
        btnTitle.value = time + '秒后重试'
        disabled.value = true
        time--
        if (time === 0) {
          clearInterval(timer)
          btnTitle.value = '获取验证码'
          disabled.value = false
        }
      }, 1000)
      try {
        // eslint-disable-next-line no-undef
        const params = {
          phone: phone.value
        }
        const result = await Api.home.getReport(params)
        console.log(result, '232321')
      } catch (err) {
        console.log(err, 'err')
      }
    }
    const submit = async () => {
      if (!checked.value) {
        Toast('请勾选协议')
        return
      }
      if (failed.value) {
        console.log(failed)
        Toast('请填写正确信息')
      } else {
        try {
          // eslint-disable-next-line no-undef
          const params = {
            name: name.value,
            id_code: ID.value,
            phone: phone.value,
            identify_code: code.value
          }
          const result = await Api.home.updateIdentify(params)
          console.log(result, '232321')
          Toast('认证成功')
          setTimeout(() => {
            show.value = false
          }, 100)
        } catch (err) {
          console.log(err, 'err')
        }
      }
    }
    return {
      myBtn,
      show,
      showPopup,
      name,
      phone,
      code,
      ID,
      disabled,
      onFailed,
      validatorName,
      ValidatorCode,
      asyncValidator,
      ValidatorPhone,
      validatorID,
      checked,
      getVerifyCod,
      btnTitle,
      formbox,
      submit
    }
  }
})
</script>
<style lang="less" scoped>
.certification{
  position: absolute;
  top:0;
  left:0;
  background: #29BCCF;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  font-size: 13px;
  justify-content: space-around;
  &-btn {
    width: 56px;
    height: 23px;
    background: #FFFFFF;
    border-radius: 38px;
    font-size: 12px;
    color: #29BCCF;
    line-height: 23px;
  }
}
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
  /deep/.van-field__control{
    color: #F5F8FA;
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
