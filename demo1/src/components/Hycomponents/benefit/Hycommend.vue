<template>
  <div class="commend">
    <div class="header">
      <mt-header title="推荐有奖" class="commend-header">
        <!--登录返回-->
        <mt-button @click="$router.push({path:'/benefit'})" icon="back" slot="left"></mt-button>
      </mt-header>
    </div>
    <!-- 图片 -->
    <div class="com_banner">
      <img src="../imgages/9.png" alt="">
    </div>
    <div class="com_content">
      <div class="left">
        <img src="../imgages/10.png" alt="" @click="part">
        <p>邀请微信好友</p>
      </div>
      <div class="middle">
        <img src="../imgages/11.png" alt="" @click="part">
        <p>邀请QQ好友</p>
      </div>
      <div class="right">
        <img src="../imgages/12.png" alt=""
             @click="part">
        <p>面对面邀请</p>
      </div>
      <!-- 收益 邀请 -->
      <div class="com_foot">
        <div class="foot_top">
          <div class="top_left">
            <p>累计收益</p>
            <span><b>0</b>元</span>
          </div>
          <div class="top_right">
            <p>成功邀请</p>
            <span><b>0</b>人</span>
          </div>
        </div>
        <div class="foot_middle">
          <p>-收益说明-</p>
        </div>
        <div class="foot_but">
          <img src="../imgages/13.png" alt="">
          <p>还不赶紧去邀请好友</p>
        </div>
      </div>
    </div>
    <!-- 弹框 -->
    <div class="part animation bounceIn" v-if="isShow">
      <p class="el-icon-warning"></p>
      <br>
      <span>请在饿了么APP中打开</span>
      <mt-button type="default" size="large" @click="isShow=false">确认</mt-button>
    </div>
  </div>
</template>

<script>
  // 引入mint-ui 头部
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  export default {
    name: "Hycommend",
    data() {
      return {
        isShow:false,
      }
    },
    methods: {
      part(){
        this.isShow = true;
      }
    },
  }
</script>

<style scoped>
  *{
    padding:0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;

  }
  .commend{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    z-index: 30;
  }
  .commend-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
  }
  .com_banner{
    width: 100%;
    height: 10rem;
  }
  .com_banner img{
    width: 100%;
  }
  .com_content{
    width: 100%;
    height: 6rem;
    margin: .5rem 0 1rem 0;
    background-color: #fff;
    overflow: hidden;
    text-align: center;
    padding-top: 1rem;
  }
  .com_content img{
    width: 50%;
  }
  .com_content p{
    font-size: .5rem;
    margin-top: .5rem;
  }
  .left{
    width: 33.33%;
    height: 100%;
    float: left;
  }
  .middle{
    width: 33.33%;
    height: 100%;
    float: left;
  }
  .right{
    width: 33.33%;
    height: 100%;
    float: left;
  }
  /* foot */
  .com_foot{
    width: 100%;
    height: 10rem;
    /* background: yellow; */
    color: #666;
    position: absolute;
    top: 65%;
  }
  .foot_top{
    width: 100%;
    height: 3rem;
    /* background: blue; */
  }
  .top_left{
    width: 50%;
    float: left;
    border-right: 1px solid #ccc;
  }
  .top_left b{
    color: red;
  }
  .top_right{
    width: 50%;
    float:right;
  }
  .foot_middle p{
    font-size: .6rem;
  }
  .foot_but{
    margin-top: 1rem;
  }
  .foot_but img{
    width: 8%;
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
