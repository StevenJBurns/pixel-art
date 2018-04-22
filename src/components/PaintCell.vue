<template>
  <div v-on:click="paintCell(currentColor)" v-on:mouseover="paintCell(currentColor)" :style="{background: drawColor}" />
</template>

<script>
  export default {
    data() {
      return {
        drawColor: ""
      }
    },
    props: ["currentColor", "isMouseDown"],
    computed: {
      computedColor() {
        return this.currentColor;
      }
    },
    created() {
      this.$eventHub.$on('clear-grid', this.clearCell);
    },
    beforeDestroy() {
        this.$eventHub.$off('clear-grid');
    },
    methods: {
      paintCell(c) {
        if (this.isMouseDown)
          this.drawColor = c;
      },
      clearCell(c) {
        this.drawColor = c;
      }
    }
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

