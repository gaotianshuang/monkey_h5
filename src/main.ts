import 'babel-polyfill'
import promise from 'es6-promise'
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router'
import store from './store'
import './rem.js'
import { Button, Tabbar, TabbarItem, NavBar, Card, Popup, Form, Field, Checkbox, Image } from 'vant'

promise.polyfill()
Vue.use(VueCompositionAPI)
Vue.use(Button).use(Tabbar).use(TabbarItem).use(NavBar).use(Card).use(Popup).use(Form).use(Field).use(Checkbox).use(Image)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
