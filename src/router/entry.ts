// 投放页
const entry = [
  {
    path: '/entry',
    name: 'entry',
    component: (): Promise<unknown> => {
      return import(/* webpackChunkName: "about" */ '../views/entry/pages/Index.vue')
    },
    meta: {
      title: '元素猴俱乐部',
      requiresAuth: false
    }
  }
]

export default entry
