/*
* @Author: zhanghongqia
* @email: 991034150@qq.com
* @Date: 2018-06-10 18:27:03
* @Description: 应用程序模板入口
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-11-27 14:25:41
*/

<style lang="scss" scoped>
  .aitectcare {
    position: relative;
    top: 40px;
    width: 100%;
  }
  #app{
    &::-webkit-scrollbar{
      width:0px;
      height: 0px;
    } 
  }
</style>

<template>
  <div id="app">    
   
    <!-- 路由跳转部分 -->
   <router-view class="router_container"></router-view>
 
  </div>
</template>
 
