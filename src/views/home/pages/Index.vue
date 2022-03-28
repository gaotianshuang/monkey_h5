<template>
  <div class="wrap">
    <h1>{{text}}</h1>
    <TestButton :btnText="btnText"></TestButton>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import TestButton from '../components/TestButton.vue'
import api from '@/services/index'
export default defineComponent({
  components: {
    TestButton

    // Button
  },
  setup () {
    console.log('setup')
    const text = ref<string>('')
    const btnText = ref<string>('测试')

    const textChange = () => {
      return new Promise<string>(resolve => {
        setTimeout(() => {
          resolve('Home')
        }, 3000)
      })
    }

    onMounted(async () => {
      // const res: any = await api.testAxios()
      // console.log(res.data.title)
      text.value = await textChange()
    })

    return {
      text,
      btnText
    }
  }
})
</script>

<style lang="less" scoped>
h1 {
    font-size: 18px;
}
</style>
