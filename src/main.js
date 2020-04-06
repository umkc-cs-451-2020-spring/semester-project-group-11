// Vue.js config
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

// Plugins
import VueScheduler from 'v-calendar-scheduler'
import 'v-calendar-scheduler/lib/main.css'
Vue.use(VueScheduler)

// Create Vue App
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')