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
          class="elevation-3 card-hover"
          @click="navigate(app.href)"
          >
          <v-img
            :src="app.srcImg"
            :alt="app.title"
            height="100%"
            class="ma-1 img"
          >
            
          </v-img>
          <div class="content-wrapper">
              <div class="content-layer"></div>
              <v-card-title class="content">
                <h3>{{ app.title }}</h3>
              </v-card-title>
            </div>
          <div class="slide-down-layer"></div>
        </v-card>

        {{app.date}}
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
    navigate(href) {
    this.$router.push(href);
  },

    extractDateAndTitle(name) {
      const parts = name.split("_");
      const date = parts[0];
      const baseTitle = parts[1].split(".")[0];
      return { date, baseTitle };
    },

    formattedDate(inputDate) {
      const year = parseInt(inputDate.slice(0, 4));
      const month =  parseInt(inputDate.slice(4, 6));
      const day =  parseInt(inputDate.slice(6));
      
      console.log(year, month, day)
      return new Date(year, month-1, day); // Month is 0-indexed
    },

    transformGitHubContentToBlogposts(inputJson) {
      const tempDict = {};

      inputJson.forEach((item) => {
        const { date, baseTitle } = this.extractDateAndTitle(item.name);
        console.log(date)
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
        href: `/blog/${item.date}-${item.baseTitle}`,
        date: this.formattedDate(item.date).toLocaleDateString(),
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

.card-hover:hover .content-wrapper {
  transform: translateY(-300%); /* Slide up */
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

.content-wrapper {
  position: absolute;
  width: 100%;
  top:0;
  height: 3rem;
  margin-top: 70%;
  overflow: hidden;
  transition: transform 0.5s ease-in-out; /* Added transition */
}
.content-layer {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color:white;
  opacity: 0.9;
  z-index: 1; /* Ensure the background is behind the content */
}

.content {
  position: relative;
  z-index: 1; /* Ensure the content is above the background */
}

.content h3 {
  color: #aaa49a ;
}</style>
