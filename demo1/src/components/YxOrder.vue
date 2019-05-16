<template>
  <div>
   <mt-header title="确认订单" class="order">
     <span class="glyphicon glyphicon-menu-left" slot="left" @click="$router.back(-1)"></span>
     <span slot="right" class="el-icon-user-solid"></span>
   </mt-header>
    <div class="content">
      <div class="adress">
        <!--需判断是否有地址,当有地址时,地址显示,否则默认显示-->
        <span class="el-icon-location-outline dizhi"></span>
        <p class="dizhi1">添加一个收货地址 <span class="glyphicon glyphicon-menu-right jian"></span></p>
        <p></p>
        <p class="bg"></p>
      </div>
      <!--送达时间-->
      <div class="time">
        <span class="time1">送达时间</span>
        <span class="time2">尽快送达|预计{{getTime()}}</span>
        <span class="time3">蜂鸟专送</span>
      </div>
      <!--支付方式-->
      <div class="zf">
        <p><span class="zhifu">支付方式</span><span class="zhifu1" @click="zaixian = !zaixian">在线支付<span class="glyphicon glyphicon-menu-right"></span></span></p>
        <p><span class="hongbao">红包</span><span  class="hongbao1">暂时只在饿了么APP中支持</span></p>
      </div>
      <!--购买的商品的展示-->
      <div class="goumai">
        <p><img :src="'//elm.cangdu.org/img/'+shopP.image_path" alt="无法显示图片" class="y_img">
        <span class="shangpinName">{{shopP.name}}</span></p>
        <!--具体商品的展示-->
        <div class="shopPAllFood">
          <p v-for="s in $store.state.addShopAll" class="allMax">
            <span class="allMax1">{{s.name}}</span>
            <span>{{s.sName}}</span>
            <span  class="allMax2">x{{s.countS}}</span>
            <span  class="allMax3">¥{{s.price}}</span>
          </p>
          <p class="ps"><span class="allMax1">餐盒</span><span class="allMax3">¥{{canhe}}</span></p>
          <p class="ps"><span class="allMax1">配送费</span><span class="allMax3">{{peisong}}</span></p>
        </div>
        <p class="ord"><span class="ord1">订单¥{{money()}}</span> <span class="ord2">待支付</span><span class="ord3">¥{{money()}}</span></p>
      </div>
      <div class="beizhu">
      <p class="bz">订单备注<span  class="bz1">{{bz()}}11111<span class="glyphicon glyphicon-menu-right"></span></span></p>
       <p class="bz fp">发票抬头 <span  class="bz1">不需要开发票<span class="glyphicon glyphicon-menu-right"></span></span></p>
      </div>
    </div>
    <div class="bottom">
      <span class="orderbot1">待支付¥{{money()}}</span>
      <span class="orderbot">确认下单</span>
    </div>

    <!--在线支付的下弹框-->
    <el-collapse-transition>
    <div class="tan" v-if="zaixian">
      <p class="tan1">支付方式</p>
      <div class="tan2">货到付款(商家不支持货到付款)<i class="el-icon-success tb"></i></div>
      <p class="tan3" @click="zaixian = !zaixian">在线支付 <i class="el-icon-success tb1"></i></p>
    </div>
      </el-collapse-transition>
  </div>
</template>

<script>
    export default {
        name: "YxOrder",
        data(){
            return {
              shopP:this.$store.state.shopP,
              canhe:30441.5,
              peisong:this.$store.state.shopP.piecewise_agent_fee.tips.slice(4),
              zaixian:false
            }
        },
        methods:{
        getTime(){
          let nowTime;
          let hh =new Date().getHours() < 10? "0" + new Date().getHours(): new Date().getHours();
          let mm =new Date().getMinutes();
          nowTime=hh+':'+mm;
          return nowTime;
        },
        money(){
          let mon=0;
          for(let p of this.$store.state.addShopAll){
            mon += p.countS * p.price;
          }
          mon=mon+this.canhe+Number(this.peisong.slice(1));
          return mon;
        },
      //    备注信息的显示
          bz(){

          }
      },
      created(){
        // console.log(this.$store.state.shopP);
      }
    }
</script>

