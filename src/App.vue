<template>
  <main id="app">
    <color-select :currentColor="currentColor" v-on:change-current-color="currentColor=$event" />
    <paint-area :currentColor="currentColor"/>
  </main>
</template>

<script>
  import ColorSelect from "./components/ColorSelect";
  import PaintArea from "./components/PaintArea";

  console.log(this.props)

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
    },
    methods: {

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
