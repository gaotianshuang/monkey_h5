const about = [
  {
    path: '/order-list',
    name: 'order',
    component: (): Promise<unknown> => {
      return import(/* webpackChunkName: "about" */ '../views/order/pages/Index.vue')
    },
    meta: {
      title: '元素猴俱乐部',
      requiresAuth: false
    }
  }
]

export default about
