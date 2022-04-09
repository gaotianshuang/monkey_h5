// @ts-nocheck

import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock(RegExp('/mock/user' + '.*'), 'get', (params: any) => {
  const citys = []
  citys.push(params)
  for (let i = 0; i < 10; i++) {
    const obj = {
      id: i + 1,
      city: Random.city(),
      color: Random.color()
    }
    citys.push(obj)
  }
  return {
    code: 200,
    data: {
      user: citys
    }
  }
})
