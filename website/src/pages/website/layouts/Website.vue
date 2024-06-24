<template>
  <v-app theme="themewebsite">
    <AnimatedBackgroundRisingSquares />
    <ToolbarComponent :menuItems="menuItems" />

    <v-main class="mb-12">
        <HomePage />
    </v-main>

    <v-footer app color="white">
      <span class="white--text">© 2023</span>
    </v-footer>
  </v-app>
</template>

<script>
import ToolbarComponent from "../components/ToolbarComponent.vue";
import AnimatedBackgroundRisingSquares from "../components/AnimatedBackgroundRisingSquares.vue";
import HomePage from "../pages/HomePage.vue";

export default {
  name: "App",
  components: {
    ToolbarComponent,
    AnimatedBackgroundRisingSquares,
    HomePage
  },

  data() {
    return {
      menuItems: {
        "home": {
          path: "home",
          text: "Maria Hendrikx",
          subtext: "Computer Scientist (and Music & Sports fan)",
        },
        "portfolio": {
          path: "portfolio",
          text: "Portfolio",
          subtext: "Explore the portfolio of Maria Hendrikx",
        },
        "blog": {
          path: "blog",
          text: "Blog",
          subtext: "Sharing is Caring?",
        },
      },
    };
  },

  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.section {
  width: 100%;
  margin-bottom: 5rem;
}

.fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}
</style>
