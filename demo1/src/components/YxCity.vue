<template>
  <div class="max">
      <mt-header fixed class="title">
        <!--路由跳转页面1(左侧)-->
        <router-link to="/" slot="left">
          ele.me
        </router-link>
        <!--路由跳转页面2(右侧登录注册)-->
        <router-link to="/" slot="right">
          登录|注册
        </router-link>
      </mt-header>
    <!--内容-->
  <div class="cityMax">
    <mt-header class="content">
      <span slot="left">
      当前定位城市:
      </span>
      <span slot="right" class="spanR">
        定位不准时,请在城市列表中选择
      </span>
    </mt-header>
    <mt-header class="content content1">
      <!--(定位)-->
      <router-link to="/" slot="left">
        <span>{{local}}</span>
      </router-link>
    </mt-header>
    <mt-header class="content content2">
      <span slot="left">热门城市</span>
  </mt-header>
    <p class="content content3">
      <!--路由跳转3,进入页面-->
      <!--传递参数-->
      <router-link to='/' v-for="h in hotC" class="hc">
        <a @click="sendVueX(h.name,h.id)">
        {{h.name}}
        </a>
      </router-link>
    </p>
      <!--显示所有城市-->
      <div class="ulone">
        <li v-for="(v,k) in getValue" class="lione">
          <mt-header class="content content1">
            <span slot="left">{{k}}</span>
          </mt-header>
          <!--所有城市路由跳转4-->
            <router-link to='/' v-for="item in v">
              {{item.name}}
            </router-link>
        </li>
      </div>
  </div>
  </div>
</template>

<script>
  import { Header } from 'mint-ui';
  import  Vue from "vue";
  Vue.component(Header.name, Header);
    export default {
      name: "YxCity",
      data() {
        return {
          local: '',
          hotC: [],
          allValues:{},
          allKey: [],
          allValue: {}
        }
      },
      computed: {
        getValue() {
          this.allKey = Object.keys(this.allValues);
          //数组进行排序
          this.allKey.sort();
          for (let i = 0; i < this.allKey.length; i++) {
            let index = this.allKey[i];
            this.allValue[index] = this.allValues[index];
          }
          return this.allValue;
        }
        },
      methods:{
        sendVueX(n,i){
          this.$store.state.cityIn={name:n,id:i};
        }
      },
        created() {
          //  请求定位
          Vue.axios.get('https://elm.cangdu.org/v1/cities?type=guess').then((res) => {
            this.local = res.data.name;
          }).catch((error) => {
            console.log('请求错误', error)
          });
          //请求热门城市
          Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot').then((res) => {
            this.hotC = res.data;
          }).catch((error) => {
            console.log('请求错误', error)
          });
          //请求所有城市
          Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group').then((res) => {
            this.allValues=res.data;
          }).catch((error) => {
            console.log('请求错误', error)
          });
        }
    }
</script>

<style scoped>
  <!--应设置全局清除默认样式-->
  *{
    padding: 0;
    margin: 0;
  }
.max{
  background: #F5F5F5;
  }
.title{
  height: 2rem;
  font-size:0.7rem;
}
  .title a{
    text-decoration: none;
    color:white;
  }
  .content{
    background: #fff;
    height: 1.8rem;
    color:#666666;
    font-size: 0.6rem;
    margin-top: 2rem;
    border-bottom: 1px solid #E4E4E4;
  }
  .spanR{
    font-weight: 600;
    font-size: 0.5rem;
    color:#9F9F9F;
  }
  .content1{
    margin-top: 0;
  }
  .content2{
    margin-top: 0.5rem;
    font-size: 0.5rem;
    height: 1.5rem;
  }
  .content3{
    height: 3.4rem;
    margin-top:0;
    border-bottom: 0;
  }
  .hc{
    display: inline-block;
    width: 3.99rem;
    height: 1.7rem;
    line-height: 1.7rem;
    box-sizing: border-box;
    text-align: center;
    border-right: 1px solid #E4E4E4;
    border-bottom: 1px solid #E4E4E4;
  }
  .lione{
    list-style: none;
    font-size: 0;
    margin-top: 0.5rem;
  }
  .ulone a{
    display: inline-block;
    width: 3.99rem;
    height: 1.7rem;
    line-height: 1.7rem;
    box-sizing: border-box;
    text-align: center;
    border-right: 1px solid #E4E4E4;
    border-bottom: 1px solid #E4E4E4;
    background: #fff;
    color:#9F9F9F;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    font-size: 0.5rem;
    margin: 0;
  }

</style>
