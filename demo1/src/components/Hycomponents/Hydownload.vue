<template>
  <div class="download">
    <mt-header title="下载" class="download-header">
      <!--登录返回-->
      <router-link :to="{path:'profile'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="banner">
      <img src="../imgages/下载.jpg" alt="">
      <p>下载饿了么APP</p>
      <mt-button type="default" size="large" @click="downClick">下载</mt-button>
    </div>
    <!-- 弹框 -->
    <div class="part animation bounceIn" v-if="isShow">
      <p class="el-icon-warning"></p>
      <br>
      <span>IOS用户请前往AppStore下载</span>
      <mt-button type="default" size="large" @click="isShow=false">确认</mt-button>
    </div>
  </div>
</template>

<script>
  // 引入mint-ui 头部
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  // 引入Element
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);
  export default {
    name: "Hydownload",
    data(){
      return{
        isShow:false,
      }
    },
    methods:{
      downClick(){
        this.isShow = !this.isShow;
      }
    }
  }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  .download{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: relative;

  }
  .download-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
  }
  .banner{
    width: 94%;
    margin-left: 3%;
    margin-top: 5%;
    text-align: center;
  }
  .banner img{
    border-radius: 5%;
  }
  .banner p{
    color: #ccc;
    padding: 5% 0;
  }
  .banner button{
    background-color: green;
    color: #fff;
  }
  .part{
    width: 70%;
    height: 6.9rem;
    background: #fff;
    text-align: center;
    border-radius: 5%;
    position: absolute;
    left:15%;
    top: 35%;
  }
  .part p{
    font-size: 2rem;
    padding: .8rem 0;
  }
  .part span{
    font-size: .7rem;
    color: #ccc;

  }
  .part button{
    background-color: green;
    color: #fff;
    margin-top: .8rem;
  }
</style>
