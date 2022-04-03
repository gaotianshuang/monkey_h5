<template>
    <div class="wrap">
      <template>
      <div class="wrap-tittle">
        <span>元宇宙数字藏品-第三期</span>
      </div>
      <div class="wrap-tips">
        <span>国家链认证</span>
        <span>限定</span>
        <span>收藏品</span>
      </div>
      <div class="wrap-instructions">
        国内首批合法合规，互联网人自己的数字收藏NFT
      </div>
      <div class="wrap-info">
        <div>
          <p>4121</p>
          <p class="cont">项目售出总数</p>
        </div>
        <div>
          <p>4121</p>
          <p class="cont">当前价格</p>
        </div>
      </div>
      <div class="wrap-card">
        <img src="../../../assets/home/header@2x.png"/>
        <div class="wrap-card-information">
          <div class="left">
            <p>第二期</p>
            <p class="opacity5">已售出：500/2000</p>
          </div>
          <div class="right">
            <div class="btn" @click="handleCollection">立即收藏</div>
          </div>
        </div>
      </div>
    </template>
      <div style="padding-bottom: 80px">
          <Popup></Popup>
      </div>
      <Card :cardShow="cardShow" @close="handleCollection"></Card>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import Popup from '../components/popup.vue'
import Card from '../components/card.vue'
import Api from '@/apis/index'
// import api from '@/services/index'
export default defineComponent({
  components: {
    Popup,
    Card
    // Button
  },
  setup () {
    console.log('setup')
    const text = ref<string>('')
    const btnText = ref<string>('测试')
    const cardShow = ref<boolean>(false)
    const getHomeData = async () => {
      try {
        // eslint-disable-next-line no-undef
        const result = await Api.home.getHomeList({ name: '测试' })
        console.log(result, '232321')
      } catch (err) {
        console.log(err, '32321')
      }
    }
    getHomeData()
    const textChange = () => {
      return new Promise<string>(resolve => {
        setTimeout(() => {
          resolve('Home')
        }, 3000)
      })
    }
    const handleCollection = () => {
      console.log('2323', cardShow.value)
      cardShow.value = !cardShow.value
    }
    onMounted(async () => {
      // const res: any = await api.testAxios()
      // console.log(res.data.title)
      text.value = await textChange()
    })

    return {
      text,
      btnText,
      cardShow,
      handleCollection,
      getHomeData
    }
  }
})
</script>

<style lang="less" scoped>
.wrap{
  width: 100%;
  margin: 0 auto;
  text-align: center;
  .opacity5{
     opacity: 0.5;
  }
  &-tittle {
    width: 100%;
    height: 2.06rem;
    background: url('../../../assets/home/MONKEY@2x.png') center/100% no-repeat;
    text-align: center;
    span {
      margin-top: .8rem;
      font-weight: 500;
      font-size: 22px;
      display: inline-block;

    }
  }
  &-tips {
    width: 80%;
    margin: 0 auto;
    color: #29BCCF;
    font-size: .2rem;
    span {
      display: inline-block;
      min-width: .6rem;
      height: .34rem;
      background: #253341;
      border-radius: .04rem;
      margin-left: .12rem;
      line-height: .34rem;
      padding: .1rem;
    }
  }
  &-instructions {
     margin: .5rem 0;
    color: rgba(170, 184, 194, .8);
    font-size: .24rem;
  }
  &-info {
    margin: 0 auto;
    width: 335px;
    height: 80px;
    background: rgba(37, 51, 65, 0.6);
    border: 0.5px solid rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    border-radius: 16px;
    display: flex;
    align-items: center;
    position: relative;
    div {
       display: inline-block;
       width: 50%;
      .cont{
        color: rgba(245, 248, 250, .7)
      }
    }
    div::after{
      content:"";
      width: 0.5px;
      height: 20px;
      position:absolute;
      top:35%;
      left:50%;
      background: rgba(196, 196, 196, .3);

    }
  }
  &-card {
    margin: 20px auto;
    width: 335px;
    height: 405px;
    background: rgba(37, 51, 65, 0.6);
    border: 0.5px solid rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    border-radius: 16px;
    img {
      display: inline-block;
      width: 311px;
      height: 311px;
      padding-top: 10px;

    }
    &-information {
      margin: 5px auto;
      width: 305px;
      display: flex;
      align-items: center;
      justify-content: space-between;
       div {
         display: inline-block;
         .btn {
           width: 128px;
           height: 40px;
           background: #29BCCF;
           border-radius: 50px;
           line-height: 40px;
           color: #F9FBFC;
           font-size: 16px;
         }
       }
     .left {
       text-align: left;
     }
    }

  }

}

</style>
