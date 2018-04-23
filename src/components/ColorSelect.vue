<template>
  <div id="div-color-select">
    <h2>Color Select</h2>
    <h4>W3C Named Colors</h4>
    <div id="div-W3C-colors"></div>
    <hr>
    <label>Or choose from 16,777,216 colors : </label>
    <input type="color" name="input-color-select" v-on:input="$emit('change-current-color', $event.target.value)">
    <hr>
    <h4>Recently Used Colors</h4>
    <recent-color-list :recentColors="recentColors" />
    <!-- <ul>
      <li v-for="color of recentColors" :key="color.index">{{color}}</li>
    </ul> -->
    <hr>
    <div id="div-current-color">
      <h3>Current Color : <span id="spanCurrentColor">{{currentColor}}</span></h3>
      <div id="div-current-color-panel" v-bind:style="{background: currentColor}" />
    </div>
  </div>
</template>

<script>
  import RecentColorList from "./RecentColorList";

  export default {
    components: {
      "recent-color-list": RecentColorList
    },
    props: ["currentColor", "recentColors"]
  };
</script>

<style scoped>
  #div-color-select {
    flex: 1 0 auto;
    text-align: center;
    background: #708090;
    display: inline-block;
  }

  h2 {
    padding: 16px 0;
    background: #2F3F4F
  }

  h4 {
    padding: 16px 0;
  }

  hr {
    margin: 8px 24px
  }

  #div-current-color-panel {
    display: inline-block;
    margin: 8px auto;
    height: 72px;
    width: 72px;
  }
</style>