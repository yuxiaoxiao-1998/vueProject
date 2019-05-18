<template>
  <div>
    <!--从home点击轮播图之后默认的点击进入的页面组件,为YxFoodList的默认子组件-->
    <div class="shopMax">
      <ul class="y_ul">
        <!--商铺列表-->
        <!--路由跳转2-每一个商铺页面-->
        <router-link to="/shophome">
          <li v-for="p in $store.state.allList">
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
                    id="xingxing">
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
    <YxLoding v-if=" loadingMark"></YxLoding>
  </div>
</template>

<script>
  import Vue from 'vue';
  import YxLoding from "./YxLoding";
    export default {
        name: "YxFootListOne",
      components: {YxLoding},
      data(){
          return{
            //预加载标识
            loadingMark:true,
          }
      },
         methods:{
        sendId(id,p){
          //点击哪一个发送哪一个的请求
          Vue.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id='+id).then((res) => {
            //该数据为点击商铺列表所存储的该商铺内所有信息
            this.$store.state.shopAll=res.data;
          }).catch((error) => {
            console.log('请求错误', error)
          });
          //判断当icon_name为无时,不显示
          if(p.activities.length === 0){
            p.activities.push({'icon_name':'无'});
          }
          //该数据为首页店铺页本身对象
          this.$store.state.shopP=p;
        }
      },
      mounted(){
        //预加载
        this.loadingMark=false;
      }
    }
</script>

<style scoped>
  .empty{
    clear: both;
  }
  .shopMax{
    border:1px solid #e4e4e4;
    background: white;
    padding-top: 4rem;
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
  .y_ul li:nth-of-type(1){
    padding-top: 0.5rem;
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
  .pf{
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
    text-align: right;
    float: right;
  }
  .gongli_1{
    color: #666;
  }
  #xingxing{
    display: inline-block;
  }
</style>
