<template>
  <main id="app">
    <color-select :currentColor="currentColor" :recentColors="recentColors" v-on:change-current-color="currentColor=$event; updateRecentColors($event)" />
    <paint-area :currentColor="currentColor"/>
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
    },
    created() {
      this.$eventHub.$on('change-current-color', this.updateRecentColors);
    },
    beforeDestroy() {
      this.$eventHub.$off('change-current-color');
    },
    methods: {
      updateRecentColors(val) {
        console.log(`New Color : ${val}`);
        
        if (this.recentColors.length >= 8)
          this.recentColors.pop();
        
        this.recentColors.push(val);
        console.log(`Recent Color Array : ${this.recentColors}`);
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
