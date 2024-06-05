<template>
  <v-app theme="themewebsite">
    <AnimatedBackgroundRisingSquares />
    <ToolbarComponent :menuItems="menuItems" />
    <GoToTopFab />

    <v-main class="mb-12">
      <div>
        <div>
          <div class="section" id="home">
            <div class="text-center my-6 mx-3">
              <h1 class="title">Maria Hendrikx</h1>
              <p class="subtitle">Computer Scientist (and Music & Sports fan)</p>
            </div>

            <v-card class="elevation-10" style="margin: 2vw" color="primary">
              <HomeView />
            </v-card>
          </div>

          <div class="section" id="portfolio">
            <div class="text-center my-6 mx-3">
              <h1 class="title">Portfolio</h1>
              <p class="subtitle">Explore the portfolio of Maria Hendrikx</p>
            </div>
            <PortfolioView />
          </div>

          <div class="section" id="blog">
            <div class="text-center my-6 mx-3">
              <h1 class="title">Blog</h1>
              <p class="subtitle">Sharing is Caring?</p>
            </div>
            <v-card class="elevation-10" style="margin: 2vw" color="primary">
              <BlogView />
            </v-card>
          </div>
        </div>
      </div>
    </v-main>

    <v-footer app color="white">
      <span class="white--text">© 2023</span>
    </v-footer>
  </v-app>
</template>

<script>
import ToolbarComponent from "../components/ToolbarComponent.vue";
import AnimatedBackgroundRisingSquares from "../components/AnimatedBackgroundRisingSquares.vue";
import HomeView from "../views/HomeView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import BlogView from "../views/BlogView.vue";
import GoToTopFab from "../components/GoToTopFab.vue";

export default {
  name: "App",
  components: {
    ToolbarComponent,
    AnimatedBackgroundRisingSquares,
    HomeView,
    PortfolioView,
    BlogView,
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
