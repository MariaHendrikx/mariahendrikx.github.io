<template>
  <v-container class="text-center">
    <h1> 2019 </h1>
    <v-row class="my-3 mx-3 text-center">
      <v-col
        v-for="(app, index) in apps"
        :key="index"
        cols="12"
        sm="6"
        md="2"
      >
        <v-card
          style="background: linear-gradient(to bottom, #fff, #eaeaea)"
          class="elevation-3"
        >
          <v-card-title class="">
            <h3 style="white-space: pre-wrap;">{{ app.title }}</h3>
          </v-card-title>
          <v-divider></v-divider>
          <v-img
            :src="app.srcImg"
            :alt="app.title"
            height="120px"
            class="ma-3"
          ></v-img>
          <v-divider></v-divider>

          <v-card-actions class="mt-1">
            
          <v-btn color="primary" :to="app.href">Read more</v-btn><v-spacer></v-spacer>
            
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
name: "BlogView",
data() {
  return {
    apps: [
      {
        title: "Practise Practise Practise...",
        srcImg: "/Images/BlogImages/blog_PractisePractisePractise.png",
        href: "/blog-practisepractisepractise",
        date: '9 April 2019'
      },
      {
        title: "Rythm Explained",
        srcImg: "/Images/BlogImages/blog_RhythmExplained.png",
        href: "/blog-rythmexplained",
        date: '9 April 2019'
      },
    ],
  };
},
methods: {
  goToInfo(appAbout) {
    // Handle navigation to the info page
    console.log("Navigating to app info:", appAbout);
  },
},
};
</script>

<style scoped>
</style>
