<template>
  <div id="app">
      <van-tabbar v-model="active" @change="tabChange">
<!--        <van-tabbar-item badge="3">-->
<!--          <span>主页</span>-->
<!--          <template #icon="props">-->
<!--            <img :src="props.active ? icon.active : icon.inactive" />-->
<!--          </template>-->
<!--        </van-tabbar-item>-->
        <van-tabbar-item icon="home-o">主页</van-tabbar-item>
        <van-tabbar-item icon="like-o">收藏</van-tabbar-item>
        <van-tabbar-item icon="contact">个人信息</van-tabbar-item>
      </van-tabbar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
const PATH_MAP = ['/', '/collection', '/about']
export default defineComponent({
  setup (props, ctx) {
    const active = ref(0)
    const icon = {
      active: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactive: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-inactive.png'
    }
    const tabChange = (active:any) => {
      console.log(active)
      ctx.root.$router
        .replace({
          path: PATH_MAP[active]
        })
    }
    onMounted(() => {
      console.log(process.env.VUE_APP_API_URL)
      console.log('app mounted')
    })

    return {
      icon,
      active,
      tabChange
    }
  }
})
</script>

<style lang="less">
@import url('./assets/css/base.css');
#app {
  background: rgba(0, 0, 0, .9);
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 828PX;
  color: #F5F8FA;
}
.van-tabbar--fixed{
  background-color: rgba(37, 51, 65, 0.97);
  height: 1.68rem;
  width: 100%;
  border-radius: 30px 30px 0px 0px ;
  .van-tabbar-item--active{
    background: rgba(37, 51, 65, 0.97);
    color: #29BCCF;
    border-radius: 30px 30px 0px 0px ;
  }
  ::after{
    border: none;
  }
}
.van-hairline--top-bottom::after {
  border: none;
}
</style>
