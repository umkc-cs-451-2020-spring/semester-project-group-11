<template>
  <div id="app">
    <div id="modal-background" v-if="$store.state.showModal"></div>
    <div id="violations" v-if="$store.state.violations">
      <span class="exit" @click="$store.commit('removeViolations')">&#10006;</span>
      <div v-for="(violation, index) in $store.state.violations" :key="index">
        {{violation}}
      </div>
    </div>

    <div class="left">
      <img alt="Vue logo" src="./assets/logo.png" class="logo">
      <div v-for="(item, index) in routes" :key="index" class="nav-item">
        <router-link :to="item.path" @click.native="resetModal()">{{item.name}}</router-link>
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
      routes: [],
      violate: false
    }
  },

  computed: {
  },

  mounted() {
    this.routes = router.options.routes
    this.$store.dispatch('bootstrap')
  },

  methods: {
    resetModal() {
      if(this.$store.state.showModal)
        this.$store.commit('toggleModal')
    }
  }
}
</script>

<style lang="scss">
</style>