<style scoped>
.order{
  height: 2rem;
  font-size: 0.7rem;
}
.bottom{
  width: 100%;
  height: 2rem;
  background:#3C3C3C;
  position: fixed;
  bottom: 0;
  left: 0;
}
  .orderbot{
    color: white;
    font-size: 0.7rem;
    width: 4rem;
    height: 2rem;
    background: #56D176;
    display: inline-block;
    line-height: 2rem;
    text-align: center;
    position: absolute;
    right: 0;
  }
  .orderbot1{
    color:white;
    font-size: 0.7rem;
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
    padding-left: 1rem;
  }
  .adress{
  height: 3rem;
  line-height: 3rem;
  position: relative;
   background: white;
  }
  .dizhi{
    color:#26A2FF;
    font-size: 1rem;
    padding-left: 1rem;
  }
  .dizhi1{
    display: inline-block;
    vertical-align: 0.1rem;
    font-size: 0.6rem;
  }
  .bg{
    width: 100%;
    height: 0.3rem;
    background:url("../image/aaa.png") repeat;
    position: absolute;
    top:3rem;
  }
  .jian{
    position: absolute;
    top:1.2rem;
    right: 2rem;
    color:#ABABAB;
    font-size: 0.5rem;
  }
  .content{
    margin-bottom: 2rem;
  }
  /*送达时间*/
  .time{
    margin-top: 0.5rem;
    background: white;
    border-left: 7px solid #3190E8;
    height: 4.5rem;
    line-height:4.5rem;
    position: relative;
  }
  .time1{
    font-size: 0.9rem;
    font-weight: bold;
    margin-left: 1rem;
  }
  .time2{
      font-size: 0.7rem;
      color: #3190E8;
      position: absolute;
      right: 0.5rem;
      top:-0.5rem;
  }
  .time3{
    font-size: 0.5rem;
    color: white;
    background: #3190E8;
    padding: 0.1rem 0.2rem;
    border-radius: 10px;
    height: 0.8rem;
    line-height: 0.8rem;
    position: absolute;
    right: 0.5rem;
    top:2.5rem;
  }
  /*支付*/
  .zf{
      margin-top: 0.5rem;
      background: white;
  }
  .zhifu{
    font-size: 0.6rem;
    padding-left: 1rem;
  }
  .zhifu1{
    font-size: 0.5rem;
    color: #aaaaaa;
    margin-left: 9.5rem;
  }
  .zf p{
    border-bottom: 1px solid #e4e4e4;
    height: 2rem;
    line-height: 2rem;
  }
  .hongbao{
    font-size: 0.5rem;
    padding-left: 1rem;
    color: #aaaaaa;
  }
  .hongbao1{
    font-size: 0.5rem;
    padding-left: 7rem;
    color: #aaaaaa;
  }
  .goumai{
    margin-top: 0.5rem;
    background: white;
  }
  /*商品展示*/
  .y_img{
    width: 1.5rem;
    margin: 0.3rem 0.5rem;
  }
  .shangpinName{
    font-size: 0.7rem;
  }
  .shopPAllFood{
    border-top: 1px solid #e4e4e4;
    background: white;
    border-bottom: 1px solid #e4e4e4;
  }
  .allMax{
    position: relative;
    height: 1.8rem;
    line-height: 1.8rem;
  }
  .allMax1{
    font-size: 0.6rem;
    margin-right: 0.5rem;
    padding-left: 1rem;
  }
  .allMax2{
      position: absolute;
      right: 3rem;
      font-size:0.6rem;
      color:#FF6663;
  }
  .allMax3{
    position: absolute;
    right: 1rem;
    font-size: 0.6rem;
  }
  .ps{
    height: 2rem;
    line-height: 2rem;
  }
  .ord{
    position: relative;
    height: 4rem;
    padding-top: 0.5rem;
  }
  .ord1{
    font-size: 0.7rem;
    padding-left: 1rem;
  }
  .ord2{
    position: absolute;
    right: 1rem;
    font-size: 0.7rem;
    color:#FF6663;
  }
  .ord3{
    color:#FF6663;
    font-size: 0.7rem;
    position: absolute;
    right: 1rem;
    top:2rem;
  }
  .bz{
    height: 2rem;
    line-height: 2rem;
    font-size: 0.6rem;
    background: white;
    margin-bottom: 0;
    border-bottom: 1px solid #e4e4e4;
    padding-left: 1rem;
  }
  .bz1{
    font-size: 0.5rem;
    width: 12rem;
    display: inline-block;
    text-align: right;
    color: #aaaaaa;
  }
  .fp{
    margin-bottom: 3rem;
  }
  .tan{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 12;
    background: white;
    border-top: 1px solid #e4e4e4;

  }
  .tan1{
    height: 2rem;
    line-height: 2rem;
    background: #FAFAFA;
    font-size: 0.6rem;
    width: 100%;
    text-align: center;
  }
  .tan2{
    height: 2rem;
    line-height: 2rem;
    font-size: 0.7rem;
    padding-left: 1rem;
    position: relative;
    color:#CCCCCC;
  }
  .tan3{
    height: 2rem;
    line-height: 2rem;
    font-size: 0.7rem;
    padding-left: 1rem;
    position: relative;
  }
  .tb1{
    color:#4CD964;
    position: absolute;
    right: 1rem;
    top:0.7rem;
    font-size: 0.7rem;
  }
  .tb{
    color:#CCCCCC;
    position: absolute;
    right: 1rem;
    top:0.7rem;
    font-size: 0.7rem;
  }
</style>
