import Vue from 'vue'
import Vuex from 'vuex'
import Professor from "../models/Professor"
import Schedule from "../models/Schedule"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModal: false,
    professors: [
        new Professor(1, 'Kendal', 'Bingahm', false)
    ],
    days: [
      {code: 'M', name: 'Monday', date: new Date('01 Jan 2018')},
      {code: 'T', name: 'Tuesday', date: new Date('02 Jan 2018')},
      {code: 'W', name: 'Wednesday', date: new Date('03 Jan 2018')},
      {code: 'R', name: 'Thursday', date: new Date('04 Jan 2018')},
      {code: 'F', name: 'Friday', date: new Date('05 Jan 2018')},
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
