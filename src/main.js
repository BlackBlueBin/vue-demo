// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
入口js: 创建vue实例
 */
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  el: '#app',
  components: {
    App
  }, //映射组件标签
  template: '<App/>', //指定需要渲染到页面的模板
  router //注册路由器
})
