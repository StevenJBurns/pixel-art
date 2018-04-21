<template>
  <div v-on:click="paintCell(currentColor)" :style="{background: drawColor}" />
</template>

<script>
  export default {
    data() {
      return {
        drawColor: ""
      }
    },
    props: ["currentColor"],
    computed: {
      computedColor() {
        return this.currentColor;
      }
    },
    created() {
      this.$eventHub.$on('clear-grid', this.paintCell)
    },
    beforeDestroy() {
        this.$eventHub.$off('clear-grid');
    },
    methods: {
      paintCell: function(c) {
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

