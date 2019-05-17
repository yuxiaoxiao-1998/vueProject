<template>
  <div class="hbHistory">
    <!-- 头部 -->
    <div class="header">
      <mt-header fixed title="历史红包" class="hbHistory-header">
        <!--登录返回-->
        <mt-button @click="$router.push({path:'/benefit'})" icon="back" slot="left"></mt-button>
      </mt-header>
    </div>
    <div style="width:100%;height:2rem"></div>
    <!-- 过期红包 -->
    <section class="list_item" v-for="(item,index) in hbArr" :key="index">
      <div class="item_left">
        <span>¥</span><span>{{item.amount}}</span><span>.</span><span>{{item.status}}</span>
        <p>满{{item.sum_condition}}元可用</p>
      </div>
      <div class="item_middle">
        <h4>普通红包</h4>
        <p>{{item.begin_date}}到期</p>
        <p>{{item.description_map.phone}}</p>
      </div>
      <div class="item_right">
        <img src="../imgages/过期.png" alt="">
      </div>
    </section>
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
  export default {
    name: "HyhbHistory",
    data () {
      return {
        hbArr:[],
      }
    },
    methods: {

    },
    created() {
      Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0').then((res)=>{
        console.log(res.data);
        this.hbArr = res.data;
      }).catch((err)=>{
        console.log("请求数据",err);
      });
    },

  }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  html.body{
    width: 100%;
    height: 100%;
  }
  .hbHistory{
    width: 100%;
    /* height: 100%; */
    background: #f5f5f5;
    position: absolute;
    left: 0;
    right:0;
    top: 0;
    bottom: 0;
    z-index: 40;
  }
  /* 头部 */
  .hbHistory-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
  }
  /* 循环列表 */
  .list_item{
    width: 94%;
    height: 4rem;
    margin-left: 3%;
    background: url('../imgages/expired.png') repeat-x ;
    background-size: .5rem;
    box-sizing: border-box;
    padding: .6rem;
    position: relative;
    font-size: .4rem;
    color: #ccc;
    background-color: #fff;
    margin-top: .5rem;
    border-radius: 5%;
  }
  .item_left{
    width: 20%;
    height: 2.5rem;
    position: absolute;
    /* background: blue; */
    border-right: 1px solid #f5f5f5;
  }
  .item_left span{
    font-size: .7rem;
    /* color: red; */
  }
  .item_left span:nth-child(2){
    font-size: 1.3rem;
    font-weight: 500;
  }
  .item_middle{
    width: 60%;
    height: 2.5rem;
    position: absolute;
    left: 28%;
    padding: .2rem 0 0 0;
  }
  .item_right{
    width: 20%;
    height: 2.5rem;
    position: absolute;
    left: 80%;
  }
  .item_right img{
    width: 110%;
  }
  .item_p{
    width: 100%;
    height: 1rem;
    font-size: .4rem;
    color: #ccc;
    line-height: 1rem;
    text-align: center;
  }
  .item_span{
    width: 100%;
    height: 1rem;
    margin-top: 1.5rem;
    font-size: .5rem;
    text-align: center;
  }
  .item_span span:nth-child(2){
    font-size: .6rem;
  }
</style>
