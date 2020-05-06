<template>
  <div id="page">
    <!--    MODAL    -->
    <app-modal v-if="$store.state.showModal" title="Add Course">
      <form @submit="create()">
        <input
          v-model="form.name"
          type="text"
          class="field"
          placeholder="Name"
        />
        <dropdown
          v-model="form.professor"
          class="field"
          :options="professorOptions"
          name="professor"
          style="margin-bottom: 1rem"
        ></dropdown>
        <dropdown
          v-model="form.days"
          class="field"
          :options="$store.state.days"
          name="days"
          multivalue
        ></dropdown>
        <input
          v-model="form.start"
          type="time"
          class="field"
          placeholder="Start"
        />'
        <input
          v-model="form.hours"
          type="number"
          class="field"
          placeholder="Hours"
        />
        <input
          v-model="form.minutes"
          type="number"
          class="field"
          placeholder="Minutes"
        />
        <input
          v-model="form.room"
          type="text"
          class="field"
          placeholder="Room"
        />

        <div class="button-group">
          <app-button @click="$store.commit('toggleModal')">CANCEL</app-button>
          <app-button type="submit">SUBMIT</app-button>
        </div>
      </form>
    </app-modal>

    <div class="head">
      <h1>Scheduler</h1>
      <div class="button-group">
        <app-button @click="$store.commit('deleteSchedule')"
          >DELETE SCHEDULE</app-button
        >
        <app-button @click="verify()">VERIFY</app-button>
        <app-button @click="$store.commit('toggleModal')"
          >ADD COURSE</app-button
        >
      </div>
    </div>
    <vue-scheduler
      :events="$store.getters.events"
      :disable-dialog="true"
      event-display="name"
      @event-clicked="deleteCourse"
    ></vue-scheduler>
  </div>
</template>

<script>
import AppButton from "../components/AppButton";
import AppModal from "../components/AppModal";
import Dropdown from "../components/Dropdown";
import moment from "moment";

export default {
  name: "Scheduler",
  components: {
    AppButton,
    AppModal,
    Dropdown,
  },
  data() {
    return {
      form: {
        name: null,
        professor: [],
        start: null,
        hours: null,
        minutes: null,
        room: null,
        days: [],
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit("updateViolations", [
        "hello world",
        "I am a violation in the Scheduler.vue mounted method",
        "there can be many violations",
        "alot",
      ]);
    }, 2000);
  },
  computed: {
    professorOptions() {
      return this.$store.state.professors.map((p) => {
        return {
          name: p.get_fullname(),
          code: p.get_id(),
        };
      });
    },
  },
  methods: {
    create() {
      const professor = this.$store.state.professors.filter(
        (p) => p.id === this.form.professor[0].code
      )[0];
      const start = new Date(`01 Jan 2018 ${this.form.start}`).getHours() * 100;
      const length = this.form.hours * 100 + this.form.minutes;
      const days = this.form.days.map((day) => day.code);
      this.$store.state.schedule.add_course(
        this.form.name,
        professor,
        start,
        length,
        this.form.room,
        days
      );

      this.$store.commit("toggleModal");
    },
    verify() {
      this.$store.state.violations = this.$store.state.schedule.get_violations();
    },
    deleteCourse(course) {
      this.$store.commit("deleteCourse", course.name);
    },
  },
};
</script>

<style lang="scss" scoped></style>
