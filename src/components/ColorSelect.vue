<template>
  <div id="div-color-select">
    <h2>Color Select</h2>
    <h4>W3C Named Colors</h4>
    <div id="div-W3C-colors"></div>
    <hr>
    <label>Or choose from 16,777,216 colors : </label>
    <input type="color" name="input-color-select" @change="changeCurrentColor($event.target.value)">
    <hr>
    <h4>Recently Used Colors</h4>
    <recent-color-list :recentColors="recentColors" />
    <button type="button">Clear Recent Colors</button>
    <hr>
    <current-color-panel :currentColor="currentColor" />
  </div>
</template>

<script>
  import {eventBus} from "../main.js";
  import RecentColorList from "./RecentColorList";
  import CurrentColorPanel from "./CurrentColorPanel";

  export default {
    components: {
      "recent-color-list": RecentColorList,
      "current-color-panel": CurrentColorPanel
    },
    data() {
      return {
      }
    },
    props: ["currentColor", "recentColors"],
    methods: {
      changeCurrentColor(newColor) {
        eventBus.$emit('change-current-color', newColor)
      }
    }
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

  button {
    font-size: 24px;
    margin: 8px auto;
    padding: 0 8px
  }

  hr {
    margin: 8px 24px
  }

  #div-current-color-panel {
    display: inline-block;
    border: 4px solid #202020;
    border-radius: 50%;
    margin: 8px auto;
    height: 72px;
    width: 72px;
  }
</style>