<template>
  <v-card class="mx-auto" max-width="344" >
    <div class="d-flex justify-space-between">
      <div>
        <v-card-text>
          <p class="text-h4 font-weight-black">Gymnastics</p>

          <p>adjective</p>

          <div class="text-medium-emphasis">
            showing or involving great activity or vitality.<br />
            "moderately energetic exercise"
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            text="Learn More"
            variant="text"
            @click="reveal = true"
          ></v-btn>
        </v-card-actions>
      </div>

      <v-avatar class="ma-0" rounded="0" size="125">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
      </v-avatar>
    </div>

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
            Other words that people suggested: Sharp, Open, "Naal", Friendly,
            and Innovative.
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
  data: () => ({
    reveal: false,
  }),
};
</script>
