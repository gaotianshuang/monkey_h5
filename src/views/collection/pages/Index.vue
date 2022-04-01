<template>
  <div class="wrap">
    <Empty />
  </div>
</template>

<script lang="ts">
import Empty from '../components/Empty/Index.vue'
export default {
  components: {
    Empty
  }
}
</script>

<style lang="less" scoped>
.wrap{
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
</style>
