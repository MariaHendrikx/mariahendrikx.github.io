<template>
  <div>
    <div v-if="isLoading" class="loading">Loading...</div>
    <div v-else v-html="readmeContent"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      readmeContent: ''
    };
  },
  mounted() {
    this.fetchReadme();
  },
  methods: {
    async fetchReadme() {
      try {
        this.isLoading = true;
        const response = await fetch('ReadMe-blogs/extreme_programming_20240609.md');
        this.readmeContent = await response.text();
      } catch (error) {
        console.error('Error fetching README:', error);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style>
.loading {
  font-size: 16px;
  padding: 20px;
}
</style>
