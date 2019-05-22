<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
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
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    //监听路由的路径，可以通过不同的路径去选择不同的切换效果
    watch: {
      '$route' (to, from) {
        if(to.path == '/'){
          this.transitionName = 'slide-right';
        }else{
          this.transitionName = 'slide-left';
        }
      }
    }

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
  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
