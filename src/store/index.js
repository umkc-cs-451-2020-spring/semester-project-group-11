import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist"
import Professor from "../models/Professor"
import Schedule from "../models/Schedule"
import Course from "../models/Course";

Vue.use(Vuex)

const courseMilitaryTime = (time) => {
  let hours = Math.floor(time / 100).toString()
  let min = time.toString().slice(-2)
  return `${hours}:${min}`
}

export default new Vuex.Store({
  state: {
    professors: [],
    schedule: new Schedule(),
    violations: null,
    showModal: false,
    days: [
      {code: 'M', name: 'Monday', date: new Date('01 Jan 2018')},
      {code: 'T', name: 'Tuesday', date: new Date('02 Jan 2018')},
      {code: 'W', name: 'Wednesday', date: new Date('03 Jan 2018')},
      {code: 'R', name: 'Thursday', date: new Date('04 Jan 2018')},
      {code: 'F', name: 'Friday', date: new Date('05 Jan 2018')},
      {code: 'SA', name: 'Saturday', date: new Date('06 Jan 2018')},
      {code: 'SU', name: 'Sunday', date: new Date('07 Jan 2018')},
    ],
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
    },
    deleteCourse(state, courseID) {
      state.schedule.courses = state.schedule.courses.filter(course => course.courseid !== courseID)
    },
    updateViolations(state, newViolations) {
      state.violations = newViolations
    },
    removeViolations(state) {
      state.violations = null
    },
    deleteProfessor(state, id) {
      state.professors = state.professors.filter(professor => professor.id !== id)
      state.schedule.courses = state.schedule.courses.filter(course => course.professor.id !== id)
    },
    createProfessor(state, professor) {
      state.professors.push(professor)
    },
    updateProfessor(state, updatedProfessor) {
      state.professors = state.professors.map(professor => {
        if (professor.id === updatedProfessor.id)
          return updatedProfessor
        else
          return professor
      })
    },
    // Used everytime vuex persist gets the object
    // Allows data to have class
    bindDataClasses(state) {
      state.professors = state.professors.map((professor, index) => {
        return new Professor(index, professor.first, professor.last, professor.tenured, null)
      })
      state.schedule.courses = state.schedule.courses.map((course, index) => {
        return new Course(index, course.courseid, course.start, course.length, course.room, course.days)
      })
    }
  },
  actions: {
    getProfessor({state}, id) {
      return state.professors.filter(professor => professor.id === id)[0]
    }
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
