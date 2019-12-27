/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-24 14:47:06
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-27 19:06:06
 */

import axios from 'axios';
axios.defaults.timeout = 20000         //请求不能超两分钟
axios.defaults.withCredentials = false //跨域请求时是否需要使用凭证, 一般为了安全需要
axios.defaults.baseURL = 'http://49.232.8.186:3000';

const fetch = ({
  method = 'get',
  url,
  data,
  isFormData = false, //发送json的数据当需要formData的时候设置false
  isImgType = false   //请求图片类型, 要加再说
}) => {

  //需要token吗？
  // const token = localStorage.getItem("token")

  //后端一般要求加上的东西
  const commonHeader = {
    // 'webtype':"API",
    // "token": token,
    // "source": window.location.origin,
    'Content-Type': isFormData ? 'application/x-www-form-urlencoded;charset=UTF-8' : 'application/json;charset=UTF-8'
  }

  const options = {
    params: data,
    // headers: commonHeader,
  }

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, options)
    case 'delete':
      return axios.delete(url, {
        data: data,
      })
    case 'post':
      // data = isFormData ? qs.stringify(data, { allowDots: true }) : data // isFormData格式要序列化一下？
      return axios.post(url, data, {
        headers: commonHeader,
      })
    case 'put':
      return axios.put(url, data)
    case 'patch':
      return axios.patch(url, data)
    default:
      return axios(options)
  }
}

export const request = (options) => {
  //这里可以做些请求后的处理
  return fetch(options).then(({statusText, status, headers, data}) => {
    //这里要 Promise.resolve，不然中间件会报错？
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      headers,
      data,
    })
  }).catch((error) => {
    return Promise.reject({
      success: false,
      statusCode : 600,
      message: 'Network Error',
    })
  })
}