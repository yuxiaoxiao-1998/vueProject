<template>
  <div class="detail">
    <div class="header">
      <mt-header title="余额问题" class="detail-header">
        <!--登录返回-->
        <router-link :to="{path:'/balance'}" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <ul>
      <li>
        <h3>Q1: 使用余额的条件</h3>
        <p>为了保护账户安全,使用余额前必须先绑定手机号</p>
      </li>
      <li>
        <h3>Q2: 余额可以怎么用？</h3>
        <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
      </li>
      <li>
        <h3>Q3:我要如何提现？</h3>
        <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
      </li>
      <li>
        <h3>Q4:为什么会提现失败？</h3>
        <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
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
    name: "Hydetail",
  }
</script>

<style scoped>
  html,body{
    width: 100%;
    height:100%;
  }
  *{
    padding: 0;
    margin: 0;
  }
  .detail{
    /* width: 100%;
    height: 100%;
    background-color: #f5f5f5; */

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 100;
  }
  ul li {
    list-style: none;
    padding: 0 .5rem;
    line-height: 1rem;
  }
  .detail-header{
    width: 100%;
    height: 2rem;
    font-weight: 700;
    font-size: .8rem;
    padding-left: .5rem;
  }
  ul h3{
    font-size: .7rem;
    padding-top: .5rem;
  }
  ul p{
    font-size: .5rem;
    padding-top: .5rem;
  }
</style>
