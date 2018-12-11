/* Vue Dependencies */
import Vue from "vue";
import './plugins/vuetify'

/* Local Dependencies */
import App from "./app/App";


Vue.config.productionTip = false;

/* State management without Vuex --> eventBus; a new Vue instance to carry state */
export const eventBus = new Vue({});

/* eslint-disable no-new */

new Vue({
  el: '#vue-root',
  render: h => h(App)
})
