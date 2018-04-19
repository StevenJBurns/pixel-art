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
        "currentColor" : '',
        "recentColors" : []
      }
    }
  }
</script>

<style>
  #app {
    display: grid;
    flex: 1 0 auto;
    grid-template-columns: 1fr 2fr;
    color: #DFDFDF;
    
    text-align: center;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
