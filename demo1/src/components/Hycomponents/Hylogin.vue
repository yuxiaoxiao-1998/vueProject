<template>
  <div class="login">
    <!--头部-->
    <div class="header">
      <mt-header title="密码登录" class="login-header">
        <!--登录返回-->
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <!--banner-->
    <div class="banner">
      <!--账户-->
      <mt-field class="one" placeholder="账户" type="text" v-model="username"></mt-field>
      <!--密码-->
      <mt-field placeholder="密码" :type="value5 ? one : two" v-model="password">
        <!--密码显与隐-->
        <mt-switch v-model="value5">
        </mt-switch>
      </mt-field>
      <!--验证码-->
      <mt-field placeholder="验证码" type="text" v-model="captcha">
        <!--验证码图片-->
        <mt-cell>
          <div class="capImg">
            <img :src="captchas" alt="">
          </div>
          <div class="capP">
            <p @click="changeImg">看不清</p>
            <p class="cap_p" @click="changeImg">换一张</p>
          </div>
        </mt-cell>
      </mt-field>
    </div>
    <!--温馨提示-->
    <div class="hint">
      <p>温馨提示: 未注册过的账号, 登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
    </div>
    <!--登录按钮-->
    <div class="logBut">
      <mt-button class="logBut_but" size="large" @click="clickLogin" >登录</mt-button>
    </div>
    <!--重置密码-->
    <div class="resPassword">
      <!-- 跳转口 -->
      <router-link :to="{path:'/forget'}">重置密码?</router-link>
      <!-- <a href="###">重置密码?</a> -->
    </div>
    <!--弹框-->
    <div class="pop animation bounceIn" v-if="isShow" >
      <p class="el-icon-warning"></p>
      <p>{{alertText}}</p>
      <mt-button @click="clickchangebtn">确认</mt-button>
    </div>
  </div>
</template>


<script>
  // 引入mint-ui 头部
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  export default {
    name: "Hylogin",
    data(){
      return{
        captchas:'',//验证码图片
        isShow:false,
        isPass:false,
        username:'',
        password:'',
        captcha:'',//验证码数据
        alertText:'',
        value5:false,
        one:'text',
        two:'password',
      }
    },
    methods:{
      // 多次调用
      verifty(){
        //请求验证码
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
          // console.log(res.data.code);
          console.log(this.captchas);
          this.captchas = res.data.code;
        }).catch((error) => {
          console.log('请求错误', error)
        });
      },
      clickLogin(){
        if (
          this.username != '' &&
          this.password != '' &&
          this.captcha != ''
        ) {
          Vue.axios.post(
            'https://elm.cangdu.org/v2/login',
            {
              username:this.username,
              password:this.password,
              captcha_code:this.captcha,
            }
          ).then((res)=>{
            // console.log(res.data);
            if (res.data.id) {
              // console.log(res.data);
              sessionStorage.user_id =JSON.stringify( res.data.id);
              // 登录用户名存到本地 vuex可调用
              sessionStorage.username=this.username;
              // 跳转 到 首页面
              this.$router.push({path:'/profile'});
            } else{
              this.isShow = true;
              this.alertText = res.data.message;
            }
          }).catch(err=>{
            console.log("请求错误",err);
          })
        }else{
          this.isShow = true;
          if (this.username == "") {
            this.alertText = "请输入正确的手机号/邮箱/用户名";
          } else if (this.password == "") {
            this.alertText = "请输入密码";
          } else if (this.captcha == "") {
            this.alertText = "请输入正确的手机号/邮箱/用户名";
          } else if (this.captchas != this.captcha) {
            this.alertText = "验证码不正确";
          }
        }

      },
      // 按钮切换 密码显隐
      clickchangebtn(){
        this.isShow = !this.isShow;
      },
      // 点击刷新验证码
      changeImg(){
        this.verifty();
      },

    },
    created(){
      this.verifty();
    },
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
  .login{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    /* position: relative; */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    z-index: 10;
  }
  .login-header{
    width: 100%;
    height:2rem;
    font-size: .8rem;
    color: #ffffff;
    text-align: center;
    font-weight: 700;
    margin-bottom: 1rem;
    padding-left: 2%;
  }
  /*账号填写区*/
  .banner{
    width: 100%;
    height: 5.7rem;
    background-color: #f5f5f5;
  }
  .capImg{
    width: 4.528rem;
    height: 1.9405rem;
  }
  .capImg>img{
    width: 100%;
  }
  .capImg p{
    text-decoration: none;
  }
  .cap_p{
    color: #3b95e9;
  }
  /*温馨提示*/
  .hint{
    width: 100%;
    height: 3.269rem;
    padding-top: 0.8rem;
  }
  .hint  p{
    height: 1rem;
    font-size: .5rem;
    margin-left: .4rem;
    color: red;
  }
  /*登录按钮*/
  .logBut{
    width: 96%;
    margin-left: 2%;
  }
  .logBut_but{
    height: 2.494rem;
    color: #ffffff;
    background-color: #4cd964;
  }
  /*重置密码*/
  .resPassword{
    width: 96%;
    text-align: right;
    margin-top: 1.5rem;
  }
  .resPassword a{
    text-decoration: none;
    color: #3b95e9;
  }
  .pop{
    width: 12rem;
    height: 6rem;
    background-color: #ffffff;
    border-radius: 3%;
    font-size: .6rem;
    text-align: center;
    margin-bottom: 0;
    position: absolute;
    left: 15%;
    top: 35%;
  }
  .pop p:nth-child(1){
    font-size: 2rem;
  }
  .pop p:nth-child(2){
    padding-top: .3rem;
  }
  .pop button{
    width: 100%;
    background-color: #4cd964;
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
