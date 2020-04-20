<template>
    <div id="page">
        <div class="head">
            <h1>Professors</h1>
            <div class="button-group" style>
                <div></div>
                <app-button @click="add()">ADD PROFESSOR</app-button>
            </div>
        </div>

        <!--    CONTENT    -->
    </div>
</template>

<script>
    import AppButton from "../components/AppButton";

    export default {
        name: 'Professors',
        components: {
            AppButton
        },
        data() {
            return {
            }
        },
        methods: {
            add() {
                // Add a professor
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
