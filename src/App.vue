<template>
  <main id="app">
    <color-select />
    <paint-area />
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
        "currentColor" : '',
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
