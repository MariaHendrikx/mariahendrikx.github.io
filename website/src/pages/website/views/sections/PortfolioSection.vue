<template>
  <v-container class="text-center portfolio-section">
    <h2
      style="
        color: #92c7cf;
        background-color: white;
        padding: 0.3rem;
        z-index: 2;
        position: relative;
      "
    >
      Apps made in 2019
    </h2>

    <img
      src="Animations/CircleWithSquares.svg"
      alt="CircleWithSquares"
      style="
        z-index: 0;
        position: absolute;
        top: 0vh;
        right: -5vw;
        width: 55vh;
        height: 55vh;
        opacity: 0.5;
      "
    />

    <CircleWithSquares />
    <div class="grid-container">
      <div v-for="(app, index) in apps" :key="index" class="grid-item">
        <v-card color="tertiary" class="elevation-3">
          <v-card-title class="">
            <div style="white-space: pre-wrap">{{ app.title }}</div>
          </v-card-title>
          <v-img
            :src="app.src"
            :alt="app.title"
            height="100px"
            class=""
          ></v-img>
          <v-divider></v-divider>

          <v-card-actions class="">
            <div v-if="app.available">
              <v-btn
                color="on-tertiary"
                variant="text"
                :href="app.AndroidLink"
                target="_blank"
              >
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
      </div>
    </div>

    <h2
      style="
        color: #92c7cf;
        background-color: white;
        padding: 0.3rem;
        z-index: 2;
        position: relative;
      "
    >
      Projects for University
    </h2>

    <div class="lamp-portfolio-container">
      <div class="grid-container grid-container-video">
        <div
          v-for="(item, index) in university"
          :key="index"
          class="grid-item grid-item-video"
        >
          <div v-if="item.available">
            <a :href="item.link" target="_blank" class="grid-item-video-link">
              <img
                :src="item.src"
                :alt="item.title"
                class="grid-item-video-img elevation-3"
              />
              <div class="animation-container">
                <div class="slide-down-layer-video"></div>
                <div class="slide-left-text-layer"></div>
              </div>
            </a>
          </div>
          <div v-else>
            <img
              :src="item.src"
              :alt="item.title"
              class="grid-item-video-img elevation-3"
            />
          </div>
          <div class="animation-container">R
            <div class="slide-down-layer-information">
              <div style="text-align: right;"><span class="information-item">{{ item.title }}</span></div>
              <div>Course: <span class="information-item">{{ item.course }}</span></div>
              <div>University: <span class="information-item">{{ item.university }}</span></div>
              <div>Date: <span class="information-item">{{ item.date }}</span></div>
            </div>
            <div class="slide-down-layer-video"></div>
            <div class="slide-left-text-layer"></div>
          </div>
        </div>
        <CoffeeWithSmoke style="bottom: -3rem; left: -5rem" />
      </div>
    </div>
    <h2
      style="
        color: #92c7cf;
        background-color: white;
        padding: 0.3rem;
        z-index: 2;
        position: relative;
      "
    >
      The Artistic Period
    </h2>
    <div class="grid-container grid-container-video">
      <div
        v-for="(item, index) in youtube"
        :key="index"
        class="grid-item grid-item-video"
      >
        <ArrowForwardIcon class="arrow-icon" />
        <div class="grid-item-video-title">{{ item.title }}</div>
        <a :href="item.link" target="_blank" class="grid-item-video-link">
          <img
            :src="item.src"
            :alt="item.title"
            class="grid-item-video-img elevation-3"
          />
          <div class="animation-container">
            <div class="slide-down-layer-video"></div>
            <div class="slide-left-text-layer"></div>
          </div>
        </a>
      </div>
    </div>
  </v-container>
</template>

