<template>
  <main id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </main>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        "currentColor" : '',
        "recentColors" : []
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
