/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-24 14:47:06
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-27 19:12:57
 */
import * as actionTypes from '../actions/recommendAction';
import { fromJS } from 'immutable';

const defaultState = {
  bannerList: [],
  recommendList: [],
  enterLoading: true
}
const clearState = {
  
}
// 在中间件直接取出data放进来
export default (state = defaultState, {type, data}) => {
  switch(type) {
    case actionTypes.CHANGE_BANNER:
      return {
        ...state,
        bannerList:data,
      };
    // case actionTypes.CHANGE_RECOMMEND_LIST:
    //   return state.set('recommendList', data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return {
        ...state,
        enterLoading:data,
      };;
    default:
      return state;
  }
}