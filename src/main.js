import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局CSS
import './assets/css/global.css'
// 字体库
import './assets/font/iconfont.css'
// header
import myheader from './components/myCommon/header.vue'
import myfooter from './components/myCommon/footer.vue'
Vue.component('my-header', myheader)
Vue.component('my-footer', myfooter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
