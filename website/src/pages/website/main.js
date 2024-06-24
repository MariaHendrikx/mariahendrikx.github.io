import { createApp } from 'vue';
import WebsitePage from './WebsitePage.vue';
import router from './router'; // Import the router instance
import vuetify from '@/plugins/vuetify';
import { loadFonts } from '@/plugins/webfontloader';

import '../../main.css';

loadFonts();

const app = createApp(WebsitePage);
app.use(router); // Use the router instance
app.use(vuetify);
app.mount('#app');
