<template>
  <div>
    <div class="div-recent-color-panel" v-for="(color, index) of recentColors" :key="index" 
          :style="{background: color}" @click="changeCurrentColor(color)" />
  </div>
</template>

<script>
  import {eventBus} from "../main.js";

  export default {
    data() {
      return {
      }
    },
    props: ["recentColors"],
    created: function() {
      // eventBus.$on('change-current-color', this.changeCurrentColor);
    },
    beforeDestroy: function() {
      // eventBus.$off('change-current-color');
    },
    methods: {
      changeCurrentColor(newColor) {
        eventBus.$emit('change-current-color', newColor);
      }
    }
  }
</script>

<style scoped>
  .div-recent-color-panel {
    display: inline-block;
    border: 4px solid #202020;
    border-radius: 50%;
    margin: 0 4px;
    height: 48px;
    width: 48px;
  }
</style>