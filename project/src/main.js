// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// axios得一些全局默认设置
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://www.wwtliu.com';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.interceptors.request.use(function (config) {
  //在请求发送之前做一些事
  // console.log(config)
  return config;
}, function (error) {
  //当出现请求错误是做一些事
  return Promise.reject(error);
});

Axios.interceptors.response.use(function (response) {
  //对返回的数据进行一些处理
  if (response.data.success) {
    return Promise.reject(res);
  }
  return Promise.resolve(response.data);
}, function (error) {
  //对返回的错误进行一些处理
  return Promise.reject(error);
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
