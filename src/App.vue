<template>
  <main id="app">
    <color-select :currentColor="currentColor" :recentColors="recentColors" />
    <paint-area :currentColor="currentColor"/>
    <clear-grid-modal v-show="showClearGridModal" />
  </main>
</template>

<script>
  import {eventBus} from "./main.js";
  import ColorSelect from "./components/ColorSelect";
  import PaintArea from "./components/PaintArea";
  import ClearGridModal from "./components/ClearGridModal"

  export default {
    name: 'App',
    components: {
      "color-select": ColorSelect,
      "paint-area": PaintArea,
      "clear-grid-modal": ClearGridModal
    },
    data() {
      return {
        gridDimension : 16,
        currentColor : 'Green',
        recentColors : [],
        showClearGridModal: false
      }
    },
    created() {
      eventBus.$on('change-current-color', this.changeCurrentColor);
      eventBus.$on('show-clear-grid-modal', this.toggleClearGridModal);
    },
    beforeDestroy() {
      eventBus.$off('change-current-color');
      eventBus.$off('show-clear-grid-modal');
    },
    methods: {
      changeCurrentColor(newColor) {
        console.log(`New Color: ${newColor}`);
        
        this.currentColor = newColor;

        if (this.recentColors.includes(newColor)) return;
        
        if (this.recentColors.length >= 8)
          this.recentColors.splice(0, 1);

        this.recentColors.push(newColor);
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
  }
</style>
