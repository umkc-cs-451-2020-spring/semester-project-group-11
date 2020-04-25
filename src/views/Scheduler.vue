<template>
    <div id="page">
        <!--    MODAL    -->
        <app-modal v-if="$store.state.showModal" title="Add Course">
            <form @submit="create()">
                <input type="text" class="field" placeholder="Name">
                <dropdown class="field" :options="professorOptions"></dropdown>
                <input type="number" class="field" placeholder="start">'
                <input type="number" class="field" placeholder="length">
                <input type="text" class="field" placeholder="Room">
                <dropdown :options="dayOptions"></dropdown>
                <dropdown :options="booleanOptions"></dropdown>

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
                professors: [],
            }
        },
        computed: {
            professorOptions() {
                return this.professors.map(p => {
                    return {
                        name: p.get_fullname(),
                        code: p.get_id()
                    }
                })
            },
            dayOptions() {
                return [
                    {code: 'M', name: 'Monday'},
                    {code: 'T', name: 'Tuesday'},
                    {code: 'W', name: 'Wednesday'},
                    {code: 'R', name: 'Thursday'},
                    {code: 'F', name: 'Friday'},
                ]
            }
        },
        methods: {
            addCourse() {
                this.$store.commit('toggleModal')
            },
            create() {
                return
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
