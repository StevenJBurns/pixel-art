<template>
  <main id="app">
    <color-select :currentColor="currentColor" :recentColors="recentColors" />
    <paint-area :currentColor="currentColor"/>
  </main>
</template>

<script>
  import {eventBus} from "./main.js";
  import ColorSelect from "./components/ColorSelect";
  import PaintArea from "./components/PaintArea";

  export default {
    name: 'App',
    components: {
      "color-select": ColorSelect,
      "paint-area": PaintArea
    },
    data() {
      return {
        gridDimension : 16,
        currentColor : 'Green',
        recentColors : []
      }
    },
    created() {
      eventBus.$on('change-current-color', this.changeCurrentColor)
    },
    beforeDestroy() {
      eventBus.$off('change-current-color');
    },
    methods: {
      changeCurrentColor(newColor) {
        console.log(`New Color: ${newColor}`);
        
        this.currentColor = newColor;

        if (this.recentColors.includes(newColor)) return;

        if (this.recentColors.length >= 8)
          this.recentColors.shift();
        
        this.recentColors.push(newColor);
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
