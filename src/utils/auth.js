import Cookies from 'js-cookie'
//取token 名字
const TokenKey = 'vue_admin_template_token'
//取 userInfo 名字
const UserInfo = 'vue_admin_userInfo'

//获取token
export function getToken() {
  return Cookies.get(TokenKey)
}
//设置token
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
//删除token
export function removeToken() {
  return Cookies.remove(TokenKey)
}
//获取用户信息
export function getUserInfo() {
  return Cookies.get(UserInfo)
}
//存储用户信息
export function setUserInfo(Info) {
  return Cookies.set(UserInfo, Info)
}
//删除用户信息
export function removeUserInfo() {
  return Cookies.remove(UserInfo)
}
