/*
 * @Author: zhanghongqiao
 * @Date: 2018-05-29 21:07:35 
 * @Description: 路由配置
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-11-27 14:31:19
 */

import Vue from 'vue'
import Router from 'vue-router'
// 注册Router
Vue.use(Router)
// 配置项
import config from '@/config/base.config'
// 首页 
import Home from '@/containers/home/index.vue'
 
const routes = [
  {
    path: '*',
    redirect: `${config.routerPath}/home`,
    component: Home // 欢迎页
  },{
    path: `${config.routerPath}/home`,
    name: '首页',
    component: Home  
  }
]

export default new Router({
  mode: 'history',
  routes
})
