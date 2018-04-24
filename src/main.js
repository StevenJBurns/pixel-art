import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

// State management without Vuex
export const eventBus = new Vue({});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