<script>
import CoffeeWithSmoke from "../../components/BackgroundAnimations/CoffeeWithSmoke.vue";
import CircleWithSquares from "../../components/BackgroundAnimations/CircleWithSquares.vue";
export default {
  name: "PortfolioSection",
  components: {
    CoffeeWithSmoke,
    CircleWithSquares,
  },
  data() {
    return {
      university: [
        {
          title: "Stone Age",
          course: "Object Oriented Programming 1",
          university: "Hasselt University",
          src: "/Images/University/2019_StoneAge.png",
          about: "#",
          date: "2019-05-30",
          link: "#",
          category: "game",
          available: false,
        },
        {
          title: "U-Fest",
          course: "Web programming",
          university: "Hasselt University",

          src: "/Images/University/2019_WebProgramming.png",
          about: "#",
          date: "2019-06-01",
          link: "#",
          category: "web",
          available: false,
        },
        {
          title: "UFO World",
          course: "Computer Graphics",
          university: "Hasselt University",
          src: "/Images/University/2020_ComputerGraphics.png",
          about: "#",
          date: "2020-08-15",
          link: "#",
          category: "game",
          available: false,
        },
        {
          title: "Android Food App",
          course: "Human and Social Aspects of Informatics",
          university: "Hasselt University",
          src: "/Images/University/2020_HSAI.png",
          about: "#",
          date: "2020-06-01",
          link: "#",
          category: "android",
          available: false,
        },
        {
          title: "Pukkelpop - Online Monitoring Platform",
          course: "Software development and Professional Experience",
          university: "Hasselt University",
          src: "/Images/University/2020_PSOPV.png",
          about: "#",
          date: "2020-06-12",
          link: "#",
          category: "web",
          available: false,
        },
        {
          title: "Coffee Status Checker",
          course: "Digital Electronics",
          university: "Hasselt University",
          src: "/Images/University/2021_DigitalElectronics.png",
          about: "#",
          date: "2021-05-30",
          link: "#",
          category: "web",
          available: false,
        },
        {
          title: "Incident Report System",
          course: "Software Engineering",
          university: "Hasselt University",
          src: "/Images/University/2021_SOFEN.png",
          about: "#",
          date: "2021-06-15",
          link: "#",
          category: "web",
          available: false,
        },
        {
          title: "E-Kitch: Virtual Reality Exploration of Kitchen Designs",
          course: "Bachelor Thesis",
          university: "Hasselt University",
          src: "/Images/University/2021_BscThesis_EKitch.png",
          about: "#",
          date: "2021-06-20",
          link: "#",
          category: "unity",
          available: false,
        },
        {
          title:
            "Work-a-Pose",
          course: "Summer Job Hasselt University",
          university: "Hasselt University",
          src: "/Images/University/2021_Ergo_Summerjob.png",
          about:
            "In summer 2015 I was searching for a new phone and my family recommended the OnePlus II. So I was waiting for the launch of it, when OnePlus organized a contest to win this phone for free! The #WWYDFT2-contest. We had to upload a creative video, promoting the phone, and then people could vote for you. The video with the most votes would get a free OnePlus II. I immediately grabbed my camera and filmed this movie. I had already an idea, but in another context. I am happy I could use the idea also for this contest. (with no background-information, I think this video is a little bit weird...) In the end, I was one of the winners of this contest. So I am very happy! (Thank You OnePlus)",
          date: "2021-08-20",
          link: "https://documentserver.uhasselt.be/bitstream/1942/37784/1/vanDeurzen%20et%20al_2022_Work-a-Pose_camera_Ready.pdf",
          category: "web",
          available: true,
        },
        {
          title: "Wikipedia Process Mining",
          course: "Process Mining",
          university: "DTU",
          src: "/Images/University/2021_ProcessMining.png",
          about: "#",
          date: "2021-12-15",
          link: "#",
          category: "use of program",
          available: false,
        },
        {
          title: "Hong Kong Metro Traffic Visualization",
          course: "Multimedia Computing",
          university: "University of Hong Kong",
          src: "/Images/University/2022_HKU_MultimediaComputing.png",
          about: "#",
          date: "2022-11-16",
          link: "#",
          category: "use of program",
          available: false,
        },
        {
          title: "Poverty in Hong Kong: A Data Visualization Project",
          course: "Visualization and Visual Analytics",
          university: "University of Hong Kong",
          src: "/Images/University/2022_HKU_VisualizationAndVisualAnalytics.png",
          about: "#",
          date: "2022-12-05",
          link: "#",
          category: "use of program",
          available: false,
        },
        {
          title: "Face Age Manipulation with Machine Learning",
          course: "Biometric Systems",
          university: "Technical University of Denmark",
          src: "/Images/University/2023_BiometricSystems_FAM.png",
          about: "#",
          date: "2023-06-25",
          link: "#",
          category: "data analysis",
          available: false,
        },
        {
          title:
            "TermAgent: Personalizing Education with Large Language Models",
          course: "Master Thesis",
          university: "Technical University of Denmark",
          src: "/Images/University/2024_MasterThesis_PersonalizedEducationWithNLP.png",
          about: "#",
          date: "2024-03-04",
          link: "#",
          category: "web",
          available: false,
        },
      ],

      youtube: [
        {
          title: "Studie Keuze",
          course: "Object Oriented Programming 1",
          src: "/Images/Youtube/Composition_Studykeuze.png",
          about: "#",
          date: "2020-02-03",
          link: "https://www.youtube.com/watch?v=X9HgM0pKYoU&ab_channel=Florenciay",
          category: "composition",
          available: true,
        },
        {
          title: "A Tree's Life",
          course: "Object Oriented Programming 1",
          src: "/Images/Youtube/Composition_LifeOfATree.png",
          about:
            'For the school year 2016-2017, we had the opportunity to join a project called "Seeing Sound". It was a project in collaboration with the students of Animation. It was the perfect project for me, since this is something I might work on later in my life. My previous videos were just recording myself play and editing it in a video, while on this we are using animations. I was very happy during the time we were working on this project, because I love animations! The only reason my previous videos are using real life people, is because I can\'t draw well so I am not able to animate. This video was made in collaboration with some of my colleagues and students of Animation. (Obviously they draw better than I do! The sound of the music is already better, still not very professional, but it’s already a step closer to perfection!',
          date: "2016-12-25",
          link: "https://www.youtube.com/watch?v=FXdPoDW-N10&ab_channel=Florenciay",
          category: "composition",
          available: true,
        },
        {
          title: "Phantom Of The Opera",
          course: "Object Oriented Programming 1",
          src: "/Images/Youtube/ViolinCover_POTO.png",
          about:
            "This one is the favourite of my filmmusic-serie. In my opinion the music has been the most succesfully created and arranged here. Also the recording of this piece is better than my other covers. Next to these details, it's also one of my more favourite soundtracks. Probably it's the combination of this all, that makes this my favourite cover at the moment. The Idea behind this movie is: it's an \"inner\"-battle. The violinist and the shadow like each other, but at the same time they don't. At a certain moment they \"go away\" from each other.. but at the end they just get magnetized back to each other. I noticed that this part isn't really clear. Most people don't even notice that the shadow and the violinist are seperate from each other! I probably had to exaggerate that fact... and not work with symmetry. I am still very proud of this video though!",
          date: "2018-09-22",
          link: "https://www.youtube.com/watch?v=P6TZSDGTZRk&ab_channel=Florenciay",
          category: "cover",
          available: true,
        },
        {
          title: "O Fortuna",
          course: "Object Oriented Programming 1",
          src: "/Images/Youtube/ViolinCover_OFortuna.png",
          about:
            'This is also part of the "film-music"-serie. Although, I didn\'t choose this music because it\'s soundtrack. I just chose it, because I had an picture in my head to film along with it. The idea behind this movie is that my little men are everywhere. But like really: EVERYWHERE. Even on the toilet! I first wanted to add more of these men on the scenes, but the computer I was using wasn\'t able to function normally while 10+ videos were on the same frame. So I just used 4 of my men. Which made the effect less good. I also think this is the reason why most people don\'t understand the concept behind this movie :P Because I get it as feedback on this movie: "I don\'t understand the story behind it?". So... if you wondered: the story is: my men are everywhere! It\'s a real plague! Next to that "story", ít\'s also the daily life of a working person. At the end I used the picture "beach", because I wanted to represent the feeling people have when coming home from work (or I guess most people have a relaxed feeling).',
          date: "2018-09-08",
          link: "https://www.youtube.com/watch?v=oFDJ_QXg-eY&ab_channel=Florenciay",
          category: "cover",
          available: true,
        },
        {
          title: "POTC - He's a Pirate",
          course: "Object Oriented Programming 1",
          src: "/Images/Youtube/ViolinCover_POTC-HesAPirate.png",
          about:
            'I thought of making a serie of musicvideos. For this serie I chose the theme "film-music" because I really enjoy watching movies and listen to their soundtracks. The idea behind the Pirates of the Caribbean-video is that I am in a glass bottle, on a ship, playing the violin with my group (my little men). I got the idea of the scene where the Black Pearl is being hold in a glass bottle (not sure in which movie this is).',
          date: "2018-08-25",
          link: "https://www.youtube.com/watch?v=GDdX3R4x-dQ&ab_channel=Florenciay",
          category: "cover",
          available: true,
        },
        {
          title: "O Fortuna",
          course: "Object Oriented Programming 1",
          src: "/Images/Youtube/ViolinCover_OFortuna.png",
          about: "#",
          date: "2018-09-08",
          link: "https://www.youtube.com/watch?v=oFDJ_QXg-eY&ab_channel=Florenciay",
          category: "cover",
          available: true,
        },
        {
          title: "A Million Dreams",
          course: "Object Oriented Programming 1",
          src: "/Images/Youtube/ViolinCover_Milliondreams.png",
          about:
            "When the movie The Greatest Showman came out, I was very excited to cover the soundtrack of this movie. The music of this movie is just great. The lyrics is so... recognizable. I had to cover a song! I chose a million dreams cause I found this one the most corresponding to me. I also have a million dreams. Sharing my content for a bigger public is one of them.",
          date: "2018-01-08",
          link: "https://www.youtube.com/watch?v=CtEyVETk0-c&ab_channel=Florenciay",
          category: "cover",
          available: true,
        },
        {
          title: "This Is What You Came For",
          course: "Object Oriented Programming 1",
          src: "/Images/Youtube/ViolinCover_CalvinHarris.png",
          about:
            'I am a huge fan of a lot of Youtubers (like Peter Hollens and ThePianoGuys). My dream is to become a YouTuber as well and with this video I made my "debut". I already play violin since the third year of my life and I really love this instrument. I also really like computers and everything that you can do with the help of a computer (editing, creating, etc.) .I think this is also one more reason why I want to become a YouTuber. This way I can combine two things I really love doing! I made this video myself without receiving any help from others (arranged the song for the violins, played it, then filmed and edited it). I am very happy about the final result. It might still not be perfect, but it’s pretty close!',
          date: "2016-07-16",
          link: "https://www.youtube.com/watch?v=caLW5nPCDzY&ab_channel=Florenciay",
          category: "cover",
          available: true,
        },
        {
          title: "John Legend - All of me",
          course: "Object Oriented Programming 1",
          src: "/Images/Youtube/ViolinCover_OnePlus_AllOfMe.png",
          about:
            "In summer 2015 I was searching for a new phone and my family recommended the OnePlus II. So I was waiting for the launch of it, when OnePlus organized a contest to win this phone for free! The #WWYDFT2-contest. We had to upload a creative video, promoting the phone, and then people could vote for you. The video with the most votes would get a free OnePlus II. I immediately grabbed my camera and filmed this movie. I had already an idea, but in another context. I am happy I could use the idea also for this contest. (with no background-information, I think this video is a little bit weird...) In the end, I was one of the winners of this contest. So I am very happy! (Thank You OnePlus)",
          date: "2015-08-01",
          link: "https://www.youtube.com/watch?v=NWL17xCFW58&ab_channel=Florenciay",
          category: "cover",
          available: true,
        },
      ],

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

<style scoped>
.portfolio-section {
  color: #92c7cf;
  padding: 0 10vw;
  z-index: 2;
}
.portfolio-section * {
  z-index: 11;
}

.lamp-portfolio-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.lamp {
  position: absolute;
  right: -18rem;
  bottom: -3rem;
  width: auto; /* Adjust size as needed */
  height: 50rem;
  z-index: 11;
}

.information-item
{
  font-weight: bold;
}
.slide-down-layer-information {
  z-index: 2; /* Ensure this layer is above the background and content */
  text-align: left;
  background-color: white;
  color: black;
  position: absolute;
  top: -100%;
  left: 0;
  padding: 1rem;
  width: 100%;
  font-size: 0.9rem;
  height: 100%;
  transition: transform 0.5s ease-in-out; /* Added transition */
  background: radial-gradient(circle, #d0c9bc, #ffffff, #a1a1a1);
  opacity: 0.9;
}

.grid-item-video:hover .slide-down-layer-information {
  transform: translateY(100%); /* Slide Down */
  visibility: visible;
}

.slide-down-layer-video {
  visibility: hidden;
  position: absolute;
  bottom: 0%;
  left: -100%;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-color: white;
  z-index: 3; /* Ensure this layer is above the background and content */
  transition: transform 0.5s ease-in-out; /* Added transition */
  background: linear-gradient(to left, transparent, #ffffff, transparent);
}

.slide-left-text-layer {
  visibility: hidden;
  font-size: 1.2rem;
  font-weight: 400;
  color: #92c7cf;
  padding: 0.5rem 1rem;
  text-align: left;
  border-radius: 0.5rem;

  position: absolute;
  bottom: -0.5rem;
  right: -100%;
  width: 100%;
  height: 1.5rem;
  opacity: 0.9;
  background-color: #92c7cf;
  background: linear-gradient(to bottom, transparent, #92c7cf, transparent);
  z-index: 4; /* Ensure this layer is above the background and content */
  transition: transform 0.2s ease-in-out; /* Added transition */
}
.grid-item-video:hover .slide-left-text-layer {
  transform: translateX(-100%); /* Slide Left */
  visibility: visible;
}
.grid-item-video:hover .slide-down-layer-video {
  transform: translateX(200%); /* Slide Right */
  visibility: visible;
}

.grid-item-video-img {
  z-index: 2;
  border-radius: 0.4rem;
  z-index: 1px;
  width: 100%;
  height: 10rem; /* Maintain aspect ratio */
  object-fit: cover; /* Ensure the image covers the container */
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 20px;
  padding: 20px;
}

.grid-container-video {
  /* background-color: #92C7CF; */
  margin-top: 1rem;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
}

.animation-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.4rem;
  overflow: hidden;
}

.grid-item {
  z-index: 2;
  text-align: center;
  height: 100%;
  position: relative;
  border-radius: 0.4rem;
}
.grid-item-video-title {
  font-size: 1.2rem;
  font-weight: 400;
  color: #b09d8f;
  padding: 0.5rem;
}
</style>
