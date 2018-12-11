<template>
  <div id="div-paint-grid" v-on:mousedown="isMouseDown=true" v-on:mouseup="isMouseDown=false">
    <paint-cell v-for="i in 1024" :key="i" :currentColor="currentColor" :isMouseDown="isMouseDown" />
  </div>
</template>

<script>
  import PaintCell from "./PaintCell";

  export default {
    data() {
      return {
        isMouseDown: null
      }
    },
    components: {
      "paint-cell" : PaintCell
    },
    props: ["currentColor"]
  };
</script>

<style scoped>
  #div-paint-grid {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(32, 16px);
    justify-content: center;
    align-content: center;
    margin-bottom: 16px
  }
</style>
