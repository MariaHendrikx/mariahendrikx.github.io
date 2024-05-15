<template>
  <v-col class="text-center">
    <h1 class="quote">
      In the realm of computer science, I like to use ChatGPT.
    </h1>
    <p class="subtitle">- ChatGPT.</p>
    <p>(Most is still done by Maria though.)</p>
  </v-col>

  <v-divider color="white" border-width="100"></v-divider>
  <v-container class="text-left my-3">
    <h1>A little bit about me...</h1>
    <p></p>
    <v-row class="my-3 mx-3">
      
      <v-col>
        <CardsWithLearnMoreCS />
      </v-col>
      <v-col>
        <CardsWithLearnMoreAndBGImage />
      </v-col>
      <v-col>
        <CardsWithLearnMoreAndBGImageViolin />
      </v-col>
      <v-col>
        <CardsWithLearnMore />
      </v-col>
      <!-- <v-col
        v-for="(tile, index) in tiles"
        :key="index"
        cols="12"
        sm="6"
        md="2"
      >
        <v-card color="tertiary" class="elevation-3">
          <v-card-title class="">
            <h3 style="white-space: pre-wrap">{{ tile.title }}</h3>
          </v-card-title>
          <v-img
            :src="tile.src"
            :alt="tile.title"
            height="120px"
            class="ma-2"
          ></v-img>
          <v-divider></v-divider>

          <v-card-actions class="mt-1">
            <div>
              <v-btn
                color="on-tertiary"
                variant="text"
                :href="tile.AndroidLink"
                target="_blank"
              >
                Download
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import CardsWithLearnMore from '../components/CardsWithLearnMore.vue';
import CardsWithLearnMoreCS from '../components/CardsWithLearnMoreCS.vue';
import CardsWithLearnMoreAndBGImage from '../components/CardsWithLearnMoreAndBGImage.vue';
import CardsWithLearnMoreAndBGImageViolin from '../components/CardsWithLearnMoreAndBGImageViolin.vue';
export default {
  name: "HomeView",
  components: {
    CardsWithLearnMore,
    CardsWithLearnMoreCS,
    CardsWithLearnMoreAndBGImage,
    CardsWithLearnMoreAndBGImageViolin
  },
  data() {
    return {
      tiles: [
        {
          title: "Rythm Shooting",
          src: "/Images/Icons/Icon_rythmShoot4.png",
          about: "RhythmShooting",
          AndroidLink:
            "https://play.google.com/store/apps/details?id=com.RedAndWhiteApps.RythmShooting",
          available: false,
        },
        {
          title: "Tempo, Tap It!",
          src: "/Images/Icons/TapIt_Icon5.png",
          about: "TapIt",
          AndroidLink:
            "https://play.google.com/store/apps/details?id=com.RedAndWhiteApps.TapIt",
          available: false,
        },
        {
          title: "Simple Metronome",
          src: "/Images/Icons/Icon_simpleMetronome.png",
          about: "SimpleMetronome",
          AndroidLink: "#",
          available: false,
        },
        {
          title: "Number Generator",
          src: "/Images/Icons/Icon2_SimpleRandomNumberGenerator.png",
          about: "RandomNumberGenerator",
          AndroidLink:
            "https://play.google.com/store/apps/details?id=com.mariaflorencia.randomnumbergenerator",
          available: false,
        },
        {
          title: "Jump in Tempo",
          src: "/Images/Icons/Icon3_JumpInTempo.png",
          about: "JumpInTempo",
          AndroidLink:
            "https://play.google.com/store/apps/details?id=com.RedAndWhiteApps.JumpInTempo",
          available: false,
        },
        {
          title: "Catch The Note",
          src: "/Images/Icons/Icon_CatchTheNote.png",
          about: "CatchTheNote",
          AndroidLink:
            "https://play.google.com/store/apps/details?id=com.RedAndWhiteApps.CatchTheNote",
          available: false,
        },
      ],
    };
  },
};
</script>
