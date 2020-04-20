<template>
    <div id="page">
        <div class="head">
            <h1>Courses</h1>
            <div class="button-group" style>
                <div></div>
                <app-button>ADD COURSE</app-button>
            </div>
        </div>
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
        }
    }
</script>

<style lang="scss">
</style>
