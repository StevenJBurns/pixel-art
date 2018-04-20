<template>
  <div id="div-paint-area">
    <label>Paint Area : </label>
    <select>
      <option value="16">16 x 16</option>
      <option value="24">24 x 24</option>
      <option value="32">32 x 32</option>
      <option value="64">64 x 64</option>
    </select>
    <button>Clear Grid</button>
    <button>Save Image</button>
    <hr>
    <paint-grid />
  </div>
</template>

<script>
  import PaintGrid from "./PaintGrid";

  export default {
    components: {
      "paint-grid" : PaintGrid
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