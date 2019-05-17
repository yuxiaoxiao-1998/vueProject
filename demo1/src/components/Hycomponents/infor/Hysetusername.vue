<template>
  <div class="setusername">
    <mt-header title="修改用户名" class="setusername-header">
      <!--登录返回-->
      <router-link :to="{path:'/profile/infor'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="banner">
      <input type="text" placeholder="  输入用户名" v-model="usernameV">
      <p>用户名长度在5-24位之间</p>
    </div>
    <!-- 确认修改按钮 -->
    <el-button class="setbtn" type="primary"  @click="setUserName">确认修改</el-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "Hysetusername",
    data(){
      return{
        usernameV:'',
      }
    },
    methods:{
      setUserName(){
        this.$store.state.setUserName = this.usernameV;
        this.$router.back(-1);
      }

    },

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
  .setusername{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 20;
  }
  .setusername-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
  }
  .banner{
    width: 94%;
    height: 3rem;
    /* background: yellow; */
    margin: 3% 0 0 3%;
  }
  .banner input{
    width:100%;
    height: 1.5rem;
    border-radius: 5%;
  }
  .banner p{
    padding-top: .5rem;
    font-size: .6rem;
    color: red;
  }
  .setbtn{
    width: 94%;
    height: 1.5rem;
    margin: 5% 0 0 3%;
    font-size: .7rem;
    background-color: #26a2ff;
  }
</style>
