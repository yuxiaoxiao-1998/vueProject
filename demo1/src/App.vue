<template>
  <div id="app">
    <!--城市页面-->
    <YxCity></YxCity>
    <!--搜索页面-->
    <!--<SearchCity></SearchCity>-->
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
  html,body{
    font-size: 20px;
  }
</style>
