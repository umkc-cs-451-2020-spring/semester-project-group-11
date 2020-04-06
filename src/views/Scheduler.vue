<template>
    <div id="page">
        <h1>Scheduler</h1>
        <vue-scheduler
            :events="events"
        ></vue-scheduler>
    </div>
</template>

<script>


    export default {
        name: 'Scheduler',
        components: {
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
