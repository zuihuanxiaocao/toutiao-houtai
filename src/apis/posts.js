import axios from '@utils/myaxios.js'

export const getpostList = (params) => {
  return axios({
    url: '/post',
    params
  })
}
