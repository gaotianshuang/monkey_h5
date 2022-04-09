import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false, // 是否加载中
    collectionDetailToShow: {}
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    setCollectionDetailToShow (state, payload) {
      state.collectionDetailToShow = payload
    }
  },
  actions: {},
  modules: {}
})
