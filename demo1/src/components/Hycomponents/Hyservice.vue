<template>
  <div class="service">
    <!-- 导航栏头部 -->
    <mt-header fixed title="服务中心" class="service-header">
      <router-link :to="{path:'profile'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- banner 客服区域 -->
    <div class="banner">
      <router-link :to="{path:''}" href="###">
        <!--<p class="el-icon-user-solid"></p>-->
        <img src="../../imgages/images/客服.png" alt="" style="width:25%;">
        <br>
        <span>在线客服</span>
      </router-link>
      <router-link :to="{path:''}" href="###">
        <!--<p class="el-icon-phone"></p>-->
        <img src="../../imgages/images/电话.png" alt="" style="width:25%;">
        <br>
        <span>在线客服</span>
      </router-link>
    </div>
    <!-- content 热门问题 -->
    <div class="cotent">
      <div class="con_hot">热门问题</div>
      <ul>
        <router-link :to="{path:''}">
          <li class="con_list">
            超级会员权益说明
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            签到规则
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            用户等级说明
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            积分问题
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            教我拍大片
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            支付问题
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            其他问题
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            准时到达问题
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            会员说明
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            红包问题
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            活动细则
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            补签规则
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            优惠说明
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            免责声明
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            代金券说明
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            商务合作
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            余额问题
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            超赞商家
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            匿名购买
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
        <router-link :to="{path:''}">
          <li class="con_list">
            活动问题
            <p class="el-icon-arrow-right"></p>
          </li>
        </router-link>
      </ul>
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
    name: "Hyservice"
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
  .service {
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
    position: relative;

    /* position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    z-index: 11; */
  }
  /* 导航栏头部*/
  .service-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    /* font-weight: 700; */
    padding-left: 2%;
  }
  /* banner客服 */
  .banner{
    width: 100%;
    height: 4rem;
    margin-top: 2rem;
    overflow: hidden;
    background-color: #fff;
  }
  .banner a{
    width: 50%;
    height: 4rem;
    text-decoration: none;
    display: block;
    float: left;
    border: 1px solid #f5f5f5;
    text-align: center;
    padding-top: 1%;
    color: black;
    font-size: 1.1rem;
  }
  .banner a span{
    font-size: .6rem;
  }
  /* content 热门问题 */
  .con_hot{
    width: 100%;
    height: 3.1rem;
    font-size: .8rem;
    line-height: 3.1rem;
    padding-left: 5%;
    background-color: #fff;
    border-bottom: 1px solid #f5f5f5;
  }
  ul li{
    list-style: none;
    background-color: #fff;
  }
  a{
    text-decoration: none;
    color: black;
  }
  .con_list{
    width: 100%;
    height: 2rem;
    font-size: .6rem;
    border-bottom:1px solid #f5f5f5;
    line-height: 2rem;
    padding: 0 .8rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
