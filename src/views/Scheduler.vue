<template>
    <div id="page">
        <!--    MODAL    -->
        <app-modal v-if="$store.state.showModal" title="Add Course">
            <form @submit="create()">
                <input v-model="courseForm.name" type="text" class="field" placeholder="Name">
                <dropdown v-model="courseForm.professor" class="field" :options="professorOptions"></dropdown>
                <input v-model="courseForm.start" type="time" class="field" placeholder="Start">'
                <input v-model="courseForm.hours" type="number" class="field" placeholder="Hours">
                <input v-model="courseForm.minutes"  type="number" class="field" placeholder="Minutes">
                <input v-model="courseForm.room" type="text" class="field" placeholder="Room">
<!--                <dropdown v-model="courseForm.day" class="field" :options="$store.state.days" @input="selected()"></dropdown>-->

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
                courseForm: {
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
                console.log(this.courseForm)
            },
            selected() {
                console.log('hello')
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
