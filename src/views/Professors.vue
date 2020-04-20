<template>
    <div id="page">
        <!--    MODAL    -->
        <app-modal v-if="$store.state.showModal" title="Add Professor">
        </app-modal>

        <!--    PAGE HEAD    -->
        <div class="head">
            <h1>Professors</h1>
            <div class="button-group">
                <app-button @click="add()">ADD PROFESSOR</app-button>
            </div>
        </div>

        <!--    PAGE CONTENT    -->
    </div>
</template>

<script>
    import AppButton from "../components/AppButton";
    import AppModal from "../components/AppModal";

    export default {
        name: 'Professors',
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
                // Add a professor
                this.$store.commit('toggleModal')
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
