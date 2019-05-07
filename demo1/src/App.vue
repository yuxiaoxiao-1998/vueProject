<template>
  <div id="app">
    <YxCity></YxCity>
  </div>
</template>

<script>
  import {} from './js/resize'

  import YxCity from "./components/YxCity";
export default {
  name: 'App',
  components: {YxCity},
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  html,body{
    font-size: 20px;
  }
</style>
