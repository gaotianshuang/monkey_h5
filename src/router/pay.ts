const pay = [
  {
    path: '/pay',
    name: 'pay',
    component: (): Promise<unknown> => {
      return import(/* webpackChunkName: "about" */ '../views/pay/pages/Index.vue')
    },
    meta: {
      title: 'about',
      requiresAuth: false
    }
  }
]

export default pay
