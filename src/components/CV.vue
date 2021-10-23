<template>
  <div id="cv">
    <h2>Akademische Werdegang</h2>
    <ol>
      <li>Masterstudium Mathematik an der Ostbayerischen Technischen Hochschule Regensburg</li>
      <li>Bachelorstudium Mathematik an der Ostbayerischen Technischen Hochschule Regensburg</li>
      <li>Fachhochschulreife an der Staatlichen Berufsoberschule Nürnberg</li>
      <li>Mittlere Reife an der Wirtschaftschule im Röthelheimpark Erlangen</li>
      <li>Hauptschule Ernst-Penzoldt Erlangen</li>
      <li>Grundschule Adalbert-Stifter Erlangen</li>
    </ol>
    <br>
    <h2>Berufliche Werdegang</h2>
    <ol>
      <li>Operativer Leiter des Bereichs Mathematische Modellierung und Optimierung bei der <a href="https://www.optware.de">OptWare GmbH</a> Regensburg</li>
      <li>Software-Entwickler und Modellierer bei der OptWare GmbH Regensburg</li>
      <li>Tutor für Lineare Algebra 1 und 2 sowie für Mathematische Software 1 an der Ostbayerischen Technischen Hochschule Regensburg</li>
      <li>Ausbildung zum Kaufmann für Bürokommunikation bei der LN-Möbelhandels GmbH Hirschaid</li>
    </ol>
  </div>
</template>

<script>
const p5 = require("p5");
import {Tree} from "@/sketches/Tree";

export default {
  name: "CV",
  mounted() {
    new p5(Tree);
  },
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
  color: rgb(150,150,150);
  overflow: auto;
}

h1, h2, h3, h4 {
  color: rgb(100,100,100);
}

</style>
