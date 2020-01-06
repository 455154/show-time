import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index/index.vue'
import GetPromoted from '../components/GetPromoted/getPromoted.vue'
import FullCourse from '../components/FullCourse/FullCourse.vue'
import Login from '../components/Login/login.vue'
import publicClass from '../components/PublicClass/publicClass.vue'
import Introduction from '../components/PublicClass/Introduction.vue'
import Directory from '../components/PublicClass/Directory.vue'
import Operation from '../components/PublicClass/Operation.vue'
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
    path: '/getPromoted',
    component: GetPromoted
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
    path: '/publicClass',
    redirect: 'publicClass/ClassIntroduction',
    component: publicClass,
    children: [
      { path: 'ClassIntroduction', component: Introduction },
      { path: 'ClassDirectory', component: Directory },
      { path: 'ClassOperation', component: Operation }
    ]
  },
  { path: '/gareerGuidance', component: GareerGuidance }
]

const router = new VueRouter({
  routes
})
export default router
