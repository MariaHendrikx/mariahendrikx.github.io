<template>
  <div style="display: flex; flex-direction: column; justify-content: center">
    <div class="section" id="home" style="position: relative; width: 100%">
      <!-- <div style="background-color: blue; width: 100vw; height: 100vh; position: absolute; top: 0; left:0"></div> -->
      <div class="max-width-class">
        <div class="text-center mx-3">
          <h1 class="title">Maria Hendrikx</h1>
          <p class="subtitle">Computer Scientist (and Music & Sports fan)</p>
        </div>
        <v-card class="elevation-10" style="margin: 0 2vw 2vw" color="primary">
          <HomeSection />
        </v-card>
      </div>
    </div>

    <div class="section" id="portfolio">
      <div class="max-width-class">
        <div class="text-center mx-3">
          <h1 class="title">Portfolio</h1>
          <p class="subtitle">Explore the portfolio of Maria Hendrikx</p>
        </div>
        <PortfolioSection />
      </div>
    </div>

    <div class="section" id="blog">
      <div class="max-width-class">
        <div class="text-center mx-3">
          <h1 class="title">Blog</h1>
          <p class="subtitle">Sharing is Caring?</p>
        </div>
        <v-card class="elevation-10" style="margin: 2vw" color="primary">
          <BlogSection />
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSection from "../views/sections/HomeSection.vue";
import PortfolioSection from "../views/sections/PortfolioSection.vue";
import BlogSection from "../views/sections/BlogSection.vue";

export default {
  name: "HomePage",
  components: {
    HomeSection,
    PortfolioSection,
    BlogSection,
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
#home {
  /* background-color: red !important; */
}

#portfolio {
  background: linear-gradient(0deg, #f0f0f0, #f9f9f9, #f0f0f0);
  background-size: 400% 400%;
  animation: metallicBackground 10s ease infinite;
  border-radius: 5px; /* Optional: adds slight rounding to the corners */
}


#blog {
  background-color: #f9f9f9 !important;
}

.title{
  padding-top: 1rem;
  /* padding-bottom: 1rem; */
}
.subtitle {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.max-width-class{
  max-width: 100rem;
  margin: 0 auto;
}

.section {
  width: 100%;
  position: relative;
  height: 100%;
  margin: 0;
}

.fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}
</style>
