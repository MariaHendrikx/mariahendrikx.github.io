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
        <CardsWithLearnMore
          :textTopRight="'What did I study?'"
          :titleCard="'Computer Science'"
          :TextOnFrontOfCard="'A computer to me is... a playground to explore. A place to let my imagination run wild.'"
          :TextOnBackofCard="'Did my bachelors at UHasselt (Belgium), my masters at DTU (Denmark), and an exchange at the University of Hong Kong. My student time was in short: AWESOME!'"
        />
      </v-col>
      <v-col>
        <CardsWithLearnMoreAndBGImage
          :imgURL="'Images/Personal/maria_gymnastics.jpg'"
          :titleCard="'Gymnastics'"
          :textTopRight="'My favourite sport is...'"
          :TextOnBackofCard="'Although I stopped many years ago... I still do it once in a while. Just to test the waters... you know?'"
        />
      </v-col>
      <v-col>
        <CardsWithLearnMore
          :textTopRight="'Friends describe me as ... '"
          :titleCard="'En·er·get·ic'"
          :TextOnFrontOfCard="'showing or involving great activity or vitality. Moderately energetic exercise'"
          :TextOnBackofCard="'Other words that people suggested: Sharp, Open, Friendly, and Innovative.'"
        />
      </v-col>
      <v-col>
        <CardsWithLearnMoreAndBGImage
          :imgURL="'Images/Personal/maria_violin.jpg'"
          :titleCard="'Violin'"
          :textTopRight="'I might have a history with ...'"
          :TextOnBackofCard="'I originally started with a major in music (violin performance). Although I am incredibly grateful and happy with this experience, I am also happy I switched to computer science.'"
        />
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-col class="text-center">
      <p style="max-width: 50rem; text-align: center; margin: auto">
        I made this website to showcase some of my works. And maybe also to
        check off "Have a Blog" from my Bucket List :) (Something about keeping
        the brain stimulated, now that I graduated)
      </p> <br/>
        <p style="max-width: 50rem; text-align: center; margin: auto">
        I am a quite diverse
        person, so don't be surprised to find things around music, tech and
        sports. Although my main focus will probably be tech..  
      </p>
    </v-col>
  </v-container>
</template>

<script>
import CardsWithLearnMore from "../components/CardLayouts/CardsWithLearnMore.vue";
import CardsWithLearnMoreAndBGImage from "../components/CardLayouts/CardsWithLearnMoreAndBGImage.vue";
export default {
  name: "HomeView",
  components: {
    CardsWithLearnMore,
    CardsWithLearnMoreAndBGImage,
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
