import { createApp } from 'vue';
import './style.css';
import "@mdi/font/css/materialdesignicons.css";

// Components
import App from './App.vue';
import SectionHeader from './components/SectionHeader.vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
const app = createApp(App);

app.component('SectionHeader', SectionHeader);
app.use(vuetify);
app.mount('#app');
