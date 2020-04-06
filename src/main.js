// Vue.js config
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

// Plugins
import VueScheduler from 'v-calendar-scheduler'
Vue.use(VueScheduler, {
  minDate: null,
  maxDate: null,
  timeRange: [8, 18],
  initialView: 'week',
  availableViews: [],
  use12: true,
  showTimeMarker: false,
  showTodayButton: false
})

// Create Vue App
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')