<template>
  <div class="profile">
    <router-view></router-view>
    <!--头部-->
    <div class="header">
      <mt-header title="我的" class="profile-header1">
        <!--登录返回 搜索页面-->
            <span class="glyphicon glyphicon-menu-left" slot="left" @click="$router.back(-1)"></span>
      </mt-header>
      <mt-header @click="infor" class="profile-header2">
        <!--登录跳转到info-->
        <a href="###" slot="left">
          <div class="pic" >
            <img src="../../imgages/16.jpg" alt="">
          </div>
          <div class="profile_middle">
            <span v-if="isShow" class="profile_span1" @click="skipLogin">登录/注册</span>
            <span v-else class="profile_span2">{{username}}</span>
            <br>
            <span class="el-icon-mobile-phone"></span>
            <span class="profile_span3">暂无绑定手机号</span>
          </div>
          <span  class="profile_right el-icon-arrow-right" @click="isToLog"></span>
        </a>
      </mt-header>
      <!-- 跳转到infor -->

    </div>

    <!-- banner区域 -->
    <div class="banner">
      <!-- 左边余额 -->
      <router-link :to="{path:'/balance'}">
        <div class="ban_left">
          <!-- 非固定值会替换 -->
          <b class="ban_b1">0.00</b>
          <span>元</span>
          <br>
          <span>我的余额</span>
        </div>
      </router-link>
      <!-- 中间优惠 -->
      <router-link :to="{path:'/benefit'}">
        <div class="ban_middle">
          <b class="ban_b2">{{this.$store.state.packNum.length}}</b>
          <span>个</span>
          <br>
          <span>我的优惠</span>
        </div>
      </router-link>
      <!-- 右边积分 -->
      <router-link :to="{path:'/points'}">
        <div class="ban_right">
          <b class="ban_b3">0</b>
          <span>分</span>
          <br>
          <span>我的积分</span>
        </div>
      </router-link>
    </div>
    <!-- 分割 -->
    <div class="part"></div>
    <!-- 跳转区域 -->
    <!-- 我的订单 -->
    <router-link :to="{path:'/home/order'}">
      <a @click="$store.commit('xiugai','订单')">
      <div class="pro_content">
        <p class="el-icon-tickets">我的订单</p>
        <span  class="el-icon-arrow-right"></span>
      </div>
      </a>
    </router-link>
    <!-- 积分商城 -->
    <router-link :to="{path:'/chome'}">
      <div class="pro_content pro_part">
        <p class="el-icon-goods">积分商城</p>
        <span                     class="el-icon-arrow-right"></span>
      </div>
    </router-link>
    <!-- 饿了么会员卡 -->
    <router-link :to="{path:'/vipcard'}">
      <div class="pro_content">
        <p class="el-icon-s-check">饿了么会员卡</p>
        <span                     class="el-icon-arrow-right"></span>
      </div>
    </router-link>
    <!-- 分割 -->
    <div class="part"></div>
    <!-- 服务中心 -->
    <router-link :to="{path:'/service'}">
      <div class="pro_content pro_part">
        <p class="el-icon-mobile">服务中心</p>
        <span                     class="el-icon-arrow-right"></span>
      </div>
    </router-link>
    <!-- 下载饿了么app -->
    <router-link :to="{path:'/download'}">
      <div class="pro_content">
        <p class="el-icon-platform-eleme">下载饿了么APP</p>
        <span                     class="el-icon-arrow-right"></span>
      </div>
    </router-link>
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
    name: "Hyprofile",
    data () {
      return {
        username:'',
        user_id:'',
        isShow:false,

      }
    },
    methods:{
      infor(){
        if (sessionStorage.uesrname) {
          this.$router.push({path:'/prefile/infor',query:this.username});
          // this.isShow = true;

        } else {
          this.$router.push({path:'/login'});
        }
      },
      isToLog(){
        if (this.isShow) {
          this.$router.push({path:'/login'})
        }else{
          this.$router.push({path:'/infor'})
        }
      },
       isLogin(){
         if (sessionStorage.getItem('username')) {
           this.isShow=false;
           this.username = sessionStorage.username;
           this.user_id = sessionStorage.user_id;
           // 修改infor里的用户名
           this.$store.state.setUserName = this.username;
         } else {
           this.isShow = true;
         }
       },
      //  点击跳转login
      skipLogin(){
        this.$router.push({path:'/login'})
      }
    },
    created(){
      this.isLogin();
    },
    beforeRouteUpdate (to, from, next) {
      this.islogin();
      next();

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
  .profile{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    z-index: 20;
    margin-bottom: 4rem;
  }
  /* 头部 */
  .header{
    width: 100%;
    height: 5.8rem;
  }
  .profile-header1{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
    /* font-weight: 1000; */
  }
  .profile-header2{
    width: 100%;
    height: 4rem;
    padding-left: 4%;
    font-size: .8rem;

    /* position: relative; */
  }
  .pic{
    width: 2.5rem;
    height: 2.5rem;
    background-color: #ffffff;
    border-radius: 50%;
    /* position: absolute; */
  }
  .pic img{
    width: 100%;
    border-radius: 50%;
  }
  .profile_middle{
    position: absolute;
    left: 4rem;
    top: .7rem;
  }
  .profile_span1{
    display: block;
    font-weight: 800;
    margin: .4rem 0 -0.4rem;
  }
  .profile_span2{
    display: block;
    font-weight: 600;
    font-size: .8rem;
    margin: .2rem 0 -.1rem 0;
  }
  .profile_span3{
    font-size: .6rem;
  }
  .profile_right{
    position: absolute;
    right: 5%;
    top:40%;
  }
  /* banner */
  .banner{
    width: 100%;
    height: 4.4rem;
    overflow: hidden;
  }
  .ban_left,.ban_middle,.ban_right{
    width: 33.33%;
    height: 100%;
    float: left;
    text-align: center;
    padding-top: 1rem;
    background-color: #ffffff;
  }
  .ban_middle{
    border-left: 1px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
  }
  .ban_b1,.ban_b2,.ban_b3{
    font-weight: 700;
    font-size: 1.2rem;
  }
  .ban_b1{
    color: orangered;
  }
  .ban_b2{
    color: red;
  }
  .ban_b3{
    color: green;
  }
  .banner span{
    font-size: .6rem;
  }
  /* 分割 */
  .part{
    width: 100%;
    height: 1rem;
  }
  /* 跳转区域 */
  .pro_content{
    width: 100%;
    height: 2rem;
    background-color: #ffffff;
    color: #333;
    line-height: 2rem;
    padding: 0 .8rem;
    font-weight: 400;
    font-size: .8rem;
    box-sizing: border-box;
    position: relative;
  }
  .pro_content span{
    position: absolute;
    right: 5%;
    top: 35%;
  }
  .pro_part{
    border: 1px solid #f5f5f5;
  }
</style>
