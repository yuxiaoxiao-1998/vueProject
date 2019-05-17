<template>
  <div class="invoiceRecord">
    <!--头部-->
    <div class="header">
      <mt-header title="购买记录" class="invoiceRecord-header">
        <!--登录返回-->
        <mt-button icon="back" slot="left" @click="$router.push({path:'/vipCard'})"></mt-button>
      </mt-header>
    </div>
    <div class="inv_pic">
      <img src="../../../imgages/images/no-log.png" alt="">
      <br>
      <br>
      <span>没有购买记录</span>
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
    name: "HyinvoiceRecord"
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
  .invoiceRecord{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
  }
  .invoiceRecord-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
  }
  .inv_pic{
    width: 8rem;
    height: 8rem;
    /* background: yellow; */
    text-align: center;
    font-size: .5rem;
    color: #ccc;
    margin: 20%  0 0 27%;
  }
  .inv_pic img{
    width: 100%;
  }
</style>
