<template>
  <div class="order">
    <!--头部-->
    <div class="header">
      <mt-header title="订单列表" class="order-header">
        <!--登录返回-->
        <router-link :to="{path:'profile'}" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
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
    name: "Hyorder"
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
  .order{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .order-header{
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    padding-left: 2%;
  }
</style>
