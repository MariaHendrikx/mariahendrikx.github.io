<template>
  <v-container class="text-center">
    <h1>2019</h1>
    <v-row class="my-3 mx-3 text-center">
      <v-col
        v-for="(app, index) in blogposts"
        :key="index"
        cols="12"
        sm="6"
        md="2"
      >
        <v-card
          style="background: linear-gradient(to bottom, #fff, #eaeaea)"
          class="elevation-3"
        >
          <v-img
            :src="app.srcImg"
            :alt="app.title"
            height="100%"
            class="gradient-overlay ma-1"
            :to="app.href"
          >
            <div :to="app.href" class="background-wrapper">
              <div class="background-layer"></div>
              <v-card-title class="content">
                <h3>{{ app.title }}</h3>
              </v-card-title>
            </div>
          </v-img>
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
      blogDir: "public/ReadMe-blogs",
      blogposts: [],
    };
  },
  created() {
    this.fetchGitHubContent();
  },
  methods: {
    extractDateAndTitle(name) {
      const parts = name.split("_");
      const date = parts[0];
      const baseTitle = parts[1].split(".")[0];
      return { date, baseTitle };
    },

    transformGitHubContentToBlogposts(inputJson) {
      const tempDict = {};

      inputJson.forEach((item) => {
        const { date, baseTitle } = this.extractDateAndTitle(item.name);

        if (!tempDict[baseTitle]) {
          tempDict[baseTitle] = { date, baseTitle, srcImg: "", srcReadme: "" };
        }

        if (item.name.endsWith(".md")) {
          tempDict[baseTitle].srcReadme = item.download_url;
        } else if (item.name.endsWith(".png")) {
          tempDict[baseTitle].srcImg = item.download_url;
        }
      });

      const outputJson = Object.values(tempDict).map((item) => ({
        title: item.baseTitle,
        srcImg: item.srcImg,
        srcReadme: item.srcReadme,
        href: `/blog-${item.date}-${item.baseTitle}`,
        date: new Date(
          item.date.slice(0, 2) +
            "/" +
            item.date.slice(2, 4) +
            "/" +
            item.date.slice(4)
        ).toLocaleDateString(),
      }));

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
.gradient-overlay {
  position: relative;
}

.gradient-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #d0c9bc, transparent);
  opacity: 0.3;
  z-index: 1; /* Ensure the gradient is above the image */
}

.background-wrapper {
  position: relative;
  height: 3rem;
  margin-top: 70%;
  overflow: hidden;
}

.background-layer {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color:white;
  opacity: 0.9;
  z-index: -1; /* Ensure the background is behind the content */
}

.content {
  position: relative;
  z-index: 1; /* Ensure the content is above the background */
}

.content h3 {
  color: #aaa49a ;
}</style>
