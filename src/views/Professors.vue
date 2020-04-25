<template>
    <div id="page">
        <!--    MODAL    -->
        <app-modal v-if="$store.state.showModal" title="Add Professor">
            <form @submit="create()">
                <input type="text" placeholder="First Name" v-model="firstname">
                <input type="text" placeholder="Last Name" v-model="lastname">
                <dropdown :options="booleanOptions"></dropdown>
                <div class="button-group">
                    <app-button @click="toggleModal()">CANCEL</app-button>
                    <app-button type="submit">SUBMIT</app-button>
                </div>
            </form>
        </app-modal>

        <!--    PAGE HEAD    -->
        <div class="head">
            <h1>Professors</h1>
            <div class="button-group">
                <app-button @click="toggleModal()">ADD PROFESSOR</app-button>
            </div>
        </div>

        <!--    PAGE CONTENT    -->
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Tenured</th>
                </tr>
                <tr v-for="professor in all" :key="professor.id" >
                    <td>{{professor.get_fullname()}}</td>
                    <td>{{professor.get_tenured()}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import AppButton from "../components/AppButton";
    import AppModal from "../components/AppModal";
    import Professor from "../models/Professor";
    import Dropdown from "../components/Dropdown";

    export default {
        name: 'Professors',
        components: {
            Dropdown,
            AppButton,
            AppModal
        },

        data() {
            return {
                all: [new Professor(0, 'Kendal', 'Bingham', true)],
                firstname: null,
                lastname: null,
                booleanOptions: [{name: 'Yes', code: true}, {name: 'No', code: false}]
            }
        },
        methods: {
            toggleModal() {
                // Add a professor
                this.$store.commit('toggleModal')
            },
            create() {
                this.all.push(new Professor(this.all.length, this.firstname, this.lastname, false))
                this.toggleModal()
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
