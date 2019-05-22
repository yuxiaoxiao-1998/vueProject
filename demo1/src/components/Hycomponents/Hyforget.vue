<template>
  <div class="forget">
    <!--头部-->
    <div class="header">
      <mt-header title="重置密码" class="forget-header">
        <!--登录返回-->
        <span @click="$router.push({path:'/home/profile'})" class="glyphicon glyphicon-menu-left" slot="left"></span>
      </mt-header>
    </div>
    <!--重置密码区域-->
    <div class="banner">
      <mt-field  class="one" placeholder="账户" type="text" v-model="username1"></mt-field>
      <mt-field  class="one" placeholder="旧密码" type="password" v-model="oldpassword"></mt-field>
      <mt-field  class="one" placeholder="请输入新密码" type="password" v-model="newpassword"></mt-field>
      <mt-field  class="one" placeholder="请确认密码" type="password" v-model="confirmpassword"></mt-field>
      <mt-field  class="one" placeholder="验证码" type="text" v-model="captcha1">
        <!--验证码图片-->
        <mt-cell>
          <div class="capImg">
            <img :src="capImg" alt="">
          </div>
          <div class="capP">
            <p @click="changeImg">看不清</p>
            <p @click="changeImg" class="cap_p">换一张</p>
          </div>
        </mt-cell>
      </mt-field>
    </div>
    <!--登录按钮-->
    <div class="logBut">
      <mt-button class="logBut_but" size="large" @click="clickchangebtn">确认修改</mt-button>
    </div>
    <!--弹框-->
    <div class="pop animation bounceIn" v-if="isShow">
      <!--<p class="el-icon-warning"></p>-->
      <img src="../../imgages/images/警告.png" alt="" style="width:20%;">
      <p>{{alertText}}</p>
      <mt-button @click="changebtn">确认</mt-button>
    </div>
  </div>
</template>

<script>
  // 引入mint-ui 头部
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  export default {
    name: "Hyforget",
    data(){
      return{
        capImg:'',//请求的验证码
        isShow:false,
        alertText:'',//弹框内容
        username1:'',//用户名
        oldpassword:'',//旧密码
        newpassword:'',//新密码
        confirmpassword:'',// 二次确认密码
        captcha1:'',//输入的验证码
      }
    },
    methods:{
      // 多次调用 封装函数
      verifty(){
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
          this.capImg = res.data.code;
        }).catch((error)=>{
          console.log('请求错误',error);
        });
      },
      // 点击验证 修改密码
      clickchangebtn(){
        if (this.username1 == "") {
          this.isShow = true;
          this.alertText = "请输入正确的账号";
        } else if (this.oldpassword == "") {
          this.isShow = true;
          this.alertText = "请输入旧密码";
        } else if ((this.newpassword == "")) {
          this.isShow = true;
          this.alertText = "请输入新密码";
        } else if (this.confirmpassword == "") {
          this.isShow = true;
          this.alertText = "请输入确认密码";
        } else if (this.confirmpassword != this.newpassword) {
          this.isShow = true;
          this.alertText = "两次输入的密码不一致";
        } else if (this.captcha1 == "") {
          this.isShow = true;
          this.alertText = "请输入验证码";
        } else{
          Vue.axios.post(
            // 请求URL
            'https://elm.cangdu.org/v2/changepassword',
            {
              username: this.username1,
              oldpassWord: this.oldpassword,
              newpassword: this.newpassword,
              confirmpassword:this.confirmpassword,
              captcha_code: this.captcha1,
            }
          ).then((res)=>{
            if (res.data.success) {
              this.isShow = true;
              this.alertText = "密码修改成功"
            } else {
              this.isShow = true;
              this.alertText = res.data.message;
              this.verifty();
            }
          })
        }
      },
      // 点击换验证码
      changeImg(){
        this.verifty();
      },
      changebtn(){
        this.isShow = !this.isShow;
      }
    },
    created() {
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
  .forget{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    position: absolute;
    left:0;
    right: 0;
    top: 0;
    bottom:0;
    z-index: 20;
  }
  .forget-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    color: #ffffff;
    text-align: center;
    font-weight: 700;
    margin-bottom: 1rem;
    padding-left: 2%;
  }
  /*账号密码更改*/
  .banner{
    width: 100%;
    height: 9.4rem;
    background-color: #ffffff;
  }
  .capImg{
    width: 4.528rem;
    height: 1.9405rem;
  }
  .capImg img{
    width: 100%;
  }
  .cap_p{
    color: #3b95e9;
  }
  /*登录按钮*/
  .logBut{
    width: 96%;
    margin-left: 2%;
    padding-top: 3rem;
  }
  .logBut_but{
    height: 2rem;
    font-size: .8rem;
    color: #ffffff;
    background-color: #4cd964;
  }
  /* 弹框 */
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
    top: 45%;
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
