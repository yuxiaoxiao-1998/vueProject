<template>
  <div class="addDetail">
    <!-- 头部 固定 -->
    <mt-header fixed
               title="搜索地址"
               class="addDetail-header">
      <!--登录返回-->
      <mt-button @click="$router.push({path:'/profile/infor/address/add'})"
                 icon="back"
                 slot="left"></mt-button>
    </mt-header>
    <!-- 搜索框 -->
    <div class="banner">
      <input type="text"
             placeholder="  请输入小区/写字楼/学校等"
             v-model="searchV">
      <!-- <input type="submit"> -->
      <button @click="search">确认</button>
    </div>
    <!-- 提示 -->
    <div class="hint">
      为了满足商家的送餐要求,建议您从列表中选择地址
    </div>
    <!-- 搜索列表-->
    <ul>
      <li class="detail_li"
          v-for="(item,index) in seaSiteArr"
          :key="index"
          @click="getSite(item)">
        <p>{{item.name}}</p>
        <p>{{item.address}}</p>
      </li>
    </ul>
    <!-- 提醒 -->
    <div class="foot"
         v-show="isShow">
      <p>找不到地址?</p>
      <p>请尝试输入小区.写字楼或学校名详细地址(如门牌号)可稍后输入哦</p>
    </div>
  </div>
</template>

<script>
  // 引入mint-ui 头部
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  export default {
    name: "HyaddDetail",
    data () {
      return {
        seaSiteArr: [],
        searchV: '',
        isShow: true,
      }
    },
    methods: {
      // 搜索地址
      search () {

        if (this.searchV == '') {
          this.isShow = true;
        } else {
          // 显隐
          this.isShow = false;
          Vue.axios.get('https://elm.cangdu.org/v1/pois?keyword=' + this.searchV).then((res) => {
            this.seaSiteArr = res.data;
          }).catch((error) => {
            console.log('请求错误', error);
          });
        }
      },
      // 获取地址
      getSite (item) {
        localStorage.setItem('item', JSON.stringify(item));
        // console.log(JSON.parse(localStorage.getItem("item")))
        this.$router.push('/profile/infor/address/add');
      }
    },
    created () {

    },

  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
  }
  .addDetail {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 50;
  }
  .addDetail-header {
    width: 100%;
    height: 2rem;
    font-size: 0.8rem;
    padding-left: 2%;
  }
  .banner {
    width: 100%;
    height: 3rem;
    margin-top: 3rem;
    background-color: #fff;
  }
  .banner input {
    width: 80%;
    height: 1.5rem;
    border-radius: 5%;
    background-color: #ccc;
    margin: 5% 0 0 2%;
  }
  .banner button {
    width: 15%;
    height: 1.5rem;
    border-radius: 10%;
    background-color: #3199e8;
  }
  .hint {
    width: 100%;
    height: 1.5rem;
    background-color: #fff6e4;
    color: #ff883f;
    font-size: 0.6rem;
    line-height: 1.5rem;
    padding-left: 3%;
  }
  ul li {
    list-style: none;
  }
  .detail_li {
    width: 100%;
    height: 3rem;
    background-color: #f5f5f5;
    padding: 2%;
    font-size: 0.6rem;
    color: #969696;
    border-bottom: 1px solid #ccc;
  }
  .foot {
    width: 80%;
    height: 10rem;
    font-size: 0.8rem;
    text-align: center;
    /* background-color: yellow; */
    margin: 10% 0 0 10%;
    color: #ccc;
  }
</style>
