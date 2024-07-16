<template>
  <!-- <div style="margin: 500px 0 ;">{{ fullName }}</div> -->
  <ul class="circles">
    <li
      v-for="(cube, index) in params"
      :key="index"
      :style="getCubeParams(index)"
    ></li>
  </ul>
  <div class="second-background"></div>
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
    fullName: function() {
            return this.scrollPosition + ' ' + this.viewportHeight;
        }
    },

  methods: {
    updateDimensions() {
            this.scrollPosition = window.scrollY;
            this.viewportHeight = window.innerHeight;
        },
    
    created() {
        // Update dimensions when the component is created
        this.updateDimensions();

        // Add scroll and resize event listeners
        window.addEventListener('scroll', this.updateDimensions);
        window.addEventListener('resize', this.updateDimensions);
    },
    destroyed() {
        // Remove event listeners when the component is destroyed
        window.removeEventListener('scroll', this.updateDimensions);
        window.removeEventListener('resize', this.updateDimensions);
    },

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

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes aurora {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.second-background {
  z-index: 0;
  position: absolute;
  top: 100vh;
  left: 0;
  height: 100vh;
  background: linear-gradient(
    270deg,
    rgba(94, 49, 126, 0.6),
    rgba(58, 91, 152, 0.6),
    rgba(40, 135, 213, 0.6),
    rgba(22, 163, 187, 0.6),
    rgba(22, 163, 187, 0.6),
    rgba(94, 49, 126, 0.6)
  );
  background-size: 400% 100%;
  animation: aurora 15s ease infinite;
  transition: opacity 1s ease; /* Smooth transition */
}

.circles {
  margin: 0px;
  padding: 0px;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
