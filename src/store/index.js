import Vue from 'vue'
import Vuex from 'vuex'
import Professor from "../models/Professor";
import Schedule from "../models/Schedule";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModal: false,
    professors: [
        new Professor(1, 'Kendal', 'Bingahm', false)
    ],
    days: [
      {code: 'M', name: 'Monday'},
      {code: 'T', name: 'Tuesday'},
      {code: 'W', name: 'Wednesday'},
      {code: 'R', name: 'Thursday'},
      {code: 'F', name: 'Friday'},
    ],
    schedule: new Schedule(),
    startWeek: new Date(),
    endWeek: new Date(),
  },
  getters: {
    events (state) {
      state.schedule.couses.map( (course) => {

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
