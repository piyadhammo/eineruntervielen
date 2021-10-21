<template>
  <div id="app">
    <MainLogo/>
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import MainLogo from '@/components/MainLogo.vue'
import Navigation from "@/components/Navigation";

export default {
  name: 'App',
  components: {
    MainLogo,
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
