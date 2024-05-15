<template>
  <v-card class="mx-auto" max-width="344" height>
    <v-img
      class="align-end text-white ma-0 pa-0"
      height="75"
      src="Images\Personal\maria_gymnastics.jpg"
  
      cover
    >
      <!-- <v-card-title>Gymnastics</v-card-title> -->
      <p class="text-h4 font-weight-black ma-3">Gymnastics</p>
    </v-img>
    <v-card-text class="pb-1">
      <div class="text-right">My favourite sport..</div>

      <div class="text-medium-emphasis">
        Although I stopped many years ago... I still do it once in a while. <br />
        Just to test the waters... you know?
      </div>
    </v-card-text>
    <v-card-actions class="pt-0">
      <v-btn
        color="primary"
        text="Learn More"
        variant="text"
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
            Other words that people suggested: Sharp, Open, "Naal", Friendly, and Innovative.
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
