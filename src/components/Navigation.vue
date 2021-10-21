<template>
  <div id="nav">
    <router-link to="/">Welcome</router-link>
    <router-link to="/cv">CV</router-link>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>
#nav {
  position: absolute;
  right: 20vw;
  top: 5vh;
}
a {
  color: rgb(100, 100, 100);
  font-size: 15pt;
  padding: 10pt;
  text-decoration-color: rgb(0,0,0,0);
}

a:hover {
  text-decoration-color: rgb(100,100,100);
}

</style>
