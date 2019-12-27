/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-24 14:47:06
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-27 14:32:09
 */

const isPlainObject = (action) => {
  if (typeof action !== 'object' || !action) {
      return false
  }
  return Object.getPrototypeOf(action) === Object.prototype
}

export default {
  isPlainObject
}