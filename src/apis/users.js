// 引入封装的axios
import axios from '@/utils/myaxios.js'

// 添加登录的api方法
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
