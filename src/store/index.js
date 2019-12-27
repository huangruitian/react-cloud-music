/*
 * @Description: redux数据仓库
 * @Autor: hrt
 * @Date: 2019-12-19 17:38:27
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-27 16:56:15
 */
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import axiosMiddleware from '../api/axiosMiddleware'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (reducer, composeEnhancers(
  applyMiddleware(thunk, axiosMiddleware)
));

// const store = createStore (reducer, applyMiddleware(thunk, axiosMiddleware));

export default store;