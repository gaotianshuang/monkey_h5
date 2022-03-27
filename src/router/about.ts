const about = [
  {
    path: '/about',
    name: 'about',
    component: (): Promise<unknown> => {
      return import(/* webpackChunkName: "about" */ '../views/about/pages/Index.vue')
    },
    meta: {
      title: 'about',
      requiresAuth: false
    }
  }
]

export default about
