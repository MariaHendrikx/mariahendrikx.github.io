<template>
  <div style="max-width: 100rem; margin: auto;">
    <div class="section" id="home">
        <AnimatedBackgroundCombination />

        <div class="text-center my-6 mx-3">
          <h1 class="title">Maria Hendrikx</h1>
          <p class="subtitle">Computer Scientist (and Music & Sports fan)</p>
        </div>
        <v-card class="elevation-10" style="margin: 2vw;" color="primary">
          <HomeSection />
        </v-card>
      </div>

      <div class="section" id="portfolio">
        <div class="text-center my-3 mx-3">
          <h1 class="title">Portfolio</h1>
          <p class="subtitle">Explore the portfolio of Maria Hendrikx</p>
        </div>
        <PortfolioSection />
      </div>

      <div class="section" id="blog">
        <div class="text-center my-6 mx-3">
          <h1 class="title">Blog</h1>
          <p class="subtitle">Sharing is Caring?</p>
        </div>
        <v-card class="elevation-10" style="margin: 2vw" color="primary">
          <BlogSection />
        </v-card>
      </div>
    </div>
</template>

<script>
import HomeSection from "../views/sections/HomeSection.vue";
import PortfolioSection from "../views/sections/PortfolioSection.vue";
import BlogSection from "../views/sections/BlogSection.vue";
import AnimatedBackgroundCombination from "../components/BackgroundAnimations/AnimatedBackgroundCombination.vue";

export default {
  name: "HomePage",
  components: {
    HomeSection,
    PortfolioSection,
    BlogSection,
    AnimatedBackgroundCombination
  },

  data() {
    return {
      menuItems: {
        home: {
          path: "home",
          text: "Maria Hendrikx",
          subtext: "Computer Scientist (and Music & Sports fan)",
        },
        portfolio: {
          path: "portfolio",
          text: "Portfolio",
          subtext: "Explore the portfolio of Maria Hendrikx",
        },
        blog: {
          path: "blog",
          text: "Blog",
          subtext: "Sharing is Caring?",
        },
      },
    };
  },

  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.section {
  width: 100%;
  position: relative; 
  height: 100%;
}

.fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}
</style>
