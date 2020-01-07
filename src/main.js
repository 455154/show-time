import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局CSS
import './assets/css/global.css'
// 字体库
import './assets/font/iconfont.css'
// ui组件库
import './plugins/element.js'
// header
import myheader from './components/myCommon/header.vue'
import myfooter from './components/myCommon/footer.vue'
import mylist from './components/myCommon/list.vue'
import mysearch from './components/myCommon/search.vue'
import mypaging from './components/myCommon/paging.vue'
Vue.component('my-header', myheader)
Vue.component('my-footer', myfooter)
Vue.component('my-search', mysearch)
Vue.component('my-list', mylist)
Vue.component('my-paging', mypaging)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
