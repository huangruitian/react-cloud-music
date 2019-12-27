/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-12-24 14:47:06
 * @LastEditors  : hrt
 * @LastEditTime : 2019-12-25 18:13:09
 */
import { Redirect } from "react-router"
import React from 'react'
import Home from '../application/Home'           //公共组件
import Recommend from '../application/Recommend' //tab推荐
import Singers from '../application/Singers'     //tab歌手
import Rank from '../application/Rank'           //tab排行榜
import Album from '../application/Album'
import Singer from '../application/Singer'

export default [{
  path: '/',
  component: Home,
  routes: [
    {
      path: '/',
      exact: true,
      render: () => {
        return <Redirect to={"/recommend"} />
      }
    },
    {
      path: '/recommend',
      component: Recommend,
      routes: [
        {
          path: "/recommend/:id", 
          component: Album //专辑
        }
      ]
    },
    {
      path: "/singers",
      component: Singers,
      key: "singers",
      routes: [
        {
          path: "/singers/:id",
          component: Singer
        }
      ]
    },
    {
      path: "/rank/",
      component: Rank,
      key: "rank",
      routes: [
        {
          path: "/rank/:id",
          component: Album
        }
      ]
    },
  ]
}]