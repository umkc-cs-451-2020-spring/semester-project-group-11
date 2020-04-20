<template>
    <div id="page">
        <app-modal v-if="$store.state.showModal" title="Add Course">
            <form>
                <input type="text" class="field" placeholder="Username">
                <input type="password" class="field" placeholder="Password">
                <textarea class="field"></textarea>
                <div class="field">
                    <app-button type="submit">SUBMIT</app-button>
                </div>
            </form>
        </app-modal>

        <div class="head">
            <h1>Scheduler</h1>
            <div class="button-group" style>
                <div></div>
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

    export default {
        name: 'Scheduler',
        components: {
            AppButton,
            AppModal
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
                ]
            }
        },
        methods: {
            addCourse() {
                this.$store.commit('toggleModal')
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
</style>
