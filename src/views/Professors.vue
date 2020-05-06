<template>
    <div id="page">
        <!--    MODAL    -->
        <app-modal v-if="$store.state.showModal" title="Add Professor">
            <form @submit="create()" v-if="!updating">
                <input type="text" class="field" placeholder="First Name" v-model="form.first">
                <input type="text" class="field" placeholder="Last Name" v-model="form.last">
                <dropdown v-model="form.tenured" class="field" :options="booleanOptions" name="boolean" style="margin-bottom: 1rem"></dropdown>
                <dropdown v-model="form.spouse" class="field" :options="professorOptions" name="professor" style="margin-bottom: 1rem"></dropdown>

                <div class="button-group">
                    <app-button @click="toggleModal()">CANCEL</app-button>
                    <app-button type="submit">SUBMIT</app-button>
                </div>
            </form>

            <form @submit="update()" v-if="updating">
                <input type="text" class="field" placeholder="First Name" v-model="form.first">
                <input type="text" class="field" placeholder="Last Name" v-model="form.last">
                <dropdown v-model="form.tenured" class="field" :options="booleanOptions" name="boolean-update" style="margin-bottom: 1rem"></dropdown>
                <dropdown v-model="form.spouse" class="field" :options="professorOptions" name="professor-update" style="margin-bottom: 1rem"></dropdown>

                <div class="button-group">
                    <app-button @click="toggleModal()">CANCEL</app-button>
                    <app-button @click="update()">UPDATE</app-button>
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
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Spouse</th>
                    <th>Tenured</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="professor in $store.state.professors" :key="professor.last" >
                    <td>{{professor.last }}</td>
                    <td>{{professor.first }}</td>
                    <td>{{professor.get_spouse() }}</td>
                    <td>{{professor.get_tenured() }}</td>
                    <td style="width: 15rem">
                        <span style="display: flex; justify-content: space-around">
                            <a @click="$store.commit('deleteProfessor', professor.id)">Delete</a>
                            <a @click="updateModal(professor)">Update</a>
                        </span>
                    </td>

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
                form: {
                    first: null,
                    last: null,
                    tenured: [],
                    spouse: []
                },
                booleanOptions: [{name: 'Yes', code: 1}, {name: 'No', code: 0}],
                updating: false,
                updatingProfessor: null,
            }
        },
        computed: {
            professorOptions() {
                return this.$store.state.professors.map(p => {
                    return {
                        name: p.get_fullname(),
                        code: p.get_id()
                    }
                })
            }
        },
        methods: {
            toggleModal() {
                // Add a professor
                this.$store.commit('toggleModal')
                this.form = {
                    first: null,
                    last: null,
                    tenured: [],
                    spouse: []
                }
            },
            create() {
                // Create a professor
                let spouse = (this.form.spouse[0])
                    ? $store.dispatch('getProfessor', this.form.spouse[0].code)
                    : null
                let professor = new Professor($store.state.professors.length, this.form.first, this.form.last, this.form.tenured[0].code, spouse)
                $store.commit('createProfessor', professor)
                this.toggleModal()
            },
            update() {
                // Update a professor
                let spouse = (this.form.spouse[0])
                    ? $store.dispatch('getProfessor', this.form.spouse[0].code)
                    : null
                let professor = new Professor(this.updatingProfessor.id, this.form.first, this.form.last, this.form.tenured[0].code, spouse)
                $store.commit('updateProfessor', professor)
                this.toggleModal()
            },
            updateModal(professor) {
                this.toggleModal()

                this.updatingProfessor = professor
                this.updating = true
                this.form.first = professor.first
                this.form.last = professor.last
                this.form.tenured = this.booleanOptions.filter(option => option.code == professor.tenured)
                if(professor.spouse)
                    this.form.spouse = this.professorOptions.filter(option => option.code === professor.spouse.id)[0]
            }
        }
    }
</script>

<style lang="scss" scoped>
    table {
        background: #002f3f;
        width: 100%;
        th {
            text-align: left;
            background: whitesmoke;
            color: rgb(64, 100, 115);
        }
        td {
            color: $color-2;
        }
    }
</style>
