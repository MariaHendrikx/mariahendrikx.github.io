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
  data() {
    return {
      readMeText: "",
      renderedMarkdown: "",
      isLoading: true,
    };
  },
  async mounted() {
    await this.getReadMeContent();
    this.renderMarkdown();
    console.log("renderedMarkdown", this.renderedMarkdown)
  },
  methods: {
    async getReadMeContent() {
      try {
        const response = await fetch(
          "ReadMe-blogs/extreme_programming_20240609.md"
        );
        this.readMeText = await response.text();
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    },

    renderMarkdown() {
      try {
        this.renderedMarkdown = marked(this.readMeText);
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
          text: this.readMeText,
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
@import url('Markdown/gfm.css');

.loading {
  font-size: 16px;
  padding: 20px;
}
</style>
