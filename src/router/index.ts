import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

// 自动导入其他模块路由
const context = require.context('.', false, /\.ts$/)
let routerConfig: Array<RouteConfig> = []
console.log(context.keys())
context.keys().forEach(key => {
  if (key.includes('index')) return
  routerConfig = routerConfig.concat(context(key).default)
})
console.log(routerConfig)

const routes: Array<RouteConfig> = routerConfig

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
