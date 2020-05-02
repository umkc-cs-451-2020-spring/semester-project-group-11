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
        ></vue-scheduler>
    </div>
</template>

<script>
    import AppButton from "../components/AppButton";
    import AppModal from "../components/AppModal";
    import Dropdown from "../components/Dropdown";

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
                        date: new Date()
                    },
                    {
                        date: new Date(),
                        startTime: "13:00",
                        endTime: "15:00",
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
                    start: this.$store.state.days[0].date.hours(8).format('HH:mm:ss'),
                    hours: 1,
                    minutes: 15,
                    room: 'Haag 201',
                    day: this.$store.state.days[0]
            }
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
                const professor = this.$store.state.professors.filter( (p) => p.id = this.form.code)[0]
                const time = 800 // from datetime
                const length = 115 // from hours min
                this.$store.schedule.add_course(
                    this.form.id,
                    professor,
                    time,
                    length,
                    this.form.room,
                    [this.form.day.code]
                )
            },
            selected() {
                console.log('hello')
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
