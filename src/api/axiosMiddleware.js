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

// type: CHANGE_BANNER,
// options: {
//     url: getBannerUrl,
//     method: "get",
//     data:payload, //请求数据的data
// }

const axiosMiddleware = ({dispatch, getState}) => next => action => {
  //这里一定要提前停止，不然前面的dispatch会冲突
  if(!action || !action.axiosOptions || !action.axiosOptions.url){
    return next(action)
  }

  //在这里可以统一处理加载逻辑等等。。。。
  const { type, axiosOptions } = action
  request(axiosOptions).then(({data}) => {
    console.log({type, data})
    dispatch({type, data})
  }).catch((err) => {
    console.log(`网络错误：${err}`)
  })
}

export default axiosMiddleware