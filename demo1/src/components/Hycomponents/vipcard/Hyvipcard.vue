<template>
  <div class="vipcard">
    <router-view></router-view>
    <!--头部-->
    <div class="header">
      <mt-header title="会员列表" class="vipcard-header">
        <!--登录返回-->
        <router-link :to="{path:'profile'}" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- banner -->
    <div class="banner">
      <p>为账户<b>用户名</b>购买会员</p>
    </div>
    <!-- 会员特权 -->
    <div class="member">
      <p>会员特权</p>
      <p>
        <span>会员说明</span>
        <span class="el-icon-arrow-right"></span>
      </p>
    </div>
    <!-- 减免配送费 -->
    <section class="accep">
      <div class="accep_left">
        <img src="../imgages/18.jpeg" alt="">
      </div>
      <div class="accep_right">
        <h4>减免配送费</h4>
        <p>每月减免30单,每日可减免3单,每单最高减4元</p>
        <p>蜂鸟专送专享</p>
      </div>
    </section>
    <section class="accep">
      <div class="accep_left">
        <img src="../imgages/17.jpeg" alt="">
      </div>
      <div class="accep_right">
        <h4>减免配送费</h4>
        <p>每月减免30单,每日可减免3单,每单最高减4元</p>
        <p>蜂鸟专送专享</p>
      </div>
    </section>
    <!-- 开通会员 -->
    <div class="open_member">
      开通会员
    </div>
    <!-- 购买会员 -->
    <div class="buy_member">
      <div>
        <span>1个月</span>
        <span class="buy_span">¥20</span>
      </div>
    </div>
    <div class="buy_div" @click="$router.push({path:'/vipCard/payment'})">
      购买
    </div>
    <!-- 兑换会员 -->
    <div class="member buy_me">
      <p>兑换会员</p>
      <p>
        <span>使用卡号卡密</span>
        <span class="el-icon-arrow-right" @click="$router.push({path:'/vipCard/usercart'})"></span>
      </p>
    </div>
    <!-- 购买记录 -->
    <div class="member buy_me">
      <p>购买记录</p>
      <p>
        <span>开发票</span>
        <span class="el-icon-arrow-right" @click="$router.push({path:'/vipCard/invoiceRecord'})"></span>
      </p>
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
    margin:0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  .vipcard{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .vipcard-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
  }
  .banner{
    width: 100%;
    height: 2rem;
    padding: 3%;
    font-size: .6rem;
  }
  .member{
    width: 100%;
    height: 2rem;
    overflow: hidden;
    background-color: #fff;
    padding: 3%;
    display: flex;
    justify-content: space-between;
    font-size: .8rem;
  }
  .member span{
    font-size: .5rem;
    color: #ccc;
  }
  .accep{
    width: 100%;
    height: 4rem;
    padding:3%;
    overflow: hidden;
    font-size: .5rem;
    background-color: #fff;
    border-top: 1px solid #ccc;
  }
  .accep_left{
    float: left;
    padding-top: .7rem;
  }
  .accep_left img{
    width: 70%;
  }
  .accep_right{
    float: left;
    padding: .7rem 0 0 .1rem;
  }
  .open_member{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    background-color: #fff;
    margin-top: .4rem;
    padding: 3%;
  }
  .buy_member{
    width: 100%;
    height: 3rem;
    padding-left: 3%;
    background-color: #fff;
    border-top: 1px solid #ccc;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .buy_span{
    color: #f60;
  }
  .buy_div{
    width: 3rem;
    border: 1px solid#f60;
    color: #f60;
    border-radius: 10%;
    text-align: center;
    position: absolute;
    right: 1rem;
    top: 61%;
  }
  .buy_me{
    margin-top: .5rem;
  }

</style>

