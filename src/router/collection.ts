const about = [
  {
    path: '/collection',
    name: 'collection',
    component: (): Promise<unknown> => {
      return import(/* webpackChunkName: "about" */ '../views/collection/pages/Index.vue')
    },
    meta: {
      title: '元素猴俱乐部',
      requiresAuth: false
    }
  },
  {
    path: '/collection-detail',
    name: 'collectionDetail',
    component: (): Promise<unknown> => {
      return import(/* webpackChunkName: "about" */ '../views/collection-detail/pages/Index.vue')
    },
    meta: {
      title: '元素猴俱乐部',
      requiresAuth: false
    }
  }
]

export default about
