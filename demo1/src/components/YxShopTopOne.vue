<template>
  <!--每一个店铺的具体商品展示页面-->
    <div>
      <img :src="'//elm.cangdu.org/img/'+$store.state.shopP.image_path" alt="无法显示" class="bg" v-if="isImg">
      <div class="getMsg" v-if="isImg">
        <div class="getImgleft">
          <img :src="'//elm.cangdu.org/img/'+$store.state.shopP.image_path" alt="无法显示图片" class="leftImg">
        </div>
        <div class="getImgright">
          <p class="rightname">{{$store.state.shopP.name}}</p>
          <div class="rou1">
            <router-link to="/pro">
          <p>商家配送 / 分钟送达 / {{$store.state.shopP.piecewise_agent_fee.tips}}</p>
          <p>公告:{{$store.state.shopP.promotion_info}}</p>
            <span class="glyphicon glyphicon-menu-right jiantou1"></span>
            </router-link>
          </div>
        </div>
        <div class="empty"></div>
        <div class="huodong">
          <router-link to="/proone">
          <p class="threeP">
           <span class="threeImg">{{$store.state.shopP.activities[0].icon_name}}</span>
          <span class="activ">{{$store.state.shopP.activities[0].description}}(APP专享)</span>
            <span class="num">{{$store.state.shopP.activities.length}}个活动</span>
            <span class="glyphicon glyphicon-menu-right jiantou2"></span>
          </p>
          </router-link>
        </div>
      </div>
      <div class="shop12">
      <p class="sShop11">
        <span class="glyphicon glyphicon-menu-left jiantou" @click="$router.back(-1)"></span>
        <span :class="{'shangpin':true,'sele':sele==='商品'?true:false}" @click="sele='商品'">
          商品
        </span>
        <span :class="{'pingjia':true,'sele':sele==='评价'?true:false}" @click="sele='评价'">评价</span></p>
      <div class="sMax">
        <div class="sLeft1">
          <ul>
            <li v-for="s in $store.state.shopAll" :class="{'sLi':true,'select':issele===s.id?true:false}" @click="sendLiRight(s)">
              <span>{{s.name}}</span>
            </li>
          </ul>
        </div>
        <div class="sRight">
          <ul class="sRightOne">
            <li class="sRightLiOne"><span>{{liName}}</span><span class="spanTwo">{{liDes}}</span></li>
            <!--右侧列表-->
            <li v-for="s1 in this.liAll" class="sRightList">
              <div class="new" v-if="newFood(s1)">新品</div>
              <div class="s1Img">
                <img :src="'//elm.cangdu.org/img/'+s1.image_path" alt="无">
              </div>
              <div class="zp" v-if="zp(s1)">招牌</div>
              <div class="s1Right">
                <span class="c1Name">{{s1.name}}</span>
                <span class="c1Des">{{s1.description}}</span>
                <p>
                <span class="yueshou1">{{gettips(s1)}}</span>
                <span class="yueshou1">好评率{{s1.satisfy_rate}}%</span>
                </p>
                <div class="zp1">{{des(s1)}}</div>
                <p>
                  <span class="moneyOne"><span class="mone">¥{{s1.specfoods[0].price}}</span>起</span>
                  <!--选规格或者加号-->
                  <span>{{getGuige(s1)}}</span>
                </p>
              </div>
              <div class="empty"></div>
            </li>
          </ul>
        </div>
        <div class="empty"></div>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "YxShopTopOne",
        data(){
          return {
            //首页上点击商铺传递的商铺本身的信息
            topShop:this.$store.state.shopP,
            sele:'商品',
            //判断是否更换背景颜色
            issele:'',
            //名字和描述
            liName:'',
            liDes:'',
            //整个右侧子串对象(也就是foods对应的数组)
            liAll:{},
            //当没有活动时,不显示上面图片
            isImg:true,
          }
        },
      methods:{
        sendLiRight(s){
          this.liAll=s.foods;
          this.liName=s.name;
          this.liDes=s.description;
          this.issele=s.id;
        },
        //过滤月售
        gettips(s1){
            return s1.tips.split(" ")[1];
        },
        //判断新品
        newFood(l){
          //新品
          let newfood=false;
            let b=l.hasOwnProperty("attributes");
            if(b){
              for(let i of l.attributes){
                if(i !== null){
                  if(l.attributes.length >=1 && l.attributes[0].icon_name==='新'){
                    newfood=true;
                    return newfood;
                  }else if(l.attributes.length >1 && l.attributes[1].icon_name ==='新'){
                    newfood=true;
                    return newfood;
                  }else{
                    newfood=false;
                    return newfood;
                  }
                }else{
                  newfood=false;
                  return newfood;
                }
              }
            }
        },
        //判断招牌
        zp(l){
          //招牌
          let zhaopai=false;
          let b1=l.hasOwnProperty("attributes");
          if(b1){
            for(let i of l.attributes){
              if(i !== null){
                if(l.attributes.length >=1 && l.attributes[0].icon_name==='招牌'){
                  zhaopai=true;
                  return zhaopai;
                }else if(l.attributes.length >1 && l.attributes[1].icon_name ==='招牌'){
                  zhaopai=true;
                  return zhaopai;
                }else{
                  zhaopai=false;
                  return zhaopai;
                }
              }else{
                zhaopai=false;
                return zhaopai;
              }
            }
          }
        },
        //判断价格上面的描述
        des(l){
          if(l.activity === null){
            l.activity={"image_text":''};
          }
          return l.activity.image_text;
        },
        //判断是选规格还是加号
        getGuige(l){
          if(l.specfoods.length === 0){
          return '+';
          }else{
            return '选规格';
          }
        }

      },
      created(){
        //商铺本身的信息
        for(let icon of this.$store.state.shopP.activities) {
          if (icon.icon_name === '无') {
            this.isImg=false;
          }else{
          this.isImg=true;
          }
        }
      },
    }
