<template>
  <div class="payment">
    <!--头部-->
    <div class="header">
      <mt-header title="在线支付" class="payment-header">
        <!--登录返回-->
        <mt-button icon="back" slot="left" @click="$router.push({path:'/vipCard'})"></mt-button>
      </mt-header>
    </div>
    <!-- 倒计时 -->
    <div class="pay">
      <p>支付剩余时间</p>
      <p class="countdown">
        <span>00 :</span>
        <span>{{min}} :</span>
        <span>{{seconds}}</span>
      </p>
    </div>
    <!-- 选择支付方式 -->
    <div class="payment_way">
      <div class="pay_top">
        <p>选择支付方式</p>
      </div>
      <div class="alipay">
        <img class="logo" src="../imgages/15.png" alt="">
        <p class="txt">支付宝</p>
        <img class="logo1" src="../imgages/images/未选中.png" alt="" @click="aliclick">
        <img v-if="isShow" class="logo1" src="../imgages/images/选中.png" alt="" >
      </div>
      <div class="wechat">
        <img class="logo" src="../imgages/10.png" alt="">
        <p class="txt">微信</p>
        <img class="logo1" src="../imgages/images/未选中.png" alt="" @click="weclick">
        <img v-if="isShow1" class="logo1" src="../imgages/images/选中.png" alt="" >
      </div>
    </div>
    <!-- 确认支付 -->
    <el-button class="pay_success" type="success" @click="paySuccess">确认支付</el-button>
    <!-- 弹框 -->
    <div class="pop_up animation bounceIn"
         v-if="ispart">
      <p class="el-icon-warning"></p>
      <br>
      <span>暂未开通支付功能</span>
      <mt-button type="default" size="large"
                 @click="ispart=false">确认</mt-button>
    </div>
    <!-- 弹框1 -->
    <div class="pop_up1 animation bounceIn"
         v-if="ispart1">
      <p class="el-icon-warning"></p>
      <br>
      <span>当前环境无法支付,请打开官方APP进行付款</span>
      <mt-button type="default" size="large"
                 @click="$router.push({path:'/order'})" >确认</mt-button>
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
        time:'900',
        isShow:false,
        isShow1:false,
        ispart:true,
        ispart1:false,
        min:'',
        seconds:'',
      }
    },
    created() {
      this.countdown ();
    },
    methods:{
      // 封装倒计时  调用
      countdown () {
        let Time1 = setInterval(()=>{
          this.time -= 1;
          this.min = parseInt(this.time / 60);
          this.seconds = (this.time % 60);
        },1000)
        if (this.time == 0) {
          clearInterval(Time1);
        }
      },
      aliclick(){
        this.isShow = true;
        this.isShow1 = false;
      },
      weclick(){
        this.isShow = false;
        this.isShow1 = true;
      },
      paySuccess(){
        this.ispart1 = true;
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
  .payment{
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
  .payment-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
  }
  .pay{
    width:100%;
    height: 6rem;
    background-color: #fff;
    text-align: center;
    font-size: .6rem;
    padding-top: 1.7rem;
    color: #ccc;
  }
  .countdown{
    font-size: 1.5rem;
    color: #000;
  }
  .payment_way{
    width: 100%;
    height: 10rem;
  }
  .pay_top{
    width:100%;
    height: 2rem;
    padding: 3%;
    font-size: .7rem;
    color: #666;
  }
  /* 支付宝 */
  .alipay{
    width:100%;
    height: 4rem;
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #ccc;
  }
  .logo{
    width: 13%;
    position: absolute;
    left: 3%;
    top: 30%;
  }
  .txt{
    font-size: .8rem;
    position: absolute;
    left: 20%;
    top: 40%;
  }
  .logo1{
    width: 10%;
    position: absolute;
    right: 3%;
    top: 37%;
  }
  .wechat{
    width:100%;
    height: 4rem;
    position: relative;
    background-color: #fff;
  }
  .pay_success{
    width:94%;
    height: 2rem;
    font-size: .8rem;
    margin:5% 0 0 3%;
    background-color: #4cd964;
  }

  /* 弹框 */
  .pop_up {
    width: 70%;
    height: 6.9rem;
    background: #f5f5f5;
    text-align: center;
    border-radius: 5%;
    position: absolute;
    left: 15%;
    top: 35%;
  }
  /* 手机弹框 */
  .pop_up p {
    font-size: 2rem;
    padding: 0.8rem 0;
  }
  .pop_up span {
    font-size: 0.7rem;
    color: #666;
  }
  .pop_up button {
    background-color: green;
    color: #fff;
    margin-top: 0.6rem;
  }
  /* 弹框1 */
  .pop_up1 {
    width: 70%;
    height: 6.9rem;
    background: #f5f5f5;
    text-align: center;
    border-radius: 5%;
    position: absolute;
    left: 15%;
    top: 55%;
  }
  /* 手机弹框 */
  .pop_up1 p {
    font-size: 2rem;
    padding: 0.8rem 0;
  }
  .pop_up1 span {
    font-size: 0.7rem;
    color: #666;
  }
  .pop_up1 button {
    background-color: green;
    color: #fff;
    margin-top: 0.6rem;
  }
</style>
