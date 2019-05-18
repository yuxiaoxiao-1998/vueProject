<template>
  <div class="order">
    <!--头部-->
    <div class="header">
      <mt-header title="订单列表" class="order-header">
        <!--登录返回-->
        <router-link :to="{path:'/home/profile'}" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

    </div>
    <!--路由跳转-->
    <router-link :to="{path:'/orderDetail'}">
      <div class="myOrderList">
        <section class="leftS">
          <img src="../../image/shop.png" alt="">
        </section>
        <section class="rightS">
          <header class="header1">
            <div class="top1">
              <div class="leftH">效果演示 <span class="el-icon-arrow-right"></span></div>
              <div class="rightH">等待支付</div>
              <div class="empty"></div>
            </div>
            <div class="top2">{{nowTime}}</div>
          </header>
          <section class="middle1">
            <div class="leftM">鸡腿等3件商品</div>
            <div class="rightM">￥20.00</div>
            <div class="empty"></div>
          </section>
          <time class="bottom1">
            <span class="time"> 去支付(还剩{{minute}}分{{second}}秒)</span>
          </time>
        </section>
        <section class="empty"></section>
      </div>
    </router-link>
  </div>

</template>

<script>
  // 引入mint-ui 头部
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  // 引入Element
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);
  export default {
    name: "Hyorder",
    data(){
      return{
        //用户id
        userId:'',
        list:[],
        minute:15,
        second:0,
        //定义一个变量存储定时器
        timer:null,
        //定义一个时间变量
        time:0,
        //定义加入订单列表时的时间
        nowTime:''
      }
    },
    methods: {
// 获取当前时间函数
      timeFormate(timeStamp) {
        let year = new Date(timeStamp).getFullYear();
        let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
        let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
        let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
        let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
        // let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
        // return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
        this.nowTime = year + "-" + month + "-" + date +"-"+" "+hh+":"+mm ;
        // console.log(this.nowTime);
      },
// // 定时器函数
//       nowTimes(){
//         this.timeFormate(new Date());
//         setInterval(this.nowTimes,30*1000);
//       },
    },
    created(){
      this.timeFormate(new Date());//调用时间函数//注意在整个项目中何时调用该函数?!!
      // console.log('here',this.$store.state.userId)
      //获取订单列表
      // Vue.axios.get('https://elm.cangdu.org/bos/v2/users/'+this.$store.state.userId+'/orders?limit=10&offset=0').then((res)=>{
      //   this.list=res.data;
      //   // console.log(res);
      // }).catch((error)=>{
      //   console.log('请求错误111',error)
      // });
    },
    mounted(){
      clearInterval(this.timer);
      this.time=0;
      this.timer=setInterval(()=>{
        this.time++;
        // console.log(this.time)
        if(this.second==0&&this.minute!==0){
          this.minute--;
          this.second=59;
        }else if(this.second!==0){
          this.second--;
        }else if(this.second==0&&this.minute==0){
          clearInterval(this)
        }
      },1000)
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
  html,body{
    width: 100%;
    height: 100%;
  }
  .order{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .order-header{
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    padding-left: 2%;
  }
  .leftS{
    width: 25%;
    height: 5rem;
    float: left;
    padding: .5rem;
    box-sizing: border-box;
  }
  .leftS img{
    width: 100%;
    height: 3rem;
  }
  .rightS{
    width: 75%;
    float: right;
    box-sizing: border-box;
    padding: .5rem;
  }
  .header1{
    width: 100%;
    padding-bottom: .5rem;
    border-bottom: .01rem solid #e4e4e4 ;
  }
  .top1{
    width: 100%;
    line-height: 2rem;
  }
  .leftH{
    width:50%;
    font-size: 1rem;
    float: left;
    font-weight: 500;
    box-sizing: border-box;
  }
  .el-icon-arrow-right{
    margin-left: -0.4rem;
    font-size: .8rem;
  }
  .rightH{
    width: 50%;
    float: right;
    text-align: right;
    font-size: 0.8rem;
    font-weight: 500;
    box-sizing: border-box;
  }
  .top2{
    font-size: 0.5rem;
    color: #666;
  }
  .middle1{
    width: 100%;
    padding:.5rem 0;
    line-height:  2rem;
    border-bottom: .01rem solid #e4e4e4 ;
  }
  .leftM{
    width: 50%;
    font-size:.8rem;
    float: left;
    color: #000;
    box-sizing: border-box;
  }
  .rightM{
    width: 50%;
    font-size:.8rem;
    float: right;
    text-align: right;
    color: orange;
    font-weight: bolder;
    box-sizing: border-box;
  }
  .bottom1{
    display: inline-block;
    width: 100%;
    padding:.5rem 0;
    text-align: right;
  }
  .time{
    border: .05rem solid orange;
    font-size: 0.8rem;
    border-radius: 5%;
    padding: .2rem;
    color: orange;
  }
</style>
