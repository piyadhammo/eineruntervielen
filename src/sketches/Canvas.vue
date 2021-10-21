<template>
  <div id="canvas"></div>
</template>

<script>
import {Spiral} from "@/sketches/Spiral";
const P5 = require("p5");

export default {
  name: "App",
  mounted() {
    new P5(Spiral);
  }
};
</script>

<style></style>
