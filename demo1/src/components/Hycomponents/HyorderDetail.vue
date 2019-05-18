<template>
    <div>
      <!--头部-->
      <div class="header">
        <mt-header title="订单详情" class="order-header">
          <!--登录返回-->
          <router-link :to="{path:'/home/order'}" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <section class="waitingPay">
        <img src="../../image/1.png" alt="">
        <div class="payLoading">等待支付</div>
        <div class="anotherOrder">再来一单</div>
      </section>
      <section class="showOrder">
        <div>
          <p>
            <img src="../../image/1.png" alt="" class="imgP1">
            <span>演示效果</span>
          </p>
          <img src="../../image/1.png" alt="" class="imgP2">
        </div>
        <div class="top">
          <span>肯德基</span>
          <p>
            <span class="money">20</span>
            <span>x1</span>
          </p>
        </div>
        <div class="fee">
          <span>配送费</span>
          <span>4</span>
        </div>
        <div class="cash">
           <span></span>
          <span>实付￥24.00</span>
        </div>
      </section>
      <section class="deliveryMsg">
        <h4>配送信息</h4>
        <ul class="middle">
          <li>
            "送达时间:"
            <span>尽快送达</span>
          </li>
          <li>
            "送货地址:"
            <span>爱尔兰</span>
          </li>
          <li>
            "配送方式:"
            <span>蜂鸟配送</span>
          </li>
        </ul>
      </section>
      <section class="orderMsg">
        <h4>订单信息</h4>
        <ul class="middle">
          <li>
            "订单号:"
            <span></span>
          </li>
          <li>
            "支付方式:"
            <span>在线支付</span>
          </li>
          <li>
            "下单时间:"
            <span></span>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
    export default {
        name: "HyorderDetail"
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .empty{
    clear:both;
  }
  ul{
    list-style: none;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
 .waitingPay{
   width: 100%;
   background-color:#fff;
   text-align: center;
   padding: 1rem 0;
 }
  .waitingPay img{
    width: 3rem;
    height: 3rem;
    display: inline-block;
    border-radius: 50%;
  }
  .payLoading{
    font-size: .8rem;
    font-weight: 700;
    margin: .5rem 0;
  }
  .anotherOrder{
    width: 3rem;
    margin: 0 auto;
    padding: .3rem .2rem;
    border-radius: .2rem;
    border: 1px solid #3190e8;
    color: #3190e8;
    font-size: .5rem;
    font-weight: 600;
  }
  .showOrder{
    width: 100%;
    margin-top: .5rem;
    background-color:#fff;
    box-sizing: border-box;
    /*display: flex;*/
  }
  .showOrder>div{
    width: 100%;
    display: flex;
    justify-content:space-between;
    line-height: 1rem;
    padding: .3rem .4rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .showOrder p span{
    display: inline-block;
  }
  .imgP1,.imgP2{
    width: 1rem;
    height: 1rem;
  }
  .money{
    margin-right: 2rem;
  }
  .top,.fee{
    font-size: .6rem;
    font-weight: 600;
    color: #6c6d6f;
  }
  .cash{
    color: #fc7026;
    font-size: .65rem;
    font-weight: 600;
  }
  .deliveryMsg{
    width: 100%;
    margin-top: .5rem;
    background-color:#fff;
    box-sizing: border-box;
  }
  .deliveryMsg>h4,.orderMsg>h4{
    font-size: 1rem;
    color: #333;
    margin: 0;
    padding: .5rem .4rem;
    border-bottom: 1px solid #f5f5f5;
    font-weight: 600;
  }
 .middle{
   padding: .5rem .4rem;
 }
  .middle li{
    line-height: 1.6rem;
    font-size: .6rem;
    font-weight: 600;
    color: #333;
  }
  .middle li span{
    margin-left: .2rem;
  }
  .orderMsg{
    width: 100%;
    margin-top: .5rem;
    background-color:#fff;
    box-sizing: border-box;
  }
</style>
