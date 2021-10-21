<template>
  <div id="app">
    <Canvas/>
    <Welcome/>
    <MainLogo/>
  </div>
</template>

<script>
import Canvas from '@/sketches/Canvas.vue'
import Welcome from '@/components/Welcome.vue'
import MainLogo from '@/components/MainLogo.vue'

export default {
  name: 'App',
  components: {
    Canvas,
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
