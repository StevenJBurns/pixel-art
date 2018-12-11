<template>
  <transition-group name="recent-color-list" tag="p">
    <div class="recent-color-item"
         v-for="(color) of recentColors"
         :key="color" 
         :style="{background: color}"
         @click="changeCurrentColor(color)" />
  </transition-group>
</template>

<script>
  import {eventBus} from "../../main.js";

  export default {
    data() {
      return {
      }
    },
    props: ["recentColors"],
    created: function() {
      // eventBus.$on('change-current-color', this.changeCurrentColor);
    },
    beforeDestroy: function() {
      // eventBus.$off('change-current-color');
    },
    methods: {
      changeCurrentColor(newColor) {
        eventBus.$emit('change-current-color', newColor);
      }
    }
  }
</script>

<style scoped>
  .recent-color-item {
    height: 32px;
    width: 32px;
    border: 2px solid #202020;
    border-radius: 4px;
    transition: all 1s;
    display: inline-block;
    margin: 2px;
  }

  .recent-color-list-enter {
    opacity: 1;
    transform: translateX(96px);
  }

  .recent-color-list-leave-to {
    opacity: 0;
    transform: translateX(-256px);
  }

  .recent-color-list-leave-active {
    position: absolute;
  }
</style>