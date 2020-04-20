<template>
    <div id="page">
        <div class="head">
            <h1>Courses</h1>
            <div class="button-group" style>
                <div></div>
                <app-button @click="add()">ADD COURSE</app-button>
            </div>
        </div>

        <!--    CONTENT    -->

    </div>
</template>

<script>
    import AppButton from "../components/AppButton";

    export default {
        name: 'Courses',
        components: {
            AppButton
        },
        data() {
            return {
            }
        },
        methods: {
            add() {
                // adding a course
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
