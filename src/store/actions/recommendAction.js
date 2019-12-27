/*
 * @Description: 用了thunk中间件，请求数据在action做
 * @Autor: hrt
 * @Date: 2019-12-24 14:47:06
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-27 19:13:19
 */
import { changeBannerListUrl } from '../../api'

//直接设置data值
export const CHANGE_BANNER = 'home/recommend/CHANGE_BANNER';
export const changeBannerList = (data) => ({
  type: CHANGE_BANNER,
  axiosOptions: {
      url: changeBannerListUrl,
      data,
  }
});

export const CHANGE_ENTER_LOADING = 'home/recommend/CHANGE_ENTER_LOADING';
export const changeBannerLoading = (data) => ({
  type: CHANGE_BANNER,
  data
});

