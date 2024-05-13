<template>
  <ul class="circles">
    <li
      v-for="(cube, index) in params"
      :key="index"
      :style="getCubeParams(index)"
    ></li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
           params: [
        [80, 25, 0, 0],
        [20, 10, 2, 12],
        [20, 70, 4, 0],
        [60, 40, 0, 18],
        [20, 65, 0, 0],
        [110, 75, 3, 0],
        [150, 35, 7, 0],
        [25, 50, 15, 45],
        [15, 20, 2, 35],
        [150, 85, 0, 11],
        [45, 0, 0, 11],
        [95, 5, 3, 21],
        [95, 120, 0, 11],
        [45, 0, 7, 20],
      ]
        };
    },

  methods: {
    getCubeParams(index) {
      const color = "#92C7CF";

      const [width, left, delay, duration] = this.params[index];

      return {
        backgroundColor: color,
        left: `${left}%`,
        width: `${width}px`,
        height: `${width}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
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
