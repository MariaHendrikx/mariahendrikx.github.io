<template>
  <!-- <div style="margin: 500px 0 ;">{{ fullName }}</div> -->
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
      scrollPosition: 0,
      viewportHeight: window.innerHeight,
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
      ],
    };
  },
  computed: {
    fullName: function () {
      return this.scrollPosition + " " + this.viewportHeight;
    },
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
.circles {
  margin: 0px;
  padding: 0px;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: opacity 1s ease-out; /* Add transition for smooth fading */
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  opacity: 0.2;
  animation: transform 25s linear infinite, fade 25s linear infinite;
  bottom: -150px;
  border-radius: 0.2rem;
}
@keyframes transform {
  0% {
    transform: translateY(-120vh);
  }

  100% {
    transform: translateY(20vh);
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  70% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
