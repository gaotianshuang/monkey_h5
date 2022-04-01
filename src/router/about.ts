const about = [
  {
    path: '/about',
    name: 'about',
    component: (): Promise<unknown> => {
      return import(/* webpackChunkName: "about" */ '../views/about/pages/Index.vue')
    },
    meta: {
      title: '个人中心',
      requiresAuth: false
    }
  }
]

export default about
