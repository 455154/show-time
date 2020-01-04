import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index/index.vue'
import FullCourse from '../components/FullCourse/FullCourse.vue'

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
    path: '/fullCourse',
    component: FullCourse
  }
]

const router = new VueRouter({
  routes
})

export default router
