<template>
  <div id="app">

    <div class="left">
      <img alt="Vue logo" src="./assets/logo.png" class="logo">
      <div v-for="(item, index) in navigation" :key="index" class="nav-item">
        <router-link :to="item.link">{{item.name}}</router-link>
      </div>
    </div>

    <div class="content">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},

  data() {
    return {
      navigation: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Scheduler',
          link: '/scheduler'
        },
        {
          name: 'Professors',
          link: '#'
        },
        {
          name: 'Requests',
          link: '#'
        },
        {
          name: 'Palette',
          link: '/palette'
        },
        {
          name: 'Form Fields',
          link: 'form-fields'
        },
        {
          name: 'About',
          link: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
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
$v-cal-times-bg: white;

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
@import "~v-calendar-scheduler/scss/main";

$leftWidth: 15rem;
$dark: #1b262c;
$blue-1: #022c43;
$blue-2: #053f5e;
$blue-3: #115173;
$active: #ffd700;

h1 {
  color: #02c39a
}
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
#page {
    padding: 2rem;
}

#app {
  width: 100vw;
  height: 100vh;
  position: absolute;

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

.nav-item {
  text-align: center;
  font-size: 2rem;
  a {
    text-decoration: none;
    color: white
  }
  a:hover {
    color: $active;
  }
}
</style>

