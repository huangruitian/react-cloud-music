/*
 * @Description: 用了thunk中间件，请求数据在action做
 * @Autor: hrt
 * @Date: 2019-12-24 14:47:06
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-27 19:13:19
 */


const getBannerUrl =  "/banner";
export const CHANGE_BANNER = 'home/recommend/CHANGE_BANNER';
export const changeBannerList = (data) => ({
  type: CHANGE_BANNER,
  axiosPayload: {
      url: getBannerUrl,
      method: "get",
      data, //请求数据的data
  }
});