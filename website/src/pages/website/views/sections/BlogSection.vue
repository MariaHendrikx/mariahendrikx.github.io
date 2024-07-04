<template>
  <v-container class="text-center">
    <h1>Tech</h1>
    <v-row class="my-3 mx-3 text-center">
      <v-col
        v-for="(blogpost, index) in blogposts"
        :key="index"
        cols="12" lg="2" md="3" sm="6"
      >
        <v-card
          style="background: linear-gradient(to bottom, #fff, #eaeaea)"
          class="elevation-3 card-hover"
          @click="navigate(blogpost.blogId)"
        >
          <v-img
            :src="blogpost.srcImg"
            :alt="blogpost.baseTitle"
            height="100%"
            class="ma-1 img"
          >
          </v-img>
          <div class="content">
              {{ blogpost.baseTitle }}
          </div>
          <div class="slide-down-layer"></div>
        </v-card>

        {{ blogpost.date }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BlogSection",
  data() {
    return {
      blogDir: "public/ReadMe-blogs",
      blogposts: [],
    };
  },
  created() {
    this.fetchGitHubContent();
  },
  methods: {
    navigate(blogId) {
      this.$router.push({ path: `/blog/${blogId}`, });
    },
    formattedDate(inputDate) {
      const year = parseInt(inputDate.slice(0, 4));
      const month = parseInt(inputDate.slice(4, 6));
      const day = parseInt(inputDate.slice(6));

      return new Date(year, month - 1, day); // Month is 0-indexed
    },

    transformGitHubContentToBlogposts(inputJson) {
      const outputJson = {};

      inputJson.forEach((item) => {
        const blogId = item.name.split(".")[0];
        const [date, baseTitle] = blogId.split("_");
        const dateFormatted = this.formattedDate(date).toLocaleDateString();

        if (!outputJson[blogId]) {
          outputJson[blogId] = {
            blogId: blogId,
            baseTitle,
            srcImg: "",
            srcReadme: "",
            date: dateFormatted
          };
        }

        if (item.name.endsWith(".md")) {
          outputJson[blogId].srcReadme = item.download_url;
        } else if (item.name.endsWith(".png")) {
          outputJson[blogId].srcImg = item.download_url;
        }
      });

      return outputJson;
    },

    async fetchGitHubContent() {
      const githubApiUrl =
        "https://api.github.com/repos/MariaHendrikx/my-writing-dream/contents/blogs";
      try {
        const response = await fetch(githubApiUrl);
        if (!response.ok) {
          throw new Error("GitHub API response was not ok");
        }
        const jsonData = await response.json();
        // Assuming the JSON data is an array of blog post objects
        this.blogposts = this.transformGitHubContentToBlogposts(jsonData);
      } catch (error) {
        console.error(
          "There was a problem with the GitHub API fetch operation:",
          error
        );
      }
    },

    goToInfo(appAbout) {
      // Handle navigation to the info page
      console.log("Navigating to app info:", appAbout);
    },
  },
};
</script>

<style scoped>
/* Hover Animation */

.slide-down-layer {
  position: absolute;
  top: -150%;
  left: 0;
  width: 100%;
  height: 150%;
  opacity: 0.8;
  background-color: white;
  z-index: 1; /* Ensure this layer is above the background and content */
  transition: transform 0.5s ease-in-out; /* Added transition */

  background: linear-gradient(to bottom, transparent, #ffffff, transparent);
}

.card-hover:hover .slide-down-layer {
  transform: translateY(120%); /* Slide down */
}

.card-hover:hover .content {
  transform: translateY(-250%); /* Slide up */
  z-index: 4;
}
.img {
  filter: blur(0px); /* Adjust the blur intensity as needed */
  transition: filter 0.5s ease-in-out;
}

.card-hover:hover .img {
  filter: blur(3px); /* Remove blur on hover */
  opacity: 0.8;
}

/* Content Wrapper */

.content {
  position: absolute;
  width: 100%;
  top: 0;
  margin-top: 70%;
  overflow: hidden;
  transition: transform 0.5s ease-in-out; /* Added transition */
  background-color: white;
  color: #aaa49a;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 0.5rem;

  z-index: 2;
}

</style>
