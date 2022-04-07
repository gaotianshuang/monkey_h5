export default {
  home: [
    { name: 'getUserDetail', method: 'get', url: '/user/detail', header: null }, // 首页列表获取用户信息
    {
      name: 'updateIdentify',
      method: 'post',
      url: '/user/identify/',
      header: null
    }, // 提交用户信息
    {
      name: 'getReport',
      method: 'post',
      url: '/sms/report/',
      header: null
    }, // 获取验证码
    {
      name: 'getList',
      method: 'get',
      url: '/period/list/',
      header: null
    }, // 获取列表,
    {
      name: 'getInfo',
      method: 'get',
      url: '/business/info',
      header: null

    },
    {
      name: 'getOrder',
      method: 'post',
      url: '/order/ping/',
      header: null
    },
    {
      name: 'saveOrder',
      method: 'post',
      url: '/order/lock',
      header: null
    }
  ]
}
