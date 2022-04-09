const about = [
  {
    path: '/about',
    name: 'about',
    component: (): Promise<unknown> => {
      return import(/* webpackChunkName: "about" */ '../views/about/pages/Index.vue')
    },
    meta: {
      title: '元素猴俱乐部',
      requiresAuth: false
    }
  }
]

export default about
