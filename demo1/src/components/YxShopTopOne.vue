<template>
  <!--每一个店铺的具体商品展示页面-->
    <div>
      <div class=""></div>
      <p class="sShop11">
        <span class="glyphicon glyphicon-menu-left jiantou" @click="$router.back(-1)"></span>
        <span :class="{'shangpin':true,'sele':sele==='商品'?true:false}" @click="sele='商品'">
          商品
        </span>
        <span :class="{'pingjia':true,'sele':sele==='评价'?true:false}" @click="sele='评价'">评价</span></p>
      <div class="sMax">
        <div class="sLeft1">
          <ul>
            <li v-for="s in $store.state.shopAll" :class="{'sLi':true,'select':issele===s.name?true:false}" @click="sendLiRight(s)">
              <span>{{s.name}}</span>
            </li>
          </ul>
        </div>
        <div class="sRight">
          <ul class="sRightOne">
            <li class="sRightLiOne"><span>{{liName}}</span><span class="spanTwo">{{liDes}}</span></li>
            <!--右侧列表-->
            <li v-for="s1 in this.liAll" class="sRightList">
              <div class="s1Img">
                <img :src="'//elm.cangdu.org/img/'+s1.image_path" alt="无">
              </div>
              <div class="s1Right">
                <span class="c1Name">{{s1.name}}</span>
                <span class="c1Des">{{s1.description}}</span>
                <p>
                <span class="yueshou1">{{gettips(s1)}}</span>
                <span class="yueshou1">好评率{{s1.satisfy_rate}}%</span>
                </p>
                <p>
                  <span class="moneyOne"><span class="mone">¥{{s1.specfoods[0].price}}</span>起</span>
                  <!--选规格或者加号-->
                  <span></span>
                </p>
              </div>
              <div class="empty"></div>
            </li>
          </ul>
        </div>
        <div class="empty"></div>
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
            //判断是都更换背景颜色
            issele:'',
            //名字和描述
            liName:'',
            liDes:'',
            //整个右侧子串对象(也就是foods对应的数组)
            liAll:{}
          }
        },
      methods:{
        sendLiRight(s){
          this.liAll=s.foods;
          this.liName=s.name;
          this.liDes=s.description;
          this.issele=s.name;
        },
        //过滤月售
        gettips(s1){
            return s1.tips.split(" ")[1];
        },
      },
      created(){
          //---------------------
            //(还有两个页面中商铺点击时也要进行1,通过id发起请求赋值给shopAll2.传递对应的商铺本身的信息赋值给shopP)
          //一个店铺商品内部的所有信息
        console.log(this.$store.state.shopAll);
        //商铺本身的信息
        console.log(this.$store.state.shopP);
      }
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
  }
  .s1Img,.s1Right{
    float: left;
  }
  .s1Right{
    width: 8.7rem;
    background: blue;
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
    background: red;
    line-height: 1.5rem;
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
    background: yellow;
    font-size: 0.5rem;
  }
  .moneyOne{
    display: inline-block;
    width:2.5rem;
    background: yellowgreen;
    font-size: 0.7rem;
  }
  .mone{
    color: #FF6600;
    font-weight: bolder;
    letter-spacing: 0.1rem;
  }
</style>
