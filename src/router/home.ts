const home = [
  {
    path: '/',
    name: 'home',
    component: (): Promise<unknown> => {
      return import(/* webpackChunkName: "home" */ '../views/home/pages/Index.vue')
    },
    meta: {
      title: '首页',
      requiresAuth: false
    }
  }
]

export default home
