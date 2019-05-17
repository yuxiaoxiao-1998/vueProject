<template>
  <div class="usercart">
    <!--头部-->
    <div class="header">
      <mt-header title="兑换会员" class="usercart-header">
        <!--登录返回-->
        <mt-button icon="back" slot="left" @click="$router.push({path:'/vipCard'})"></mt-button>
      </mt-header>
    </div>
    <!-- banner -->
    <div class="user_banner">
      <p>成功兑换后将关联到当前账号:<b>用户名</b></p>
    </div>
    <!-- 输入框 -->
    <div class="user_input">
      <input type="text" maxlength="10" placeholder="  请输入10位卡号">
      <input type="password" maxlength="6" placeholder="  请输入6位密码">
    </div>
    <!-- 兑换按钮 -->
    <div class="user_me">
      <el-button type="primary" plain @click="isShow=true">兑换</el-button>
    </div>
    <!-- foot -->
    <div class="foot">
      <h4>——温馨提示——</h4>
      <p>新兑换的会员服务，权益以「会员说明」为准。</p>
      <p>月卡：<b>30次</b>减免配送费。</p>
      <p>季卡：<b>90次</b>减免配送费。</p>
      <p>年卡：<b>360次</b>次减免配送费。</p>
      <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
    </div>
    <!-- 弹框 -->
    <div class="pop_up animation bounceIn"
         v-if="isShow">
      <p class="el-icon-warning"></p>
      <br>
      <span>无效的卡号</span>
      <mt-button type="default" size="large"
                 @click="isShow=false">确认</mt-button>
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
    name: "Hyorder",
    data () {
      return {
        isShow:false,
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
  .usercart{
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
  .usercart-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
  }
  .user_banner{
    width: 100%;
    height: 2rem;
    padding: 5% 0 0 3%;
    font-size: .6rem;
  }
  .user_input input{
    width: 100%;
    height: 1.5rem;
    border: none;
    outline:none;
    border-bottom: 1px solid #ccc;
  }
  .user_me{
    width: 94%;
    margin:  5% 0 0 3%;
  }
  .user_me button{
    width: 100%;
    height: 1.5rem;
    background-color: green;
    color: #fff;
  }
  .foot{
    width: 90%;
    height: 4rem;
    font-size: .5rem;
    color: #ccc;
    margin: 5% ;

  }
  .foot h4{
    text-align: center;
    margin-bottom: 2%;
  }

  /* 弹框 */
  .pop_up {
    width: 70%;
    height: 6.9rem;
    background: #fff;
    text-align: center;
    border-radius: 5%;
    position: absolute;
    left: 15%;
    top: 25%;
  }
  /* 手机弹框 */
  .pop_up p {
    font-size: 2rem;
    padding: 0.8rem 0;
  }
  .pop_up span {
    font-size: 0.7rem;
    color: #ccc;
  }
  .pop_up button {
    background-color: green;
    color: #fff;
    margin-top: 0.6rem;
  }
</style>
