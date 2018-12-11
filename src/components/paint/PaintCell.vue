<template>
  <div v-on:click="paintCell(currentColor)" v-on:mouseover="paintCell(currentColor)" :style="{background: drawColor}" />
</template>

<script>
  import {eventBus} from "../../main.js";

  export default {
    data() {
      return {
        drawColor: null
      }
    },
    props: ["currentColor", "isMouseDown"],
    created() {
      eventBus.$on('clear-grid', this.clearCell);
    },
    beforeDestroy() {
      eventBus.$off('clear-grid');
    },
    methods: {
      paintCell(c) {
        if (this.isMouseDown)
          this.drawColor = c;
      },
      clearCell(clearColor) {
        this.drawColor = clearColor;
      }
    }
  };
</script>

<style scoped>
  div {
    height: 16px;
    width: 16px;
    color: #0F0F0F;
    background: #DFDFDF;
    display: inline-block
  }
</style>

