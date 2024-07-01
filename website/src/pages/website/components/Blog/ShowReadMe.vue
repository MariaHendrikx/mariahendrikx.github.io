<template>
  <div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-else v-html="renderedMarkdown" class="readme-body"></div>
  </div>
</template>

<script>
import { marked } from "marked";
import { Octokit } from "octokit";

export default {
  props: {
    blogId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      renderedMarkdown: "",
      isLoading: true,

      baseTitle: "",
      srcImg: "",
      srcReadme: "",
      contentReadme: "",
      date: "",
    };
  },
  async mounted() {
    await this.fetchGitHubContent();
    this.renderMarkdown();
    console.log("renderedMarkdown", this.renderedMarkdown);
  },
  methods: {
    async fetchGitHubContent() {
      const githubApiUrl ="https://raw.githubusercontent.com/MariaHendrikx/my-writing-dream/main/blogs/" + this.blogId + ".md";
      try {
        const response = await fetch(githubApiUrl);
        if (!response.ok) {
          throw new Error("GitHub API response was not ok");
        }
        
        const [date, baseTitle] = this.blogId.split("_");
        this.baseTitle = baseTitle;
        this.date = date
        this.srcImg = "https://raw.githubusercontent.com/MariaHendrikx/my-writing-dream/main/blogs/" + this.blogId + ".png";
        this.srcReadme = "https://raw.githubusercontent.com/MariaHendrikx/my-writing-dream/main/blogs/" + this.blogId + ".md";
        
        this.contentReadme = await response.text();
      } catch (error) {
        console.error(
          "There was a problem with the GitHub API fetch operation:",
          error
        );
      }
    },

    renderMarkdown() {
      try {
        this.renderedMarkdown = marked(this.contentReadme);
      } catch (error) {
        console.error("Error rendering Markdown:", error);
      } finally {
        this.isLoading = false;
      }
    },

    async renderGithubFlavoredMarkdown() {
      try {
        const octokit = new Octokit({ auth: process.env.VUE_APP_GITHUB_TOKEN });
        const response = await octokit.request("POST /markdown", {
          text: this.contentReadme,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });
        this.renderedMarkdown = response.data;
      } catch (error) {
        console.error("Error rendering GitHub flavored Markdown:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
@import url("Markdown/gfm.css");

.loading {
  font-size: 16px;
  padding: 20px;
}
</style>
