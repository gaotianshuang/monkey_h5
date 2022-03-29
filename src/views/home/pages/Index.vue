<template>
  <div class="wrap">
    <div class="wrap-tittle">
      <span>元宇宙数字藏品-第三期</span>
    </div>
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
.wrap{
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

}

</style>
