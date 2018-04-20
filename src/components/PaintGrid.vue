<template>
  <div id="divGrid">
    <paint-cell v-for="i in 2304" v-bind:key="i" />
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
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(48, 12px);
    justify-content: center
  }
</style>