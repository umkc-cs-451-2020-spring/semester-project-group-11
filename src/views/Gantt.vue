<template>
    <div id="page">
        <h1>Gantt</h1>
        <vue-scheduler></vue-scheduler>
    </div>
</template>

<script>

    import VueScheduler from 'v-calendar-scheduler'

    export default {
        name: 'Gantt',
        components: {
            VueScheduler
        },
        data() {
            return {}
        },
        methods: {
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
</style>
