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
      <img :src="'//elm.cangdu.org/img/'+item.shp.image_path" alt="">
      <div class="payLoading">等待支付</div>
      <div class="anotherOrder" @click="qingqiu(item.shp.id)">再来一单</div>
    </section>
    <section class="showOrder">
      <div @click="qingqiu(item.shp.id)">
        <p>
          <img :src="'//elm.cangdu.org/img/'+item.shp.image_path" alt="" class="imgP1">
          <span>{{item.shp.name}}</span>
        </p>
        <img src="../../image/download.png" alt="" class="imgP2">
      </div>
      <div class="top" v-for="obj in item.shp1" >
        <span>{{obj.name}}</span>
        <p>
          <span class="money">{{obj.price}}</span>
          <span>x{{obj.countS}}</span>
        </p>
        <!--<span>{{addcanhe(obj.canhe)}}</span>-->
      </div>
      <div class="canhefee">
        <span>餐盒费</span>
        <span>{{canhefee}}</span>
      </div>
      <div class="fee">
        <span>配送费</span>
        <span>{{item.shp.float_delivery_fee}}</span>
      </div>
      <div class="cash">
        <span></span>
        <span>实付￥{{allPayP+item.shp.float_delivery_fee}}元</span>
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
          <span>{{item.nowA}}</span>
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
  import Vue from 'vue';
  export default {
    name: "HyorderDetail",
    data(){
      return{
        item:this.$route.query,
        canhefee:0,
        allPayP:0,
      }
    },
    methods:{
      qingqiu(id){
        // console.log('id名'+id)
        //点击哪一个发送哪一个的请求
        Vue.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id='+id).then((res) => {
          //该数据为点击商铺列表所存储的该商铺内所有信息
          this.$store.state.shopAll=res.data;
          // console.log(this.$store.state.shopAll);
        }).catch((error) => {
          console.log('请求错误', error)
        });
        //该数据为首页店铺页本身对象
        this.$store.state.shopP=this.item.shp;
        this.$router.push({path:'/shopHome/shopone'})
      },
      // addcanhe(num){
      //   this.canhefee=this.canhefee+num;
      //   console.log(this.canhefee)
      // },
      // allcanhe(){
      //   let fee=this.item.shp1.map((a)=>{
      //     console.log(a.canhe*a.countS)
      //       return a.canhe*a.countS
      //    })
      //   this.canhefee+=fee
      //   // console.log(fee)
      //
      // }
      allcanhe(){
        let allp=0;
        for(let i of this.item.shp1){
          // this.canhefee+=i.canhe*i.countS;???
          allp+=i.canhe*i.countS;
        }
        // console.log( allp)
        this.canhefee=allp;
        // console.log(this.canhefee)
      },
      allPay(){
        let allPrice=0;
        for(let i of this.item.shp1){
          allPrice+=i.price*i.countS;
        }
        allPrice+=this.canhefee;
        this.allPayP=allPrice;
      }
    },
    created(){
      this.allcanhe();
      this.allPay();
      // console.log('hello',this.item)
    }
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
  .top,.fee,.canhefee{
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
