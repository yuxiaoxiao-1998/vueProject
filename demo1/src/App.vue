<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {} from './js/resize'

  import YxCity from "./components/YxCity";
  import SearchCity from "./components/SearchCity";
export default {
  name: 'App',
  components: {SearchCity, YxCity},
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/swiper/dist/css/swiper.css";
  html,body{
    font-size: 20px;
  }
 *{
    padding: 0;
    margin: 0;
 }
</style>
