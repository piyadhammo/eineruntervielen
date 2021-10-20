<template>
  <div id="app">
    <CanvasWelcome/>
    <Welcome/>
    <MainLogo/>
  </div>
</template>

<script>
import CanvasWelcome from '@/components/Welcome/CanvasWelcome.vue'
import Welcome from '@/components/Welcome/Welcome.vue'
import MainLogo from '@/components/MainLogo.vue'

export default {
  name: 'App',
  components: {
    CanvasWelcome,
    Welcome,
    MainLogo
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
