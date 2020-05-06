<template>
    <div id="page">

        <!--    PAGE HEAD    -->
        <div class="head">
            <h1>Schedules</h1>
            <div class="button-group">
                <app-button @click="create()">ADD SCHEDULE</app-button>
            </div>
        </div>

        <!--    PAGE CONTENT    -->
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="(schedule, index) in $store.state.schedules" :key="index" >
                    <td>{{ index }}</td>
                    <td style="width: 15rem">
                        <span style="display: flex; justify-content: space-around">
                            <a @click="$store.commit('deleteProfessor', professor.id)">Delete</a>
                            <a>Update</a>
                        </span>
                    </td>

                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import AppButton from "../components/AppButton";
    import Professor from "../models/Professor";

    export default {
        name: 'Professors',
        components: {
            AppButton,
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
        },
        methods: {
            create() {

                // Create a professor
                let spouse = (this.form.spouse[0])
                    ? this.getProfessor(this.form.spouse[0].code)
                    : null

                let professor = new Professor(this.$store.state.professors.length, this.form.first, this.form.last, this.form.tenured[0].code)
                professor.spouse = spouse
                this.$store.commit('createProfessor', professor)
                this.toggleModal()
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
