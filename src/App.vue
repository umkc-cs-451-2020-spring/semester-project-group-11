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
          name: 'About',
          link: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$leftWidth: 10rem;
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

