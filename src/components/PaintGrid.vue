<template>
  <div id="div-paint-grid">
    <paint-cell v-for="i in 1024" v-bind:key="i" :currentColor="currentColor"/>
  </div>
</template>

<script>
  import PaintCell from "./PaintCell";

  export default {
    components: {
      "paint-cell" : PaintCell
    },
    props: ["currentColor"]
  };
</script>

<style scoped>
  #div-paint-grid {
    margin-bottom: 16px;
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(32, 16px);
    justify-content: center;
    align-content: center
  }
</style>