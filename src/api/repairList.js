import request from '@/utils/request'
export function getRepairList(params) {
    return request({
      url: '/repair/selectDutyEmployee', //请求路径
      method: 'get',  //请求类型 get post
      params  //参数  get 参数 params  post 参数 data
    })
  }