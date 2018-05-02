<template>
  <div class="modal-backdrop">
    <div class="modal">
      <button type="button" @click="closeModalNoSave">Clear Grid (No Save)</button>
      <button type="button">Save Image Then Clear Grid</button>
      <button type="button" @click="closeModalCancel">Cancel Clear Grid</button>
    </div>
  </div>
</template>


<script>
  import {eventBus} from "../main.js";

  export default {
    name: 'clear-grid-modal',
    methods: {
      closeModalCancel() {
        eventBus.$emit('modalClearGridRequested');
      },
      closeModalNoSave() {
        eventBus.$emit('clear-grid');
        eventBus.$emit('modalClearGridRequested');
      },
      closeModalAndSave() {

      }
    }
  }
</script>


<style scoped>
  .modal-backdrop {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }

  .modal {
    width: 288px;
    padding: 24px;
    background: #BFBFBF;
    border: 4px solid #DFDFDF;
    /* box-shadow: 2px 2px 20px 1px; */
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  button {
    width: 240px;
    margin: 4px;
    padding: 2px 4px;
    font-size: 16px
  }
</style>