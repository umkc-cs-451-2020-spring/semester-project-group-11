<template>
    <div id="page">
        <!--    MODAL    -->
        <app-modal v-if="$store.state.showModal" title="Add Course">
            <form @submit="create()">
                <input v-model="form.name" type="text" class="field" placeholder="Name">
                <dropdown v-model="form.professor" class="field" :options="professorOptions"></dropdown>
                <input v-model="form.start" type="time" class="field" placeholder="Start">'
                <input v-model="form.hours" type="number" class="field" placeholder="Hours">
                <input v-model="form.minutes"  type="number" class="field" placeholder="Minutes">
                <input v-model="form.room" type="text" class="field" placeholder="Room">
<!--                <dropdown v-model="form.day" class="field" :options="$store.state.days" @input="selected()"></dropdown>-->

                <div class="button-group">
                    <app-button @click="toggleModal()">CANCEL</app-button>
                    <app-button type="submit">SUBMIT</app-button>
                </div>
            </form>
        </app-modal>

        <div class="head">
            <h1>Scheduler</h1>
            <div class="button-group">
                <app-button>SAVE SCHEDULE</app-button>
                <app-button @click="addCourse">ADD COURSE</app-button>
            </div>
        </div>
        <vue-scheduler
            :events="events"
            :disable-dialog="true"
            event-display="name"
        ></vue-scheduler>
    </div>
</template>

<script>
    import AppButton from "../components/AppButton";
    import AppModal from "../components/AppModal";
    import Dropdown from "../components/Dropdown";
    import moment from "moment";

    export default {
        name: 'Scheduler',
        components: {
            AppButton,
            AppModal,
            Dropdown
        },
        data() {
            return {
                events: [
                    {
                        date: new Date('01 Jan 2018'),
                        startTime: "13:00",
                        endTime: "15:00",
                        name: 'Databases'
                    },
                    {
                        date: new Date('03 Jan 2018'),
                        startTime: "13:00",
                        endTime: "15:00",
                        name: 'Databases'
                    }
                ],
                form: {
                    name: null,
                    professor: null,
                    start: null,
                    hours: null,
                    minutes: null,
                    room: null,
                    day: null
                }
            }
        },
        mounted() {
            this.form = {
                name: 'Databases',
                    professor: this.professorOptions[0],
                    start: moment(this.$store.state.days[0].date).hours(8).format('HH:mm:ss'),
                    hours: 1,
                    minutes: 15,
                    room: 'Haag 201',
                    day: this.$store.state.days[0]
            }

            this.events.push({
                date: new Date('05 Jan 2018'),
                startTime: "13:00",
                endTime: "15:00",
                name: 'Databases'
            })
        },
        computed: {
            professorOptions() {
                return this.$store.state.professors.map(p => {
                    return {
                        name: p.get_fullname(),
                        code: p.get_id()
                    }
                })
            }
        },
        methods: {
            addCourse() {
                this.$store.commit('toggleModal')
            },
            create() {
                // Add Event
                const hourStart = new Date(`01 Jan 2018 ${this.form.start}`).getHours() // from datetime
                const minutes = this.form.hours * 60 + this.form.minutes// from hours min
                this.events.push({
                    date: this.dayByCode(this.form.day.code).date,
                    startTime: hourStart,
                    endTime: hourStart + (minutes / 60)
                })

                // Add to Schedule
                const professor = this.$store.state.professors.filter( (p) => p.id === this.form.code)[0]
                const start = hourStart * 10
                const length = this.form.hours * 10 + this.form.minutes
                this.$store.state.schedule.add_course(
                    this.form.id,
                    professor,
                    start,
                    length,
                    this.form.room,
                    [this.form.day.code]
                )
            },
            selected() {
                console.log('hello')
            },
            dayByCode(code) {
                return this.$store.state.days.filter(day => {
                    return day.code === code
                })[0]
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
