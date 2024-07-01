<template>
  <div class="section" id="home">
    <div class="text-center my-6 mx-3">
      <h1 class="title">Maria Hendrikx</h1>
      <p class="subtitle">Computer Scientist (and Music & Sports fan)</p>
    </div>

    <v-card class="elevation-10" style="margin: 2vw; padding: 1rem" color="white">
      <ShowReadMe :blogId="this.blogId" />
    </v-card>
  </div>
</template>

<script>
import ShowReadMe from '../components/Blog/ShowReadMe.vue';

export default {
  name: "BlogContentPage",
  components: { ShowReadMe },
  data () {
    return {
      blogId: ''
    }
  },
  created() {
      this.blogId = this.$route.params.id;
      console.log("blogid: ", this.blogId)
    }
  
};
</script>

<style scoped></style>
