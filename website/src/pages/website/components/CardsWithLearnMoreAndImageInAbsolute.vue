<template>
  <v-card class="mx-auto" max-width="344" >
    <v-card-text>
      <div class="text-right">My favourite sport</div>

      <p class="text-h4 font-weight-black">Gymnastics</p>


      <div class="text-medium-emphasis">
        Although I stopped many years ago... I still do it once in a while. <br />
        Just to test the waters... you know?
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
