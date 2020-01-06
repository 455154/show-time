import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index/index.vue'
import PublicClass from '../components/publicClass/publicClass.vue'
import GetPromoted from '../components/getPromoted/getPromoted.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/publicClass',
    component: PublicClass
  },
  {
    path: '/getPromoted',
    component: GetPromoted
  }
]

const router = new VueRouter({
  routes
})

export default router
