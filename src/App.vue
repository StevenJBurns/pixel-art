<template>
  <main id="app">
    <color-select v-bind:currentColor="currentColor" />
    <paint-area v-bind:currentColor="currentColor"/>
  </main>
</template>

<script>
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
        "gridDimension" : 16,
        "currentColor" : 'Green',
        "recentColors" : []
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
