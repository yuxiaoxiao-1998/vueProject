<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {} from './js/resize'
  import YxCity from "./components/YxCity";
  import SearchCity from "./components/SearchCity";
  import Vue from 'vue';
export default {
  name: 'App',
  components: {SearchCity, YxCity},
  mounted () {
    Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0').then((res)=>{
      console.log(res.data);
      // this.itemArr = res.data;
      this.$store.state.packNum = res.data;
    }).catch((err)=>{
      console.log("请求错误",error);
    });
  },

}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/swiper/dist/css/swiper.css";

  html,body{
    font-size: 20px;
    background: #F5F5F5;
  }
 *{
    padding: 0;
    margin: 0;
 }
</style>