</script>

<style scoped>
  .empty{
    clear: both;
  }
.sShop11{
  height: 2rem;
  background: white;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 0;
}
.shangpin{
    width: 1rem;
    height:1rem;
    margin-left: 3rem;
    display: inline-block;
    margin-top: 0.5rem;
     font-size:0.5rem ;
    width: 1.5rem;
    text-align: center;
    font-weight: bold;
  }
  .pingjia{
    width: 1.5rem;
    height:1rem;
    margin-left: 4rem;
    display: inline-block;
    font-size:0.5rem ;
    text-align: center;
    font-weight: bold;
  }
  .sele{
    border-bottom: 2px solid #3190E8;
    color:#3190E8;
  }
.jiantou{
  font-size: 0.7rem;
  padding-left: 1rem;
  vertical-align: -0.3rem;
  box-sizing: border-box;
}
  .sLi{
    height: 2rem;
    line-height: 2rem;
    width: 4rem;
    text-align: center;
    background: #F5F5F5;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    font-size: 0.6rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sLeft1{
    float: left;
    list-style: none;
  }
  .sRightOne li{
    list-style: none;
    padding-left: 0.3rem;
  }
  .sRight{
    float: right;
    width: 12rem;
    margin-bottom: 2rem;
  }
  .sRightLiOne{
    height: 2rem;
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: bolder;
    color: #6E6A66;
    background: #F5F5F5;
  }
  .sRightLiOne .spanTwo{
    font-size: 0.4rem;
    font-weight: 400;
    margin-left: 0.3rem;
    color:#999999;
  }
  .s1Img img{
    width: 2.7rem;
  }
  .sRightList{
    padding:0.3rem;
    border-bottom: 1px solid #e4e4e4;
    background: white;
    position: relative;
    overflow: hidden;
  }
  .s1Img,.s1Right{
    float: left;
  }
  .s1Right{
    width: 8.7rem;
    padding-left: 0.5rem;
  }
  .select{
    background: white;
    border-left: 5px solid #3190E8;
  }
  .c1Name{
    display: inline-block;
    font-weight: bolder;
    font-size: 0.7rem;
    height: 1.5rem;
    width: 6rem;
    line-height: 1.5rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .c1Des{
    display: block;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.5rem;
    color:#999999;
  }
  .yueshou1{
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.5rem;
  }
  .moneyOne{
    display: inline-block;
    width:2.5rem;
    font-size: 0.7rem;
  }
  .mone{
    color: #FF6600;
    font-weight: bolder;
    letter-spacing: 0.1rem;
  }
  .bg{
    width: 100%;
    height:5rem;
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    /*高斯模糊*/
    filter: blur(20px);
  }
  .shop12{
    position: relative;
  }
  .getMsg{
    position: relative;
    margin-bottom: 0;
    box-sizing: border-box;
    padding: 0.5rem;
    background: rgba(0,0,0,0.3);
  }
  .getImgleft{
    float: left;
  }
  .getImgright{
    float: left;
    box-sizing: border-box;
    padding-left: 0.5rem;
  }
  .leftImg{
    width: 3rem;
    border-radius: 10px;
  }
  .getImgright a{
    font-size: 0.5rem;
    color: white;
  }
  .rightname{
    font-size: 0.7rem;
    font-weight: bolder;
    color: white;
  }
  .threeP{
    margin-bottom: 0;
  }
  .threeImg{
    display: inline-block;
    background: rgb(240,115,115);
    padding: 0.09rem;
    font-size: 0.5rem;
    border-radius: 5px;
    color: white;
  }
  .rou1{
    position: relative;
    width: 11rem;
  }
  .jiantou1{
      position: absolute;
      right:0.2rem;
      top:0.5rem;
  }
  .jiantou2{
    position: absolute;
    right:0.8rem;
    top:0.1rem;
    color: white;
    font-size: 0.5rem;
  }
  .activ{
    color: white;
    font-size: 0.5rem;
    margin-left: 0.5rem;
  }
  .huodong{
    margin-top: 0.5rem;
    position: relative;
  }
  .num{
    color: white;
    position: absolute;
    right:1.4rem;
    top:0.1rem;
  }
  .new{
    width: 2rem;
    height: 2rem;
    background: #5ec452;
    color:white;
    font-size: 0.4rem;
    box-sizing: border-box;
    padding-top: 1.3rem;
    text-align: center;
    transform: rotateZ(-45deg);
    position: absolute;
    left:-1rem;
    top:-1rem;
  }
  .zp{
    color:#f07373;
    border: 1px solid #f07373;
    display: inline-block;
    border-radius: 10px;
    font-size: 0.35rem;
    padding: 0.01rem 0.1rem;
    position: absolute;
    right: 1rem;
    top:0.5rem;
  }
  .zp1{
    color:#f07373;
    border: 1px solid #f07373;
    display: inline-block;
    border-radius: 10px;
    font-size: 0.35rem;
    padding: 0.01rem 0.1rem;
  }
</style>
