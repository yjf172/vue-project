<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view/>
  </div>
</template>

<script>
  import myHeader from "./components/header/header.vue"
  export default {
    name: 'App',
    components: {
        myHeader
    }
  }
</script>

<style>
  @import "./common/css/common.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 980px;
  margin: 0 auto;
}
</style>
