const about = [
  {
    path: '/collection',
    name: 'collection',
    component: (): Promise<unknown> => {
      return import(/* webpackChunkName: "about" */ '../views/collection/pages/Index.vue')
    },
    meta: {
      title: 'collection',
      requiresAuth: false
    }
  }
]

export default about
