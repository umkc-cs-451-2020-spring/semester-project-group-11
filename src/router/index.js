import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Palette from '../views/Palette.vue'
import Scheduler from "../views/Scheduler";
import Professors from "../views/Professors";
import Courses from "../views/Courses";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/scheduler',
    name: 'Scheduler',
    component: Scheduler
  },
  {
    path: '/professors',
    name: 'Professors',
    component: Professors
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/palette',
    name: 'Palette',
    component: Palette
  },
]

const router = new VueRouter({
  routes
})

export default router
