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
                  <img :src="'http://fuss10.elemecdn.com'+p.image_url" alt="无法显示图片">
                  <p>{{p.title}}</p>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul class="swUl1">
                <li v-for="p1 in foodTwo">
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
            <li v-for="p in allShop">
              <!--左侧-->
              <div>
                <img :src="'//elm.cangdu.org/img/'+p.image_path" alt="无法显示图片" class="y_img">
              </div>
              <!--右侧-->
              <div>
              </div>
            </li>
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
            console.log(this.allShop);
          }).catch((error) => {
            console.log('请求错误', error)
          });
        }
    }
</script>

<style scoped>
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
  }
  .y_img{
    width: 3rem;
  }
</style>
