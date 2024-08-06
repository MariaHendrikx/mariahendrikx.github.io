<template>
  <v-container class="blog-container">
    <div class="my-3 mx-3">
      <div
        v-for="(blogpost, index) in blogposts"
        :key="index"
        class="blog-item"
      >
        <v-card
          style="background: linear-gradient(to bottom, #fff, #eaeaea)"
          class="elevation-3 card-hover text-center "
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
        <div class="content-preview"> <div style="font-size: 1.5rem; font-weight: 800;">{{ blogpost.baseTitle }}</div> <div class="my-1">{{ blogpost.date }} </div> <div style="opacity: 0.7;"> {{ blogpost.content }} </div></div>
      </div>
    </div>
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

    async fetchGitHubContentByBlogId(blogId) {
      const githubApiUrl ="https://raw.githubusercontent.com/MariaHendrikx/my-writing-dream/main/blogs/" + blogId + ".md";
      try {
        const response = await fetch(githubApiUrl);
        if (!response.ok) {
          throw new Error("GitHub API response was not ok");
        }
        const contentReadme = await response.text();

        return contentReadme
      } catch (error) {
        console.error(
          "There was a problem with the GitHub API fetch operation:",
          error
        );
      }
    },

    formattedDate(inputDate) {
      const year = parseInt(inputDate.slice(0, 4));
      const month = parseInt(inputDate.slice(4, 6));
      const day = parseInt(inputDate.slice(6));

      return new Date(year, month - 1, day); // Month is 0-indexed
    },

    async transformGitHubContentToBlogposts(inputJson) {
      const blogposts = await Promise.all(
        inputJson
          .reverse() // Reverse the list to show the latest blog post first
          .filter(item => !item.name.endsWith(".png")) // Filter out .png items
          .map(async (item) => {

          const blogId = item.name.split(".")[0];
          const [date, baseTitle] = blogId.split("_");
          const dateFormatted = this.formattedDate(date).toLocaleDateString();

          let blogpost = {
            blogId,
            baseTitle,
            srcImg: "https://raw.githubusercontent.com/MariaHendrikx/my-writing-dream/main/blogs/" + blogId + ".png",
            srcReadme: "https://raw.githubusercontent.com/MariaHendrikx/my-writing-dream/main/blogs/" + blogId + ".md",
            date: dateFormatted,
            content: "",
          };

          const content = await this.fetchGitHubContentByBlogId(blogId);
          blogpost.content = content;

          return blogpost;
        })
      );

      return blogposts;
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
        this.blogposts = await this.transformGitHubContentToBlogposts(jsonData);
        console.log("Blog posts:", this.blogposts);
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
.content-preview {
  height: 90%; /* Set the desired height */
  margin-left: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines to show */
  -webkit-box-orient: vertical;
}

.blog-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  height: 70vh;
  overflow: scroll;
  overflow-x: auto;
}

.blog-item {
  margin: 10px;
  display: grid;
  grid-template-columns: 10rem auto;
}

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
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem;

  z-index: 2;
}

</style>
