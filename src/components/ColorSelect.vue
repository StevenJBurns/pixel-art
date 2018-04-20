<template>
  <div id="divColorSelect">
    <h2>Color Palettes</h2>
    <hr />
    <h4>W3C Named Colors</h4>
    <div id="divW3C"></div>
    <hr />
    <label>Or choose from 16,777,216 colors : <input type="color" name="inputColorSelect"></label>
    <hr />
    <h4>Current Color</h4>
    <div id="divCurrentColor">
      <span id="spanCurrentColor">Gray</span>
    </div>
  </div>
</template>

<script>
  export default {
    
  };
</script>

<style scoped>
  #divColorSelect {
    flex: 1 0 auto;
    background: darkgreen;
    display: inline-block;
  }
</style>