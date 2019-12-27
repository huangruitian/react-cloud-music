/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-19 11:29:00
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-27 12:34:33
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import './style.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
