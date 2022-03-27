<template>
  <button type="button">{{myBtn}}</button>
</template>

<script lang="ts">
import { defineComponent, toRef } from '@vue/composition-api'

export default defineComponent({
  props: {
    btnText: {
      type: String,
      default: '按钮'
    }
  },
  setup (props) {
    const myBtn = toRef(props, 'btnText')

    return {
      myBtn
    }
  }
})
</script>
