import vue from "@vitejs/plugin-vue";
import vuetify from 'vite-plugin-vuetify';
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
  ],
});
