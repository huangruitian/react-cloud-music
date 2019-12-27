/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-27 16:25:08
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-27 19:10:38
 */
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeBannerList } from './store/actions/recommendAction'
import { request } from './api/request'

function Test({bannerList, getBannerList}) {
  console.log('bannerList', bannerList)
  console.log('getBannerList', getBannerList)
  useEffect(() => {
    // 这个方法调用了下面的request
    getBannerList();

    // request({
    //   url:'/banner',
    // }).then((res) => {
    //   console.log(res)
    // })
    
  }, [])
  return (
    <div>
       111111
    </div>
  )
}

const mapStateToProps = (state) => ({
  bannerList:state.getIn(["player", "fullScreen"]),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getBannerList:changeBannerList,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)
