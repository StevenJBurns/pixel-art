<template>
  <div>
    <div  class="div-recent-color-panel"
          v-for="color of recentColors"
          :key="color.index"
          :style="{background: color}">
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
      }
    },
    props: ["recentColors"]
  }
</script>


<style scoped>
  .div-recent-color-panel {
    display: inline-block;
    margin: 0 4px;
    height: 48px;
    width: 48px;
  }
</style>