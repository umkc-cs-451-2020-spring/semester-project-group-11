import Vue from 'vue'
import VueRouter from 'vue-router'
import Palette from '../views/Palette.vue'
import Scheduler from "../views/Scheduler";
import Professors from "../views/Professors";
import Home from "../views/Home";
import Schedules from "../views/Schedules";


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
    path: '/schedules',
    name: 'Schedules',
    component: Schedules
  },
  {
    path: '/professors',
    name: 'Professors',
    component: Professors
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
