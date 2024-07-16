<template>
  <v-card class="mx-auto d-flex flex-column" max-width="344" height="100%"  min-height="214" color="primary" >
    <img
      class="text-white ma-0 pa-0 align-stretch flex-column"
      style="
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
      "
      :src="imgURL"
    />

    <v-card-text class="my-auto">
      <div class="text-right">{{textTopRight}}</div>

      <p class="text-h4 font-weight-black">{{titleCard}}</p>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions class="align-end mt-auto">
      <v-btn
        absolute
        bottom
        left
        color="secondary"
        text="Learn More"
        variant="elevated"
        @click="reveal = true"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="position-absolute w-100"
        height="100%"
        style="bottom: 0"
      >
        <v-card-text class="pb-0">
          <p class="text-h4">...</p>

          <p class="text-medium-emphasis">
            {{TextOnBackofCard}}
          </p>
        </v-card-text>

        <v-card-actions class="pt-0">
          <v-btn
            color="primary"
            text="Close"
            variant="text"
            @click="reveal = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    imgURL: {
      type: String,
      required: true
    },
    titleCard: {
      type: String,
      required: true
    },
    textTopRight: {
      type: String,
      required: true
    },
    TextOnBackofCard: {
      type: String,
      required: true
    }
  },
  data: () => ({
    reveal: false,
    }),
};
</script>

<style scoped></style>
