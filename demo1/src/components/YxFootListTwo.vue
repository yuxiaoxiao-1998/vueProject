<template>
    <!--插座上三个按钮点击时的排序里面的各个路由时,为YxFoodList的路由跳转的子组件-->
  <div class="shopMax">
    <ul class="y_ul">
      <!--商铺列表-->
      <!--路由跳转2-每一个商铺页面-->
      <router-link to="/merchant ">
        <li v-for="p in $store.state.clickTwo">
          <!--左侧-->
          <div class="s_left">
            <!--有两个图片路径出错-->
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
            <p class="s_f">
              <span class="s_f1">{{getp(p)}}</span>
              <span class="s_f2" v-if="is_show">{{getp1(p)}}</span>
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
            <!------------------------>
          </div>
          <div class="empty"></div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>

    export default {
      name: "YxFootListTwo",
      data(){
          return {
            is_show:true
          }
      },
      methods:{
        //对对象的text进行操作(蜂鸟专送)
        getp(p){
         let b= p.hasOwnProperty("delivery_mode");
         if(b===false){
           p['delivery_mode']={text:''};
         }else{
           return p.delivery_mode.text;
         }
         return p.delivery_mode.text;
        },
        //对对象的name进行操作(准时达)
        getp1(p) {
          if(p.supports.length==0){
            this.is_show=false;
          }else if(p.supports.length==1){
            this.is_show=false;
          }else{
              this.is_show=true;
              return p.supports[1].name;
          }
        },
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
    float: right;
    text-align: right;
  }
  .gongli_1{
    color: #666;
  }
  #xingxing{
    display: inline-block;
  }
</style>
