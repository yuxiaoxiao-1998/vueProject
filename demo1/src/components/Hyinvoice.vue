<template>
    <div class="invoice">
      <!--头部-->
      <div class="header">
        <mt-header title="选择发票抬头" class="invoice-header">
          <!--登录返回-->
          <span class="glyphicon glyphicon-menu-left" slot="left" @click="$router.back(-1)"></span>
        </mt-header>
      </div>
      <!-- banner -->
      <div class="invoice_ban">
        <p>不需要开发票</p>
        <img v-show="!isShow"  @click="picClick" class="pic" src="../imgages/images/未选中.png" alt="">
        <img v-show="isShow" class="pic" @click="picClick" src="../imgages/images/选中.png" alt="">
      </div>
      <!-- 按钮 -->
      <div class="invoice_but">
        <el-button @click="$router.back(-1)">确认</el-button>
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
        name: "Hyinvoice",
        data () {
          return {
            isShow:false, 
          }
        },
        methods: {
          picClick(){
            this.isShow = !this.isShow;
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
  .invoice{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .invoice-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
  }
  .invoice_ban{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    margin: .8rem 0 0.8rem 0;
    background-color: #fff;
    padding: 0 3% 3%;
    font-size: .7rem;
    position: relative;
  }
  .pic{
    width: 10%;
    position: absolute;
    right: 1rem;
    top: 0.3rem;
  }
  .invoice_but button{
    width: 94%;
    height: 1.5rem;
    margin-left: 3%;
    font-size: .7rem;
    color: #fff;
    background-color: #4cd964;
  }
</style>
