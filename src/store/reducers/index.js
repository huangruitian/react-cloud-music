/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-19 17:38:36
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-27 10:55:29
 */
import { combineReducers } from 'redux-immutable';
import recommend from './recommendReducer';

// 之后开发具体功能模块的时候添加 reducer
export default combineReducers ({
    recommend
});