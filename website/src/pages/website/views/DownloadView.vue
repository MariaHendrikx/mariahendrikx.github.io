<template>
  <v-container class="text-center">
    <h1> Apps made in 2019 </h1>
    <v-row class="my-3 mx-3 text-center">
      <v-col v-for="(app, index) in apps" :key="index" cols="12" sm="6" md="2">
        <v-card color="tertiary" class="elevation-3">
          <v-card-title class="">
            <h3 style="white-space: pre-wrap;">{{ app.title }}</h3>
          </v-card-title>
          <v-img :src="app.src" :alt="app.title" height="120px" class="ma-2"></v-img>
          <v-divider></v-divider>

          <v-card-actions class="mt-1">

            <!-- <v-btn color="primary" :to="{app.about}">Info</v-btn><v-spacer></v-spacer> -->
            <div v-if="app.available">
              <v-btn color="on-tertiary" variant="text" :href="app.AndroidLink" target="_blank">
                Download
              </v-btn>
            </div>
            <div v-else>
              <v-btn disabled color="on-tertiary" variant="text">
                Deprecated
              </v-btn>
            </div>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DownloadView",
  data() {
    return {
      apps: [
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
  methods: {
    goToInfo(appAbout) {
      // Handle navigation to the info page
      console.log("Navigating to app info:", appAbout);
    },
  },
};
</script>

<style scoped></style>
