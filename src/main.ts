// @ts-nocheck
import 'babel-polyfill'
import promise from 'es6-promise'
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router'
import store from './store'
import Vconsole from 'vconsole'

import { Button, Tabbar, TabbarItem, NavBar, Card, Popup, Form, Field, Checkbox, Radio, RadioGroup, Dialog } from 'vant'// 全局注册api接口对象
const vconsole = new Vconsole()
import './rem.js'
import { Button, Tabbar, TabbarItem, NavBar, Card, Popup, Form, Field, Checkbox, Image, Loading, Radio, RadioGroup, List, Cell, Tab, Tabs, Tag, Icon } from 'vant' // 全局注册api接口对象

promise.polyfill()
Vue.use(vconsole)
Vue.use(VueCompositionAPI)
Vue.use(Button).use(Tabbar).use(TabbarItem).use(NavBar).use(Card).use(Popup).use(Form).use(Field).use(Checkbox).use(Image).use(Loading).use(RadioGroup).use(Radio).use(List).use(Cell).use(Tab).use(Tabs).use(Tag).use(Icon)
Vue.config.productionTip = false
// require('@/components/index.ts') // 全局注册公共组件
require('@/request/mock') // 模拟普通请求状态的mock

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
