<template>
  <div class="benefit">
    <router-view></router-view>
    <!-- 头部 -->
    <div class="header">
      <mt-header title="我的优惠" class="benefit-header">
        <!--登录返回-->
        <mt-button @click="$router.push({path:'/profile'})" icon="back" slot="left"></mt-button>
      </mt-header>
    </div>
    <!-- banner  红包-->
    <div class="banner">
      <span @click="ban_hong">红包</span>
      <span @click="ban_dai">商家代金券</span>
    </div>
    <!-- 分块qu -->
    <div class="block" v-if="isShow">
      <div class="block_ban">
        <!-- 非固定值 -->
        <span>有<b>{{this.$store.state.packNum.length}}</b>个红包即将过期</span>
        <span>
            <img data-v-841e3554="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAvJJREFUSA21Vk1IFVEU/s7MvOd/+U+pkZmEEBXiIgpq06KFYUmLFrZp0S4fFAW1ioi2RU9oFbQJCgoqQYIWEkKQixKK7IfMCnuEYvlSek99M7d77rzRGWfu06Du5s49P98599zzM4QCa3dyumlR2IeFEJ0gbJWiDXnxFATGiGggRuaj4UTNhA6GohjtfVMNcMQlgjghwc0oGY8mjdgCdAsGXRzprUt5dG8PGWjv+95FNt0WEBWe0Fp2As0KUxwf6d3Q75c3/IeO5GQCNj34W3DGUDpSV2H4QJduwJ4zuBQNGPVky+KELVUmZEgw/iOHuQXhsVbs5MAU3d5NlAGOOdnOuyjPK4oIp/aW4+iOEhlm1x/bEbj/OoO+Z3P4vRg25IbLaOM3sZR5+aBR4Ax39VAlOpriGPyYxdNP8zAl8cj2EhzbVYraMgPnBtIrbpAPl8SUjJPkpmLuc1S2dLYV4/LB9XjyIYvzj5eBLBnEuz01aKm20HNnGm8ncyEjnF0xspqNfJ5HpmJ7Y0wp9o9mAgA5Bxj+uqBo2+rcIAQE5IEdZmxDFdFKbv78fiqHh28yGJsOe9i4zvVpJhN+Aw+OsS1VoRqZe6/Y86D3rLxzYwx7NseRzjp4+c29iQca2GX1c0p65R/g6Q4t1Saud1Uq9gX5LrPzGu9cgIbInNeB15cbuNFdhdIYyeyZwfP8O+jkmc4GQv1Dp3BmXwXqy01cGfyFofECoVkGSBncFZfP+q+4fNMDrUWYSOfQP5rVC/o5ElsWJw34abpvLirTIHz5aetEQnTGLlhofg0urjppJCNbw0y24MMqtaVC42Gh+rkfLeK72CK01lpoltW7lsWYjO1mkRwW3KAKKW6q5PSswtn9q48JhSUxGU8Z4K7HwwKQrVazON+HZLMbSa2WPeS4g8edbm7/zYPysHAccU03EzS2fWRyDINOv0jUJz1iwAAT/+vIZAM8iYRptIGMm5wJTCu0lIyUZR1vivnlQzfwM//Fb8sfhhUzHMwI/u8AAAAASUVORK5CYII=" height="24" width="24">
            <span>红包说明</span>
          </span>
      </div>
      <!-- 红包券 -->
      <section class="list_item" v-for="(item,index) in this.$store.state.packNum" :key="index">
        <div class="item_left">
          <span>¥</span><span>{{item.amount}}</span><span>.</span><span>{{item.status}}</span>
          <p>满{{item.sum_condition}}元可用</p>
        </div>
        <div class="item_middle">
          <h4>分享红包</h4>
          <p>{{item.end_date}}到期</p>
          <p>限收货手机号为:{{item.description_map.phone}}</p>
        </div>
        <div class="item_right">
          <p>{{item.description_map.validity_delta}}</p>
        </div>
      </section>
      <!-- 提示 -->
      <div class="item_p">
        <p>限品类:快餐便当,特色菜系,小吃夜宵,甜品饮品,异国料理</p>
      </div>
      <!-- 历史红包 -->
      <div class="item_span">
        <span>查看历史红包</span>
        <span class="el-icon-arrow-right" @click="hitPack"></span>
      </div>
      <div class="foot">
        <span @click="footPack">兑换红包</span>
        <span @click="footRecom">推荐有奖</span>
      </div>
    </div>
    <div class="block1" v-else>
      <div class="block1_ban">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAvJJREFUSA21Vk1IFVEU/s7MvOd/+U+pkZmEEBXiIgpq06KFYUmLFrZp0S4fFAW1ioi2RU9oFbQJCgoqQYIWEkKQixKK7IfMCnuEYvlSek99M7d77rzRGWfu06Du5s49P98599zzM4QCa3dyumlR2IeFEJ0gbJWiDXnxFATGiGggRuaj4UTNhA6GohjtfVMNcMQlgjghwc0oGY8mjdgCdAsGXRzprUt5dG8PGWjv+95FNt0WEBWe0Fp2As0KUxwf6d3Q75c3/IeO5GQCNj34W3DGUDpSV2H4QJduwJ4zuBQNGPVky+KELVUmZEgw/iOHuQXhsVbs5MAU3d5NlAGOOdnOuyjPK4oIp/aW4+iOEhlm1x/bEbj/OoO+Z3P4vRg25IbLaOM3sZR5+aBR4Ax39VAlOpriGPyYxdNP8zAl8cj2EhzbVYraMgPnBtIrbpAPl8SUjJPkpmLuc1S2dLYV4/LB9XjyIYvzj5eBLBnEuz01aKm20HNnGm8ncyEjnF0xspqNfJ5HpmJ7Y0wp9o9mAgA5Bxj+uqBo2+rcIAQE5IEdZmxDFdFKbv78fiqHh28yGJsOe9i4zvVpJhN+Aw+OsS1VoRqZe6/Y86D3rLxzYwx7NseRzjp4+c29iQca2GX1c0p65R/g6Q4t1Saud1Uq9gX5LrPzGu9cgIbInNeB15cbuNFdhdIYyeyZwfP8O+jkmc4GQv1Dp3BmXwXqy01cGfyFofECoVkGSBncFZfP+q+4fNMDrUWYSOfQP5rVC/o5ElsWJw34abpvLirTIHz5aetEQnTGLlhofg0urjppJCNbw0y24MMqtaVC42Gh+rkfLeK72CK01lpoltW7lsWYjO1mkRwW3KAKKW6q5PSswtn9q48JhSUxGU8Z4K7HwwKQrVazON+HZLMbSa2WPeS4g8edbm7/zYPysHAccU03EzS2fWRyDINOv0jUJz1iwAAT/+vIZAM8iYRptIGMm5wJTCu0lIyUZR1vivnlQzfwM//Fb8sfhhUzHMwI/u8AAAAASUVORK5CYII=" alt="">
        <span>商家代金券说明</span>
      </div>
      <div class="block1_con">
        <!-- 临时图片 -->
        <img src="../../../imgages/8.png" alt="">
        <h4>无法使用代金券</h4>
        <p>非客户端或客户端版本过低</p>
        <button @click="block1_but">下载或升级客户端</button>
      </div>
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
    name: "Hybenefit",
    data () {
      return {
        itemArr:[],
        isShow:true,
        // isShow2:false,
      }
    },
    methods:{
      ban_hong(){
        this.isShow = true;
        // this.isShow2 = false;
      },
      ban_dai(){
        // this.isShow2 = true;
        this.isShow = false;
      },
      block1_but(){
        this.$router.push({path:'download'});
      },
      // 兑换红包
      footPack(){
        this.$router.push({path:'/benefit/exchange'});
      },
      // 推荐有奖
      footRecom(){
        this.$router.push({path:'/benefit/commend'});
      },
      // 历史红包
      hitPack(){
        this.$router.push({path:'/benefit/hbHistory'})
      },
    },
    // created(){
    //   Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0').then((res)=>{
    //     console.log(res.data);
    //     this.itemArr = res.data;
    //     this.$store.state.packNum = this.itemArr.length;
    //   }).catch((err)=>{
    //     console.log("请求错误",error);
    //   });
    // },
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
  .benefit{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    z-index: 20;
  }
  .benefit-header{
    width: 100%;
    height: 2rem;
    font-weight: 700;
    font-size: .8rem;
    padding-left: 2%;
  }
  .banner{
    width: 100%;
    height: 2rem;
    background-color: #fff;
    font-size: .7rem;
    padding:  3% 20% 3%  20%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .block{
    width: 94%;
    margin: 0 3% 0 3%;
    /* background: yellow; */
  }
  .block_ban{
    width: 100%;
    height: 2rem;
    font-size: .6rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .block_ban b{
    color: red;
  }
  .list_item{
    width: 98%;
    height: 4rem;
    margin-left: 1%;
    background: url('../../../imgages/7.png') repeat-x;
    background-size: .5rem;
    box-sizing: border-box;
    padding: .6rem;
    position: relative;
    font-size: .4rem;
    color: #ccc;
    background-color: #fff;
    margin-top: 1rem;
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
    color: red;
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
  .item_middle h4{
    color: #000;
  }
  .item_right{
    width: 20%;
    height: 2.5rem;
    position: absolute;
    left: 85%;
  }
  .item_right p{
    padding-top: .4rem;
    font-size: .7rem;
    color: red;
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
  .foot{
    width: 100%;
    height: 2rem;
    background: #fff;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .foot span{
    /* display: inline-block; */
    width: 50%;
    height:2rem;
    line-height: 2rem;
  }
  .foot span:nth-child(1){
    border-right: 1px solid #ccc;
  }
  /* 红包区域结束 */
  /* 代金券开始 */
  .block1{
    width: 100%;
  }
  .block1_ban{
    width: 94%;
    height: 2rem;
    line-height: 2rem;
    text-align: right;
    font-size: .5rem;
    color: #3190e8;
  }
  .block1_ban img{
    width: 5%;
  }
  .block1_con{
    width: 50%;
    height: 6rem;
    /* background: #3190e8; */
    text-align: center;
    line-height: 1.5rem;
    margin: 4rem ;
  }
  .block1_con img{
    width: 70%;
    margin-bottom: 1rem;
  }
  .block1_con p{
    font-size: .5rem;
  }
  .block1_con button{
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    border-radius: 5%;
    background-color: #56d176;
    color:#fff;
    font-size: .7rem;
  }
</style>
