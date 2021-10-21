<template>
  <div id="cv">

  </div>

</template>

<script>
import {Lines} from "@/sketches/Lines";
const P5 = require("p5");

export default {
  name: "CV",
  mounted() {
    new P5(Lines);
  }
};
</script>


<style scoped>
#cv {
  padding: 0;
  background-color: rgba(30, 30, 30, 0.75);
  filter: grayscale(250);
  width: 50vw;
  height: 80vh;
  position: absolute;
  left: 15vw;
  top: 10vh;
}


</style>
