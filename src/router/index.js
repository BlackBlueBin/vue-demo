/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'

Vue.use(VueRouter)

export default new VueRouter({

  //注册应用中所有的路由
  routes : [
    {
      path : '/about',
      component: About
    },
    {
      path: '/home',
      component : Home
    },
    {
      path:'/',
      redirect: '/about'
    }
  ]
})
