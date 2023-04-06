import request from '@/utils/request'

//查询相关人员
export function getCorrelationEmployee(params) {
    return request({
      url: '/repair/correlationEmployee', //请求路径
      method: 'get',  //请求类型 get post
      params  //参数  get 参数 params  post 参数 data
    })
  }

  //相关科室
  export function getCorrelationDept(params) {
    return request({
      url: '/repair/correlationDept', //请求路径
      method: 'get',  //请求类型 get post
      params  //参数  get 参数 params  post 参数 data
    })
  }

  //申请维修提交
  export function getapplyRepair(data) {
    return request({
      url: '/repair/applyRepair', //请求路径
      method: 'post',  //请求类型 get post
      data  //参数  get 参数 params  post 参数 data
    })
  }