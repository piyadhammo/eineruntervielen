<template>
  <div id="lehre">
    In meiner Funktion als freier Lehrbeauftrager an der <a href="https://www.oth-regensburg.de/">OTH-Regensburg</a>
    gebe ich seit dem
    Sommersemester 2020 unregelmäßig die beiden Vorlesungen Mathematik 1 und 2 für
    Informatiker.
    <h2>Mathematik 1: Lineare Algebra</h2>
    <ol>
      <li>Mengenlehre</li>
      <li>Logik</li>
      <li>Vollständige Induktion</li>
      <li>Relationen und Abbildungen</li>
      <li>Körper</li>
      <li>Lineare Gleichungssysteme</li>
      <li>Der n-dimensionale reellwertige Vektorraum</li>
      <li>Matrizen und Determinanten</li>
      <li>Vektorräume</li>
      <li>Eurklidische Vektorräume</li>
    </ol>
    <h4>Mathematik 2: Reelle Analysis</h4>
    <ol>
      <li>Einführung</li>
      <li>Folgen und Reihen</li>
      <li>Grenzwerte und Stetigkeit</li>
      <li>Differentialrechnung</li>
      <li>Integralrechnung</li>
    </ol>
  </div>
</template>

<script>
const P5 = require("p5");
import {Stars} from "@/sketches/Stars.js"

export default {
  name: "Lehre",
  mounted() {
    new P5(Stars);
  }
}
</script>

<style scoped>
#lehre {
  padding: 0;
  background-color: rgba(30, 30, 30, 0.75);
  filter: grayscale(250);
  width: 50vw;
  height: 80vh;
  position: absolute;
  left: 15vw;
  top: 10vh;
  color: rgb(150, 150, 150);
  overflow: auto;
}
h1, h2, h3, h4 {
  color: rgb(100,100,100);
}
</style>
