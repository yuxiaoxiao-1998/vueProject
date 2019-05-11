<template>
    <div class="onePage">
      <mt-header fixed :title="$store.state.cityall.n" id="homeOne">
        <router-link to="/foodSearch" slot="left">
          <span class="glyphicon glyphicon-search"></span>
        </router-link>
        <!--登录跳转-->
        <router-link to="/dl" slot="right">
          登录|注册
        </router-link>
      </mt-header>
      <div class="homeOneMax">
        <div class="swiper-container swMax">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul class="swUl">
                <li v-for="p in food">
                  <router-link to="/food">
                    <!--向vuex发送数据-->
                    <a @click="sendVuexY(p.title,allShop)">
                  <img :src="'http://fuss10.elemecdn.com'+p.image_url" alt="无法显示图片">
                  <p>{{p.title}}</p>
                    </a>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="swUl1">
                <li v-for="p1 in foodTwo">
                  <!--路由跳转1-food页面-->
                  <router-link to="/food">
                  <img :src="'http://fuss10.elemecdn.com'+p1.image_url" alt="无法显示图片" >
                  <p>{{p1.title}}</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <!--所有商铺列表-->
        <div class="shopMax">
          <p class="y_p1"><img src="../image/shop.png" alt="无法显示">附近商家</p>
          <ul class="y_ul">
            <!--商铺列表-->
            <!--路由跳转2-每一个商铺页面-->
            <router-link to="/shopHome">
            <li v-for="p in allShop">
              <a @click="sendId(p.id,p)">
              <!--左侧-->
              <div class="s_left">
                <img :src="'//elm.cangdu.org/img/'+p.image_path" alt="无法显示图片" class="y_img">
              </div>
              <!--右侧-->
              <div class="s_right">
                <!--动态判断-->
                <span :class="{'pp':true,'pp1':!p.is_premium}">品牌</span>
                <!--商家名字-->
                <span class="s_name">{{p.name}}</span>
                <p class="s_span">
                <!--保准票的显示-->
                 <span v-for="s in p.supports">
                   {{s.icon_name}}
                 </span>
                </p>
                <!--月售多少单-->
                <p class="s_num">
                  <el-rate
                    v-model="p.rating"
                    disabled
                    show-score
                    text-color="#ff9900"
                  class="xingxing">
                  </el-rate>
                  <span class="pf">{{'月售'+p.recent_order_num}}单</span>
                  </p>
                <!--蜂鸟快送/准时达-->
                <p class="s_f">
                  <span class="s_f1">{{p.delivery_mode.text}}</span>
                  <span class="s_f2">{{p.supports[1].name}}</span>
                </p>
                <!--配送费-->
                <div>
                  <span class="s_peisong">&yen;{{p.float_minimum_order_amount+'元起送/'+p.piecewise_agent_fee.tips}}</span>
                <!--公里数/时间-->
                <span class="s_gongli">
                <span class="gongli_1">{{p.distance}}</span>
                <span>/{{p.order_lead_time}}</span>
                </span>
                  <div class="empty"></div>
                </div>
              </div>
              <div class="empty"></div>
              </a>
            </li>
            </router-link>
          </ul>
        </div>
      </div>

    </div>
</template>

