<template>
  <div id="div-paint-area">
    <div>
      <label>Grid Size : </label>
      <select>
        <option value="16">16 x 16</option>
        <option value="24">24 x 24</option>
        <option value="32">32 x 32</option>
        <option value="64">64 x 64</option>
      </select>
    </div>
    <hr>
    <paint-grid :currentColor="currentColor"/>
    <div>
      <button type="button">Load Image</button>
      <button type="button">Save Image</button>
      <button type="button" @click="requestClearGrid()">Clear Grid</button>
    </div>
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
      requestClearGrid() {
        eventBus.$emit('modalClearGridRequested');
      }
    }
  };
</script>

<style scoped>
  #div-paint-area {
    flex: 1 0 auto;
    display: inline-block;
    background: #9F9F9F;
    text-align: center
  }

  label, select, button {
    font-size: 24px
  }

  button {
    padding: 0 8px
  }

  select {
    width: 6em;
  }

  hr {
    margin: 24px
  }
</style>