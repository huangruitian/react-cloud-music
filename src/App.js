/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-19 11:29:00
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-27 16:25:38
 */
import React, { useEffect } from 'react';
import store from './store'
import { Provider } from "react-redux";
import Test from './Test'

function App() {
  return ( 
    <Provider store={store}>
       <Test />
    </Provider>
  );
}
export default App;

