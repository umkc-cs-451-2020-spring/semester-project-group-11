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
</style>

