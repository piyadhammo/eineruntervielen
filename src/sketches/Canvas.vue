<template>
  <div id="canvas"></div>
</template>

<script>
const P5 = require("p5");
import {spiral} from '~@/sketches/Spiral';

export default {
  name: "App",
  mounted() {
    new P5(spiral);
  },
};
</script>

<style></style>