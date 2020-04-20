<template>
    <div id="page">
        <div class="head">
            <h1>Scheduler</h1>
            <div class="button-group">
                <div></div>
                <app-button>ADD COURSE</app-button>
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

    export default {
        name: 'Scheduler',
        components: {
            AppButton
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
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
</style>
