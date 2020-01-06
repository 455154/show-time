import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index/index.vue'
import FullCourse from '../components/FullCourse/FullCourse.vue'
import Login from '../components/Login/login.vue'
import GareerGuidance from '../components/gareerGuidance/gareerGuidance.vue'

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
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/gareerGuidance',
    component: GareerGuidance
  }
]

const router = new VueRouter({
  routes
})

export default router
