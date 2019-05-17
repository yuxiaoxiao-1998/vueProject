<template>
  <div class="exchange">
    <!-- 头部 -->
    <div class="header">
      <mt-header title="兑换红包" class="exchange-header">
        <!--登录返回-->
        <mt-button @click="$router.push({path:'/benefit'})" icon="back" slot="left"></mt-button>
      </mt-header>
    </div>
    <!--  兑换密码框-->
    <div class="banner">
      <div class="ban_top">
        <input type="text" placeholder="  请输入兑换码">
      </div>
      <div class="ban_middle">
        <input type="text" placeholder="  验证码" v-model="verV">
        <div class="middle_right">
          <img :src="getImg" alt="">
          <div class="mid_span" @click="change_img">
            <span>看不清</span>
            <br>
            <span>换一张</span>
          </div>
        </div>
      </div>
      <div class="ban_but">
        <button>兑换</button>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入mint-ui 头部
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  export default {
    name: "Hyexhange",
    data () {
      return {
        getImg:'',
        verV:'',
      }
    },
    methods: {
      change_img(){
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
          console.log(res.data.code);
          this.getImg = res.data.code;
        }).catch((err)=>{
          console.log("请求错误",err);
        });
      }
    },
    created() {
      Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
        console.log(res.data.code);
        this.getImg = res.data.code;
      }).catch((err)=>{
        console.log("请求错误",err);
      });
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
  .exchange{
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
  .exchange-header{
    width: 100;
    height: 2rem;
    padding-left: 2%;
    font-size: .8rem;
  }
  .banner{
    width: 96%;
    height: 10rem;
    margin-left:2%;
    /* background: yellow; */
  }
  .ban_top{
    width: 100%;
    height:2rem;
    margin: 1rem 0 .5rem 0;
  }
  .ban_top input{
    width: 100%;
    height: 2rem;
    border-radius: 5%;
  }
  .ban_middle{
    width: 100%;
    height: 2rem;
    margin-bottom: 1rem;
    overflow: hidden;
  }
  .ban_middle input{
    width: 50%;
    height: 2rem;
    border-radius: 5%;
    float: left;
  }
  .middle_right{
    height: 2rem;
    float: right;
    width: 48%;
    /* background: blue; */
    line-height: 1rem;
  }
  .middle_right img{
    float: left;
    width: 50%;
  }
  .mid_span{
    float: right;
    font-size: .7rem;
    padding: .2rem;
  }
  .mid_span span:nth-child(3){
    color: #3b95e9;
  }
  .ban_but button{
    width: 100%;
    height: 2rem;
    border-radius: 3%;
  }
</style>
