<template>
  <div>
    <textarea v-model="markdownInput" rows="10" cols="50"></textarea>
    <button @click="renderMarkdown">Render</button>
    <div v-html="renderedMarkdown"></div>
  </div>
</template>

<script>
import { Octokit } from "@octokit/core";
import { paginateRest, throttling, retry } from "@octokit/plugin-paginate-rest";
import { createActionAuth } from "@octokit/auth-action";

const MyActionOctokit = Octokit.plugin(paginateRest, throttling, retry).defaults({
  authStrategy: createActionAuth,
  userAgent: "my-github-markdown-app/v1.0.0",
});

export default {
  data() {
    return {
      markdownInput: "",
      renderedMarkdown: "",
    };
  },
  methods: {
    async renderMarkdown() {
      try {
        const octokit = new MyActionOctokit({ auth: "YOUR_GITHUB_TOKEN" });
        const response = await octokit.request("POST /gfm/", {
          data: this.markdownInput,
          headers: {
            accept: "text/html;charset=utf-8",
            "content-type": "text/plain",
          },
        });
        this.renderedMarkdown = response.data;
      } catch (error) {
        console.error("Error rendering Markdown:", error);
      }
    },
  },
};
</script>
