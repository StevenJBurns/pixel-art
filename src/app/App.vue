<template>
  <main>  
  <v-app app dark>
    <v-content>
      <color-select :currentColor="currentColor" :recentColors="recentColors" />
      <paint-area :currentColor="currentColor"/>
      <modal-clear-grid v-show="showClearGridModal" />
    </v-content>
  </v-app>
  </main>
</template>

<script>
  import {eventBus} from "../main.js";
  import ColorSelect from "../components/color/ColorSelect";
  import PaintArea from "../components/paint/PaintArea";
  import ModalClearGrid from "../components/modals/ModalClearGrid"

  export default {
    name: 'App',
    components: {
      "color-select": ColorSelect,
      "paint-area": PaintArea,
      "modal-clear-grid": ModalClearGrid
    },
    data() {
      return {
        gridDimension : 16,
        cellDimension : 8,
        currentColor : '',
        recentColors : [],
        showClearGridModal: false
      }
    },
    created() {
      eventBus.$on('change-current-color', this.changeCurrentColor);
      eventBus.$on('clearRecentColors', this.onClearRecentColors);
      eventBus.$on('modalClearGridRequested', this.toggleClearGridModal);

      // if (this.localStorage.recentColors && this.localStorage.currentColor) {
      //   this.recentColors = JSON.parse(localStorage.recentColors);
      //   this.currentColor = JSON.parse(localStorage.currentColor);
      // }
    },
    beforeDestroy() {
      eventBus.$off('change-current-color');
      eventBus.$off('clearRecentColors');
      eventBus.$off('modalClearGridRequested');
    },
    methods: {
      changeCurrentColor(newColor) {
        this.currentColor = newColor;

        if (this.recentColors.includes(newColor)) return;
        
        if (this.recentColors.length >= 8)
          this.recentColors.shift();

        this.recentColors.push(newColor);

        localStorage.currentColor = JSON.stringify(this.currentColor);
        localStorage.recentColors = JSON.stringify(this.recentColors);
      },
      onClearRecentColors() {
        while(this.recentColors.length) this.recentColors.pop();
        this.recentColors.push(this.currentColor);
        localStorage.recentColors = JSON.stringify(this.recentColors);
      },
      toggleClearGridModal() {
        this.showClearGridModal = !this.showClearGridModal;
      }
    }
  };
</script>

<style>
  #app {
    flex: 1 0 auto;
    display: flex;
    flex-flow: row wrap;
    color: #DFDFDF;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: auto;
  }
</style>
