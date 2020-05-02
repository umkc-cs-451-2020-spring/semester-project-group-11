import Vue from 'vue'
import Vuex from 'vuex'
import Professor from "../models/Professor"
import Schedule from "../models/Schedule"
import moment from "moment"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModal: false,
    professors: [
        new Professor(1, 'Kendal', 'Bingahm', false)
    ],
    days: [
      {code: 'M', name: 'Monday', date: moment.utc([2018, 0, 1])},
      {code: 'T', name: 'Tuesday', date: moment.utc([2018, 0, 2]) },
      {code: 'W', name: 'Wednesday', date: moment.utc([2018, 0, 3])},
      {code: 'R', name: 'Thursday', date: moment.utc([2018, 0, 4])},
      {code: 'F', name: 'Friday', date: moment.utc([2018, 0, 5])},
    ],
    schedule: new Schedule(),
  },
  getters: {
    events (state) {
      state.schedule.courses.map( (course) => {
          console.log(course)
      })
    }
  },
  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal
    }
  },
  actions: {
  },
  modules: {
  }
})
