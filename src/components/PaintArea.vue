<template>
  <div id="div-paint-area">
    <label>Paint Area : </label>
    <select>
      <option value="16">16 x 16</option>
      <option value="24">24 x 24</option>
      <option value="32">32 x 32</option>
      <option value="64">64 x 64</option>
    </select>
    <button type="button" @click="clearGrid()">Clear Grid</button>
    <button type="button">Save Image</button>
    <hr>
    <paint-grid :currentColor="currentColor"/>
    <hr>
  </div>
</template>

<script>
  import {eventBus} from "../main.js";
  import PaintGrid from "./PaintGrid";

  export default {
    components: {
      "paint-grid" : PaintGrid
    },
    props: ["currentColor"],
    methods: {
      clearGrid() {
        eventBus.$emit('show-clear-grid-modal');
        //eventBus.$emit('clear-grid', '#DFDFDF');
      }
    }
  };
</script>

<style scoped>
  #div-paint-area {
    flex: 1 0 auto;
    display: inline-block;
    background: #9F9F9F
  }

  label, select, button {
    font-size: 24px
  }

  select {
    width: 6em;
  }

  hr {
    margin: 24px
  }
</style>