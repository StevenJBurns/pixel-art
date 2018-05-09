<template>
  <div id="div-current-color">
    <h3>Current Color : <span id="spanCurrentColor">{{currentColor}}</span></h3>
    <div id="div-current-color-panel" :style="{background: currentColor}" />
  </div>
</template>


<script>
  import {eventBus} from "../main.js";

  export default {
    data() {
      return {
        //currentColor: 'red'
      }
    },
    props: ["currentColor"],
    created() {
      //eventBus.$on('change-current-color', (newColor) => this.currentColor = newColor);
    },
    beforeDestroy() {
      //eventBus.$off('change-current-color');
    },
    methods: {
      changeCurrentColor(newColor) {
        this.currentColor = newColor;
        console.log(this.currentColor);
        }
    }
  }
</script>


<style scoped>
  #div-current-color-panel {
    display: inline-block;
    border: 2px solid #202020;
    border-radius: 4px;
    margin: 8px auto;
    height: 72px;
    width: 72px;
  }
</style>