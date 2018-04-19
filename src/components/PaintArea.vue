<template>
  <div id="divPaintArea">
    <div id="div-grid-wrapper">
      <div id="divGrid">
        <paint-cell v-for="i in 1024" v-bind:key="i" />
      </div>
    </div>
    <hr />
    <h4>Current Color</h4>
    <div id="divCurrentColor">
      <span id="spanCurrentColor">Gray</span>
    </div>
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
  #divPaintArea {
    background: #9F9F9F
  }

  #div-grid-wrapper {
    display: inline-block;
    margin: 24px auto;
  }

  #divGrid {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(32, 16px);
  }

  hr {
    margin: 24px
  }
</style>