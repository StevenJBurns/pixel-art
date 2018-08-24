/* Vue Imports */
import Vue from "vue";

/* Component Imports */
import App from "./App";


Vue.config.productionTip = false;

/* State management without Vuex -- the eventBus */
/* Creates a new Vue instance to carry state */
export const eventBus = new Vue({});

/* eslint-disable no-new */

new Vue({
  el: '#app',
  render: h => h(App)
})
