<template>
    <v-fab
      :class="{'fab-visible': isScrolled, 'fab-hidden': !isScrolled}"
      color="secondary"
      icon="mdi-chevron-up"
      class="fab"
      size="64"
      absolute
      appear
      @click="scrollToTop"
    ></v-fab>
  </template>
  
  <script>
  export default {
    name: "GoToTopFab",
    data() {
      return {
        isScrolled: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      handleScroll() {
        this.isScrolled = window.scrollY > 100; // Adjust the threshold as needed
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  .fab {
    position: fixed; /* Ensure the button is fixed */
    right: 20px; /* Adjust as needed */
    bottom: 8vh; /* Adjust the value to position the button higher */
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
    transform-origin: center center;
    opacity: 100;
    z-index: 1005 !important;
    transform: scale(0.8) rotate(0deg); /* Initial state: slightly smaller and no rotation */
  }
  
  .fab-visible {
    opacity: 1;
    visibility: visible;
    transform: scale(1); /* Final state: normal size and rotated slightly to the left */
  }
  
  .fab-hidden {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.9); /* Final state: slightly smaller and no rotation */
  }
  
  /* Media query to adjust the FAB size on smaller screens */
  @media (max-width: 600px) {
    .fab {
      transform: scale(0.6); /* Make the FAB smaller on mobile devices */
      right: 15px; /* Adjust position if needed */
      bottom: 10vh; /* Adjust position if needed */
    }
  
    .fab-visible {
      transform: scale(0.75); /* Adjust the size for the visible state */
    }
  
    .fab-hidden {
      transform: scale(0.65); /* Adjust the size for the hidden state */
    }
  }
  </style>
  