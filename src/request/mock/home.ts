import Mock from 'mockjs'

const Random = Mock.Random

// 模拟正常请求
// mock需要给三个参数,url(与axios请求是传的url一致,我这个是本地启动的项目就直接用本地域名了)
// 请求类型: get post...其他看文档
// 数据处理函数,函数需要return数据
Mock.mock('/user/detail', 'get', (params:any) => {
  return {
    code: 200,
    data: {
      uid: 1,
      user_status: 1// 1未认证 2已认证
    }
  }
})
Mock.mock('/user/identify/', 'post', (params:any) => {
  return {
    code: 200,
    data: {
      msg: '更新成功',
      uid: 2222,
      success: true
    }
  }
})
Mock.mock('/sms/report/', 'post', (params:any) => {
  return {
    code: 200,
    data: {
      msg: '获取成功',
      uid: 2222,
      success: true
    }
  }
})
Mock.mock('/period/list/', 'get', (params:any) => {
  return {
    code: 200,
    data: {
      msg: '获取成功',
      uid: 2222,
      period_list: [
        {
          period_id: 1,
          name: '第1期',
          sku_count: 2000,
          sold_sku_count: 500,
          PeriodStatus: 1, // 1未开始 //售卖中  2  //已售罄 3
          cover_url: require('../../assets/home/header@2x.png')
        },
        {
          period_id: 1,
          name: '第1期',
          sku_count: 2000,
          sold_sku_count: 500,
          PeriodStatus: 2, // 1未开始 //售卖中  2  //已售罄 3
          cover_url: require('../../assets/home/header@2x.png')
        },
        {
          period_id: 1,
          name: '第1期',
          sku_count: 2000,
          sold_sku_count: 500,
          PeriodStatus: 3, // 1未开始 //售卖中  2  //已售罄 3
          cover_url: require('../../assets/home/header@2x.png')
        }
      ]
    }
  }
})

Mock.mock('/order/ping/', 'post', (params:any) => {
  return {
    code: 200,
    data: {
      msg: '获取成功',
      uid: 2222,
      sku_price: 1,
      sku_limit: 2
    }
  }
})
Mock.mock('/order/lock', 'post', (params:any) => {
  return {
    code: 200,
    data: {
      msg: '获取成功',
      uid: 2222,
      sku_price: 3,
      sku_limit: 2,
      total_price: 22,
      sku_count: 4,
      wx_pay: {
        timestamp: 1,
        app_id: 2,
        pay_sign: 3,
        sign_type: 4,
        package: 5,
        nonce_str: 6,
        pay_order_id: 7
      }
    }
  }
})
