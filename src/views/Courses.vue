<template>
    <div id="page">
        <!--    MODAL    -->
        <app-modal v-if="$store.state.showModal" title="Add Course">
        </app-modal>

        <!--    PAGE HEAD    -->
        <div class="head">
            <h1>Courses</h1>
            <div class="button-group" style>
                <app-button @click="add()">ADD COURSE</app-button>
            </div>
        </div>

        <!--    CONTENT    -->

    </div>
</template>

<script>
    import AppButton from "../components/AppButton";
    import AppModal from "../components/AppModal";

    export default {
        name: 'Courses',
        components: {
            AppButton,
            AppModal
        },
        data() {
            return {
            }
        },
        methods: {
            add() {
                this.$store.commit('toggleModal')
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
