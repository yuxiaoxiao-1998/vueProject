<template>
  <div class="detailpoi">
    <div class="header">
      <mt-header title="积分问题" class="detailpoi-header">
        <!--登录返回-->
        <router-link :to="{path:'/points'}" slot="left">
          <span class="glyphicon glyphicon-menu-left"></span>
        </router-link>
      </mt-header>
    </div>
    <ul>
      <li>
        <h3>Q1: 怎么获得积分？</h3>
        <p>在线支付的订单将获得订单积分奖励：</p>
        <p>积分将在用户完成评价后获得。</p>
        <p>可获得积分=订单金额×10（即1元=10点积分）。</p>
        <p>订单金额指实际付款金额，不包含活动优惠金额。</p>
        <p>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</p>
      </li>
      <li>
        <h3>Q2: 积分用来做什么？</h3>
        <p>可以在积分商城兑换各种礼品。</p>
      </li>
      <li>
        <h3>Q3: 礼品兑换很多天了还没有收到，该怎么办？</h3>
        <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
      </li>
      <li>
        <h3>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</h3>
        <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
      </li>
    </ul>
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
    name: "Hydetailpoi",
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
  .detailpoi{
    width: 100%;
    height: 736px;
    background-color: #f5f5f5;

    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom:0;
    z-index: 30;
  }
  ul li {
    list-style: none;
    padding: 3%;
  }
  .detailpoi-header{
    width: 100%;
    height: 2rem;
    font-weight: 700;
    font-size: 1rem;
    padding-left: 2%;
  }
  ul h3{
    font-size: .8rem;
  }
  ul p{
    font-size: .6rem;
    padding-top: 2%;
  }
</style>
