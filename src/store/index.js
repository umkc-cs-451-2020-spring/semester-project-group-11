import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist"
import Professor from "../models/Professor"
import Schedule from "../models/Schedule"

Vue.use(Vuex)

const courseMilitaryTime = (time) => {
  let hours = Math.floor(time / 100).toString()
  let min = time.toString().slice(-2)
  return `${hours}:${min}`
}

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
      {code: 'SA', name: 'Saturday', date: new Date('06 Jan 2018')},
      {code: 'SU', name: 'Sunday', date: new Date('07 Jan 2018')},
    ],
    schedule: new Schedule(),
  },
  getters: {
    events (state) {
      let events = []

      state.schedule.courses.forEach( (course) => {
        let days = state.days.filter(day => course.days.includes(day.code))
        days.forEach(day => {
          let startTime = courseMilitaryTime(course.start)
          let endTime = courseMilitaryTime(course.end)

          events.push({
            name: course.courseid,
            date: day.date,
            startTime,
            endTime
          })
        })

      })

      return events
    }
  },
  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal
    },
    deleteSchedule(state) {
      state.schedule = new Schedule()
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
