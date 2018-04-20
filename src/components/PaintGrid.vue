<template>
  <div id="divGrid">
    <paint-cell v-for="i in 256" v-bind:key="i" />
  </div>
</template>

<script>
  import PaintCell from "./PaintCell";

  export default {
    components: {
      "paint-cell" : PaintCell
    }
  };
</script>

<style scoped>
  #divGrid {
    margin: 12px auto;
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(16, 12px);
  }
</style>