<script>
  import Swiper from 'swiper'
  import Vue from "vue"
    export default {
        name: "YxOnePage",
        data(){
            return {
              allFood:[],
              one:[],
              two:[],
              allShop:[]
            }
        },
      computed:{
          food(){
            this.one=this.allFood.slice(0,8);
            return this.one;
          },
        foodTwo(){
          this.two=this.allFood.slice(8,16);
          return this.two;
        }
      },
      created(){
        //获取轮播图上的信息
        Vue.axios.get('https://elm.cangdu.org/v2/index_entry').then((res) => {
          this.allFood=res.data;
        }).catch((error) => {
          console.log('请求错误', error)
        });
      },
        mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
          loop: true,
          pagination:
            {
              el:'.swiper-pagination'
            }
        });
          //获取所有餐馆的信息
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.cityall.l+'&longitude='+this.$store.state.cityall.l1).then((res) => {
            //商铺信息
            this.allShop=res.data;
          }).catch((error) => {
            console.log('请求错误', error)
          });
        },
      methods:{
        sendVuexY(title,all){
          this.$store.state.title=title;
          this.$store.state.allList=all;
        },
        sendId(id,p){
          //点击哪一个发送哪一个的请求
          Vue.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id='+id).then((res) => {
            //该数据为点击商铺列表所存储的该商铺内所有信息
            this.$store.state.shopAll=res.data;
            //该数据为首页店铺页本身对象
            this.$store.state.shopP=p;

          }).catch((error) => {
            console.log('请求错误', error)
          });
        }
      }
    }
</script>

<style scoped>
  .empty{
    clear: both;
  }
  .onePage{
    background: #e4e4e4;
  }
  #homeOne{
    height: 2rem;
    font-size: 0.7rem;
   z-index: 10;
  }
  .homeOneMax{
    margin-top: 2rem;
  }
  .swMax{
    height: 8rem;
    background: white;
    border-bottom: 2px solid #e4e4e4;
  }
  .swUl,.swUl1{
    list-style: none;
  }
  .swUl li,.swUl1 li{
    float: left;
    width: 3.9rem;
    text-align: center;
    margin-top: 0.2rem;
    font-size: 0.5rem;
  }
  .swUl a,.swUl1 a{
    color:black;
  }
  .swUl img,.swUl1 img{
    width: 2.5rem;
  }
  .shopMax{
    border:1px solid #e4e4e4;
    background: white;
    margin-top: 0.5rem;
  }
  .y_p1{
    font-size: 0.6rem;
    height: 1.5rem;
    line-height: 1.5rem;
    padding-left: 0.5rem;
  }
  .y_p1 img{
    width: 0.7rem;
    margin-right: 0.3rem;
  }
  .y_ul{
    list-style: none;
  }
  .y_ul li{
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 0.5rem;
    padding-left:0.5rem;
    position: relative;
  }
  .y_img{
    width: 3rem;
  }
  .pp{
    display: inline-block;
    background: #FFD930;
    padding: 0.05rem 0.15rem;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.5rem;
    color:black;
  }
  .pp1{
    display: none;
  }
  .shopMax{
    margin-bottom: 2.3rem;
  }
  .s_name{
    color: black;
    font-size: 0.6rem;
    font-weight: bold;
  }
  .s_left,.s_right{
    float: left;
  }
  .s_right{
    width:12rem;
    padding-left: 0.5rem;
  }
  .s_span{
    display: inline-block;
    color: #666;
    position: absolute;
    right: 0.5rem;
    text-align: right;
    font-size: 0.5rem;
  }
.s_num{
  display: block;
  color: #666;
  margin-top: 0.5rem;
  font-size: 0.5rem;
}
  .s_f{
    height: 0.7rem;
    line-height: 0.7rem;
    text-align: right;
  }
.s_f1{
  color: white;
  background: #72B3EF;
  padding:0.1rem 0.1rem;
  font-size: 0.3rem;
  border-radius: 4px;
}
  .s_f2{
    border: 1px solid #72B3EF;
    padding:0 0.1rem;
    font-size: 0.3rem;
    border-radius: 4px;
    margin-left: -0.1rem;
  }
  .s_peisong{
    display:inline-block;
    width: 6rem;
    color: #666;
    font-size: 0.4rem;
  }
  .s_gongli{
    width: 5.35rem;
    display: inline-block;
    font-size: 0.4rem;
    float: right;
    text-align: right;
  }
  .gongli_1{
    color: #666;
  }
  .pf{
    font-size: 0.5rem;
  }
  .xingxing{
    display: inline-block;
  }
</style>
