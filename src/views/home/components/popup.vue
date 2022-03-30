<template>
  <div class="popup">
    <div @click="showPopup">展示弹出层</div>
    <van-popup v-model="show" :overlay="true">内容</van-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, ref } from '@vue/composition-api'

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
    const showPopup = () => {
      show.value = true
    }
    return {
      myBtn,
      show,
      showPopup
    }
  }
})
</script>
<style lang="less" scoped>
.popup{
   height: 50px;
  padding-bottom: 40px;
  .van-popup {
    width: 311px;
    height: 480px;
    background: #253341;
    border-radius: 16px;
  }
}
</style>
