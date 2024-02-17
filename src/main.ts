import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

createApp(App)
  .use(createVuetify())
  .mount("#vue-root");
