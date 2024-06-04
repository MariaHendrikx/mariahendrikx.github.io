<template>
  <div v-if="isMobile">
    <v-app-bar light>
      <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Maria Hendrikx</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-for="item in menuItems" :key="item.path" cols="auto" v-model="group" active-class="primary">
          <v-list-item>
            <v-btn class-active="active" @click="scrollToSection(item.path)" variant="text">
              {{ item.path }}
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
  <div v-else>
    <v-toolbar color="primary" flat height="75" class="elevation-10">
      <v-row class="mr-2">
        <v-spacer></v-spacer>
        <v-col v-for="item in menuItems" :key="item.path" cols="auto">
          <v-btn class-active="active" @click="scrollToSection(item.path)" height="50" min-width="75" block size="large" variant="flat" outlined tile>
            {{ item.path }}
          </v-btn>
        </v-col>
      </v-row>
    </v-toolbar>
  </div>
</template>



<script>
export default {
  name: "ToolbarComponent",
  props: {
    menuItems: {
      type: Array, // Define the prop type as an array
      required: true, // Specify if the prop is required or not
    },
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      drawer: false,
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  computed: {
    isMobile() {
      const mobileWidth = 800; // Define your desired mobile width breakpoint
      return this.windowWidth < mobileWidth;
    },
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>


<style scoped>
.v-btn--active {
  background-color: #FBF9F1;
  color: #92C7CF !important;
}

.v-btn:not(.v-btn--active) {
  background-color: #AAD7D9;
  color: white !important;
}
</style>
