<template>
  <div class="address">
    <router-view></router-view>
    <mt-header title="编辑地址" class="address-header">
      <!--登录返回-->
      <mt-button @click="$router.push({path:'/profile/infor'})" icon="back" slot="left"></mt-button>
      <mt-button class="add_edit" @click="changeEdit" slot="right">{{isShow ? perform : edit}}</mt-button>
    </mt-header>
    <div class="part"></div>
    <ul>
      <!-- 假数据  循环添加 -->
      <li v-for="(item,index) in addEdit" :key="index">
        <!-- 非固定值 -->
        <p>{{item.name}}</p>
        <span>{{item.phone}}</span>
        <i class="el-icon-delete" v-if="isShow" @click="delete_li(item,index)"></i>
      </li>
      <!-- <li>
        <p>地址名称</p>
        <span>电话</span>
        <i class="el-icon-delete" v-if="isShow"></i>
      </li> -->
    </ul>
    <div class="part"></div>
    <router-link :to="{path:'/profile/infor/address/add'}">
      <div class="foot">
        <span>新增地址</span>
        <span class="el-icon-arrow-right"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
  // 引入mint-ui 头部
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  export default {
    name: "Hyaddress",
    data () {
      return {
        isShow:false,
        edit:'编辑',
        perform:'完成',
        addEdit:[],
        user_id:'',
        removeaddress:'',
      }
    },
    mounted(){
      this.getAddress();

    },
    beforeRouteUpdate(to, from, next) {
      this.getAddress();
      next()
    },
    methods:{
      // 封装请求地址
      getAddress(){
        Vue.axios.get('https://elm.cangdu.org/v1/user').then(res=>{
          Vue.axios.get("https://elm.cangdu.org/v1/users/"+res.data.user_id+"/addresses").then((res)=>{
            this.addEdit = res.data.reverse();
          }).catch((error) => {
            console.log('请求错误', error)
          });
        }).catch(err=>{
          console.log("请求错误",err);
        });
      },
      changeEdit(){
        this.isShow = !this.isShow;
      },
      delete_li(item,index){
        console .log(item,index);
        Vue.axios.get('https://elm.cangdu.org/v1/user').then(res=>{
          Vue.axios.delete("https://elm.cangdu.org/v1/users/"+res.data.user_id+"/addresses/"+item.id).then(res=>{
            // console.log(res.data);
            // this.removeaddress=res.data;
            // console.log( this.removeaddress);

          });
        }).catch(err=>{
          console.log("请求错误",err);
        })
        this.addEdit.splice(index,1);
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
  a{
    text-decoration: none;
  }
  .address{
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
  /* 头部 */
  .address-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
  }
  .add_edit{
    color: #ffffff;
    position: absolute;
    right: .5rem;
    top: .5rem;
  }
  .part{
    width: 100%;
    height: 1rem;
  }
  /* 假数据区域 */
  ul li{
    list-style: none;
    width: 100%;
    height: 2.5rem;
    background-color: #ffffff;
    font-size: .6rem;
    padding: 2%;
    position: relative;
    margin-top: .1rem;
  }
  ul li i{
    position: absolute;
    right: .7rem;
    top: .7rem;
    font-size: 1rem;
  }
  /* 脚部跳转 */
  .foot{
    width: 100%;
    height: 2rem;
    background-color: #ffffff;
    padding: 2%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    font-size: .8rem;
  }
</style>
