<template>
  <v-app  theme="themewebsite">
    <animated-background />
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
          <v-card class="elevation-10" style="margin: 2vw" >
            <router-view />
          </v-card>
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
import AnimatedBackground from "../components/AnimatedBackground.vue";

export default {
  name: "App",
  components: {
    ToolbarComponent,
    AnimatedBackground
  },

  data() {
    return {
      menuItems: {
        "/home":
          { path: "home", text: "Home", subtext: "Welcome!" },
        "/download": {
          text: "Download",
          subtext:
            "Feel free to download any app from RedAndWhiteApps you want.",
        },
        "/blog": {
          text: "Blog",
          subtext:
            "Explore the enriching blog posts at RedAndWhiteApps and unlock a world of captivating insights.",
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

<style scoped></style>
