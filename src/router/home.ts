const home = [
  {
    path: '/',
    name: 'home',
    component: (): Promise<unknown> => {
      return import(/* webpackChunkName: "home" */ '../views/home/pages/Index.vue')
    },
    meta: {
      title: '元素猴俱乐部',
      requiresAuth: false
    }
  }
]

export default home
