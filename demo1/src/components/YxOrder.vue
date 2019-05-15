<template>
  <div>
   <mt-header title="确认订单" class="order">
     <span class="glyphicon glyphicon-menu-left" slot="left" @click="$router.back(-1)"></span>
     <span slot="right" class="el-icon-user-solid"></span>
   </mt-header>
    <div>
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
        <span class="time2">尽快送达,预计{{getTime()}}</span>
        <span>蜂鸟专送</span>
      </div>
    </div>
    <div class="bottom">
      <span class="orderbot1">待支付</span>
      <span class="orderbot">确认下单</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "YxOrder",
        methods:{
        getTime(){
          let nowTime;
          let hh =new Date().getHours() < 10? "0" + new Date().getHours(): new Date().getHours();
          let mm =new Date().getMinutes();
          if(mm > 30){
            hh=hh+1;
            mm=mm-30;
            if(mm<10){
              mm= "0"+mm;
            }
            if(hh==24){
              hh=1;
              hh='0'+hh;
            }else if(hh<9){
              hh='0'+hh;
            }
           nowTime=hh+':'+mm;
          }
          return nowTime;
        }
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
  /*送达时间*/
  .time{
    margin-top: 0.7rem;
    background: white;
    border-left: 7px solid #3190E8;
    height: 4.5rem;
    line-height:4.5rem;
  }
  .time1{
    font-size: 0.9rem;
    font-weight: bold;
    margin-left: 1rem;
  }
</style>
