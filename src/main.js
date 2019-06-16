// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
入口js: 创建vue实例
 */
import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
