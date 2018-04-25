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
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal {
    width: 50%;
    padding: 24px;
    background: #DFDFDF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  button {
    width: 300px;
    margin: 4px auto;
    padding: 2px 8px;
    font-size: 20px
  }
</style>