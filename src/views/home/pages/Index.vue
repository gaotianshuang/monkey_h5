<template>
    <div class="wrap">
      <template>
      <div class="wrap-tittle" :class="{'marginT30':homeData.user_status===1}">
        <span >元宇宙数字藏品-第三期</span>
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
          <p class="number">4121</p>
          <p class="cont">项目售出总数</p>
        </div>
        <div>
          <p class="number">¥80.2</p>
          <p class="cont">当前价格</p>
        </div>
      </div>
      <div class="wrap-card" v-for="(item,index) in ListData.period_list" :key="index">
        <img :src="item.cover_url"/>
        <div class="wrap-card-information">
          <div class="left">
            <p>{{item.name}}</p>
            <p class="opacity5">已售出：{{item.sold_sku_count}}/{{item.sku_count}}</p>
          </div>
          <div class="right">
            <div class="btndisable" v-if="item.PeriodStatus ===1">未开始</div>
            <div class="btn" v-if="item.PeriodStatus ===2"  @click="handleCollection(item)">立即收藏</div>
            <div class="btndisable" v-if="item.PeriodStatus ===3">已售罄</div>
          </div>
        </div>
      </div>
    </template>
      <div style="padding-bottom: 80px" v-if="homeData.user_status===1">
          <Popup></Popup>
      </div>
      <Card :cardShow="cardShow" :periodInfo="periodInfo"  :periodID="periodID" @close="handleCollection"></Card>
    </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck
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
    const homeData = ref<any>({})
    const ListData = ref<any>({})
    const periodInfo = ref<any>({})
    const periodID = ref<number>(0)
    const getHomeData = async () => {
      try {
        // eslint-disable-next-line no-undef
        const result = await Api.home.getUserDetail()
        homeData.value = result?.data
        console.log(homeData.value, '232321')
      } catch (err) {
        console.log(err, 'err')
      }
    }
    const getList = async () => {
      try {
        // eslint-disable-next-line no-undef
        const result = await Api.home.getList()
        ListData.value = result?.data
        console.log(ListData.value, 'ListData')
      } catch (err) {
        console.log(err, 'err')
      }
    }
    getList()
    getHomeData()
    const getCardInfo = async (flag:boolean, id: number) => {
      try {
        // eslint-disable-next-line no-undef
        const params = {
          period_id: id,
          need_sku_limit: flag
        }
        //@ts-ignore
        const result = await Api.home.getOrder(params)
        console.log(result, '232321')
        periodInfo.value = result?.data
      } catch (err) {
        console.log(err, 'err')
      }
    }
    const textChange = () => {
      return new Promise<string>(resolve => {
        setTimeout(() => {
          resolve('Home')
        }, 3000)
      })
    }
    const handleCollection = (item:any) => {
      cardShow.value = !cardShow.value
      if (item && item.period_id) {
        periodID.value = item.period_id
        getCardInfo(true, item.period_id)
      }
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
      getHomeData,
      homeData,
      ListData,
      periodInfo,
      periodID
    }
  }
})
</script>

<style lang="less" scoped>
.wrap{
  width: 100%;
  margin: 0 auto;
  text-align: center;
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
    .number{
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
    }
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
         .btndisable{
           color: rgba(249, 251, 252, .5);
           font-weight: 500;
           font-size: 16px;
           margin-right: 5px;

         }
       }
     .left {
       text-align: left;
       p {
         font-weight: 500;
         font-size: 15px;
       }
     }
      .opacity5{
        opacity: 0.5;
        font-weight: 300!important;
      }
    }

  }
  .marginT30{
    margin-top: 30px;
  }

}

</style>
