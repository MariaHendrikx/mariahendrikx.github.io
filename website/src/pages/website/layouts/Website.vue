<template>
  <v-app  theme="themewebsite">
    <AnimatedBackgroundRisingSquares />
    <ToolbarComponent :menuItems="menuItems" />
    
    <v-main class="mb-12">
      <div class="my-6 mx-3">
        <div class="text-center">
          <h1 class="title">{{ getTitle() }}</h1>
          <p class="subtitle">{{ getSubTitle() }}</p>
        </div>
      </div>
      
      <div>
        <div>
          <div class="elevation-10" style="margin: 2vw" >
            <router-view />
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
import ToolbarComponent from "../components/ToolbarComponent.vue"
import AnimatedBackgroundRisingSquares from "../components/AnimatedBackgroundRisingSquares.vue";

export default {
  name: "App",
  components: {
    ToolbarComponent,
    AnimatedBackgroundRisingSquares
  },

  data() {
    return {
      menuItems: {
        "/home":
          { path: "home", text: "Maria Hendrikx", subtext: "Computer Scientist (and Music & Sports fan)" },
        "/portfolio": {
          path: "Portfolio",
          text: "Portfolio",
          subtext:
            "Explore the portfolio of Maria Hendrikx",
        },
        "/blog": {
          path: "Blog",
          text: "Blog",
          subtext:
            "Sharing is Caring?",
        },
      },
    };
  },
  methods: {
    getTitle() {
      const menuItem = this.menuItems[this.$route.path.toLowerCase()];
      return menuItem ? menuItem.text : "";
    },
    getSubTitle() {
      const menuItem = this.menuItems[this.$route.path.toLowerCase()];
      return menuItem ? menuItem.subtext : "";
    },
  },
};
</script>

<style scoped></style>../components/AnimatedBackgroundRotatingSquares.vue
