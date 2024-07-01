<template>
  <v-app theme="themewebsite">
    <AnimatedBackgroundRisingSquares />
    <ToolbarComponent :menuItems="menuItems" />
    <GoToTopFab />

    <v-main class="mb-12">
        <router-view />
    </v-main>

    <v-footer app color="primary">
      <span class="white--text">© 2024 RedAndWhiteApps</span>
    </v-footer>
  </v-app>
</template>

<script>
import ToolbarComponent from "../components/ToolbarComponent.vue";
import AnimatedBackgroundRisingSquares from "../components/BackgroundAnimations/AnimatedBackgroundRisingSquares.vue";
import GoToTopFab from "../components/GoToTopFab.vue";

export default {
  name: "App",
  components: {
    ToolbarComponent,
    AnimatedBackgroundRisingSquares,
    GoToTopFab
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

<style >
.v-footer {
  position: relative !important;
  bottom: 0;
  width: 100%;
}
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
