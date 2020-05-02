import Vue from 'vue'
import VueRouter from 'vue-router'
import Palette from '../views/Palette.vue'
import Scheduler from "../views/Scheduler";
import Professors from "../views/Professors";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Scheduler',
    component: Scheduler
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
