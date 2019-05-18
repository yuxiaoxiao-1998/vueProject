<template>
    <div class="choose">
      <!--头部-->
      <div class="header">

        <mt-header fixed title="选择地址" class="choose-header">
          <!--登录返回-->
          <router-link to="/order1" slot="left">
          <span class="glyphicon glyphicon-menu-left fh" ></span>
          </router-link>
        </mt-header>
      </div>
      <!-- 空标签  -->
      <div class="one"></div>
      <router-link to="/order3">
      <div class="newAddress">
        <img src="../imgages/images/add_address.png" alt="">
        <span class="xinzeng">新增收货地址</span>
      </div>
      </router-link>
      <!-- 地址列表 -->
      <ul>
        <li>
          <div class="choose_list">
            <div class="choose_left">
              <img src="../imgages/images/选中.png" alt="">
            </div>
            <div class="choose_right">
              <span>姓名</span>
              <span>性别</span>
              <span>电话</span>
              <br>
              <span>标签</span>
            </div>
            <div class="empty"></div>
          </div>
        </li>
      </ul>
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
.choose{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.choose-header{
  width: 100%;
  height: 2rem;
  font-size: .8rem;
  padding-left: 2%;
}
.one{
  width: 100%;
  height: 2rem;
}
/* 新增收货地址 */
.newAddress{
  width: 100%;
  height: 2rem;
  color: #3190e8;
  position: fixed;
  left: 28%;
  bottom: 0;
}
.newAddress img{
  width: 8%;
  margin-right: .5rem;
}
/* li里的地址 */
ul li{
  list-style: none;
  padding: 2%;

}
.choose_list{
  width: 100%;
  height:3rem;
  /* background: yellow; */
  font-size: .6rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
}
.empty{
  clear: both;
}
.choose_list img{
   width: 70%;
}
.choose_left{
  width: 15%;
  float: left;
  margin-left: 1rem;
}
.choose_right{
  float: left;
}
.choose_right span:nth-child(1){
  font-size: .8rem;
}
.choose_right span:nth-child(5){
  display: inline-block;
  width: 1.5rem;
  height: .8rem;
  background-color: #ff5722;
  border-radius: 10%;
  text-align: center;
}
  .fh{
    font-size: 0.6rem;
  }
  .xinzeng{
    font-size: 0.6rem;
  }
</style>
