<template>
  <ul class="circles">
    <li
      v-for="(cube, index) in 15"
      :key="index"
      :style="getCubeParams(index)"
    ></li>

  </ul>
</template>

<script>
export default {
  methods: {
    getCubeParams(index) {
            const color = "#92C7CF";
      const w = Math.random() * 120 + 30; // value between 30 and 150
      
      var s = Math.floor(Math.random() * (6 - 0 + 1)) + 0; // value between 0 and 3
      var l = Math.floor(Math.random() * 21) * 5; // Random multiple of 5 between 0 and 100
      var d = Math.floor(Math.random() * (18 - 12 + 1)) + 12; // value between 12 and 18

      if(index>10){
        s = Math.floor(Math.random() * (16 - 3 + 1)) + 3; // value between 3 and 16
      }
      if(index%5){
        d = Math.floor(Math.random() * (48 - 12 + 1)) + 12; // value between 12 and 18
      }

      return {
        backgroundColor: color,
        left: `${l}%`,
        width: `${w}px`,
        height: `${w}px`,
        animationDelay: `${s}s`,
        animationDuration: `${d}s`,
      };
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Exo:400,700");

* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Exo", sans-serif;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  opacity: 0.2;
  animation: animate 25s linear infinite;
  bottom: -150px;
}

@keyframes animate {
  0% {
    transform: translateY(-120vh) rotate(0deg);
    opacity: 0;
    border-radius: 5%;
  }

  100% {
    transform: translateY(0) rotate(720deg);
    opacity: 1;
    border-radius: 5%;
  }
}
</style>
