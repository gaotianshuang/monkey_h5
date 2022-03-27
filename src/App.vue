<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
export default defineComponent({
  setup () {
    onMounted(() => {
      console.log(process.env.VUE_APP_API_URL)
      console.log('app mounted')
    })

    return {}
  }
})
</script>

<style lang="less">
@import url('./assets/css/base.css');
</style>
