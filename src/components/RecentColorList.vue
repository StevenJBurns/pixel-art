<template>
  <transition-group name="recent-color-list" tag="p">
    <div  class="recent-color-item"
          v-for="(color, index) of recentColors"
          :key="index" 
          :style="{background: color}"
          @click="changeCurrentColor(color)" />
  </transition-group>
</template>

<script>
  import {eventBus} from "../main.js";

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
    height: 48px;
    width: 48px;
    border: 4px solid #202020;
    border-radius: 50%;
    transition: all 1s;
    display: inline-block;
    margin-right: 8px;
  }

  .recent-color-list-enter, .recent-color-list-leave-to {
    opacity: 0;
    transform: translateY(96px);
  }

  .recent-color-list-leave-active {
    position: absolute;
  }
</style>