<template>
  <div :style="{background: currentColor}" />
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: ["currentColor"]
  };
</script>

<style scoped>
  div {
    height: 16px;
    width: 16px;
    color: #0F0F0F;
    background: #DFDFDF;
    display: inline-block
  }
</style>

