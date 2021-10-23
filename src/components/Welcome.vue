<template>
  <div id="welcome">
    <div id="greeting_left">
      <h1>Hejsan!</h1>
      <p>einer ist Erik,<br>
        Vater, Mathematiker, Redner,
        Modellierer, operativer Leiter,
        Projektmanager<br>
        und vieles noch
      </p>
    </div>
    <div id='greeting_right'>
      <img id="profile_bullet" src="~@/assets/ejk.jpg">
    </div>
  </div>
</template>


<script>
const P5 = require("p5");
import {Spiral} from "@/sketches/Spiral";

export default {
  name: "Welcome",
  mounted() {
    new P5(Spiral);
  }
};
</script>


<style scoped>
#welcome {
  padding: 0;
  background-color: rgba(30, 30, 30, 0.75);
  width: 50vw;
  height: 50vh;
  position: absolute;
  left: 40vw;
  top: 40vh;
}

#profile_bullet {
  margin-top: 10vh;
  margin-left: 10vw;
  border-radius: 50%;
  width: 35%;
  filter: grayscale(100%);
  transition: all 3s ease;
}

#profile_bullet:hover {
  filter: grayscale(0%);
}

#greeting_left {
  float: left;
  max-width: 40%;
}

#greeting_right {
}

h1 {
  font-size: 40pt;
  margin-left: 2vw;
  color: rgb(100, 100, 100);
}
</style>
