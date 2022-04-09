<template>
  <div class="wrap">
    <PersonCard />
    <ActionList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PersonCard from '../components/PersonCard/Index.vue'
import ActionList from '../components/ActionList/Index.vue'

export default Vue.extend({
  components: {
    PersonCard,
    ActionList
  }
})
</script>

<style lang="less" scoped>
.wrap{
  width: 100%;
  height: 100vh;

  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
}
</style>
