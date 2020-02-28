import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Palette from '../views/Palette.vue'
import FormFields from '../views/FormFields.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/palette',
    name: 'Palette',
    component: Palette
  },
  {
    path: '/form-fields',
    name: 'Form Fields',
    component: FormFields
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
