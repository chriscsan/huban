// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';

global.PROXY_API = 'https://bird.ioliu.cn/v1?url=';



import './assets/css/reset.css'
import './assets/css/common.scss'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
/* eslint-disable no-new */
var vm = new Vue({
  el: '#root',
  router,
  components: { App },
  template: '<App/>'
})

console.log(vm);
