/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-27 10:49:10
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-27 19:13:31
 */
import { request } from '../api/request'

/**
 * 请求数据的中间件。利用中间件进行请求数据
 * @param {*} store  // 数据仓库 {dispatch, getState}
 * @param {*} next   // 下一个 dispatch
 * @param {*} action // action
 */
const axiosMiddleware = ({dispatch, getState}) => next => action => {
  const { type, axiosPayload } = action
  console.log('data', axiosPayload)
  // 发请求
  request(axiosPayload).then(({ data }) => {
    dispatch({type, data})
  }).catch((err) => {
    console.log('request error', err)
  })
  
  return next(action)
}

export default axiosMiddleware