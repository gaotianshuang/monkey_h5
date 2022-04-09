<template>
    <div class="wrap">
      <template>
        <div class="wrap-tittle">
          <span>元宇宙数字藏品-元气猴</span>
        </div>

        <div class="wrap-tips">
          <span>国家链认证</span>
          <span>限定</span>
          <span>收藏品</span>
        </div>

        <div class="wrap-instructions">
          <p>国内首批合法合规，互联网人自己的数字收藏NFT</p>
          <p>国家文昌链铸造，确保唯一性和收藏价值</p>
        </div>

        <van-image id="main-figure" width="319" height="319" :src="mainFigureSrc"/>

        <van-button class="btn">立即收藏元气猴</van-button>
      </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      mainFigureSrc: require('@/assets/entry/main_figure.png')
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
}

.btn {
  height: 40px;
  background: #29BCCF;
  border-radius: 50px;
  line-height: 40px;
  color: #F9FBFC;
  font-size: 16px;
}

#main-figure {
  margin-bottom: 28px;
}
</style>
