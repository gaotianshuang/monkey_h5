<template>
  <div id="app">
    <div id="nav">
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
      <van-tabbar v-model="active">
        <van-tabbar-item badge="3">
          <span>自定义</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
export default defineComponent({
  setup () {
    const active = ref(0)
    const icon = {
      active: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-active.png',
      inactive: 'https://cdn.jsdelivr.net/npm/@vant/assets/user-inactive.png'
    }
    onMounted(() => {
      console.log(process.env.VUE_APP_API_URL)
      console.log('app mounted')
    })

    return {
      icon,
      active
    }
  }
})
</script>

<style lang="less">
@import url('./assets/css/base.css');
</style>
