<template>
  <div id="app">
    <div id="modal-background" v-if="$store.state.showModal"></div>

    <div class="left">
      <img alt="Vue logo" src="./assets/logo.png" class="logo">
      <div v-for="(item, index) in routes" :key="index" class="nav-item">
        <router-link :to="item.path">{{item.name}}</router-link>
      </div>
    </div>

    <div class="content">
      <router-view/>
    </div>

  </div>
</template>

<script>
import router from './router'

export default {
  name: 'App',
  components: {},

  data() {
    return {
      routes: []
    }
  },

  computed: {
  },

  mounted() {
    this.routes = router.options.routes
  }
}
</script>

<style lang="scss">
$leftWidth: 15rem;
$dark: #1b262c;
$blue-1: #022c43;
$blue-2: #053f5e;
$blue-3: #115173;
$active: #ffd700;


body {
  margin: 0;
  padding: 0;
  background: #011f2b;
  // Firefox
  :focus {outline:none;}
  ::-moz-focus-inner {border:0;}
}
h1 {
  font-size: 3.5rem;
  color: #02c39a;
  margin: 0;
}
h2 {
  font-size: 2rem;
  color: #02c39a;
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  position: absolute;
  #modal-background {
    position: absolute;
    top: 0; bottom: 0; right: 0; left: $leftWidth;
    background: rgba(255, 255, 255, 0.2);
    z-index: 90;
  }
  .left {
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    width: $leftWidth;
    background-image: linear-gradient(to bottom, #05668d, #02c39a);
    .logo {
      position: relative;
      width: $leftWidth/2;
      left: $leftWidth/4;
    }
  }
  .content {
    position: absolute;
    left: $leftWidth;
    top: 0;
    bottom: 0;
    right: 0;
  }
}

#page {
  padding: 2rem;
  .head {
    margin-bottom: 2rem;
  }
}

.nav-item {
  text-align: left;
  font-size: 2rem;
  padding: 0 2rem;
  a {
    text-decoration: none;
    color: white
  }
  a:hover {
    color: $active;
  }
}

.button-group {
  display: flex;
  justify-content: space-between;
}


<<<<<<< HEAD
/*
-----------------------------------------------

V Calendar SCSS

-----------------------------------------------
*/
@import "~v-calendar-scheduler/scss/variables";
/*
  SCSS calendar changes
*/
$v-cal-event-bg: #02c39a;
$v-cal-times-bg: #002f3f;
$v-cal-time-block-bg:  #002f3f;
$v-cal-time-block-hover-bg: #02c39a;
$v-cal-times-border-color: rgb(64, 100, 115);
$v-cal-day-border-color: rgb(64, 100, 115);
$v-cal-times-bg: whitesmoke;

.v-cal {
  background-color: transparent !important;
  padding: 0 !important;
}
.v-cal-header {
  display: none;
}
.v-cal-content {
  border: none !important;
}
.v-cal-weekdays {
  display: none !important;
}
.v-cal-times {
  border-radius: .5rem 0 0 .5rem;
}
.v-cal-dialog-card {
  border-radius: .5rem;
  background-color: #002f3f !important;
  color: rgb(64, 100, 115);
}
.all-day {
  display: none;
}
.v-cal-event-list {
  width: 85%;
}
/*take out sunday saturday*/
.v-cal-day--week:first-child {
  display: none;
}
.v-cal-day--week:last-child {
  display: none;
}
@import "~v-calendar-scheduler/scss/main";
=======
/*FORMS*/
$fieldHeight: 2.5rem;
$formWidth: 30rem;

form {
  width: $formWidth;
  .field {
    margin: .5rem 0;
  }
  input {
    color: whitesmoke;
    border-radius: .5rem;
    border-color: transparent;
    border-style: solid;
    background: #002f3f;
    width: $formWidth - 4.25rem;
    height: $fieldHeight;
    padding: .5rem 2rem;
    font-size: 1.5rem;
  }
  textarea {
    width: $formWidth - 4.25rem;
    height: 15rem;
    background: #002f3f;
    padding: .5rem 2rem;
    border-radius: .5rem;
    border-color: transparent;
    border-style: solid;
    font-size: 1.5rem;
  }
  textarea:focus {
    border: 2px solid #02c39a;
    color: whitesmoke;
  }
  input:focus {
    outline-offset: 0;
    border-color: #02c39a;
    border-radius: .5rem;
  }
  select {
    color: whitesmoke;
    border-radius: .5rem;
    border-color: transparent;
    border-style: solid;
    background: #002f3f;
    width: $formWidth - 4.25rem;
    height: 1 + $fieldHeight;
    padding: .5rem 2rem;
    font-size: 1.5rem;
  }
  select:focus {
  }
  .button-group {
    display: flex;
    justify-content: space-between;
    width: $formWidth
  }
}
>>>>>>> 03dafce7e82e0e7f4e1317841ccf0209822697ed
</style>

