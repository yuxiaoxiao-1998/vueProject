<template>
    <div class="footerMax">
      <ul class="bottomLi">
        <li>
          <router-link to="/home">
            <span :class="{'e':true,'e1':isS==='外卖'?true:false}" @click="spanC('外卖')"></span>
            <p>外卖</p>
          </router-link>
        </li>
        <li>
          <router-link to="/home">
            <span :class="{'s':true,'s1':isS==='搜索'?true:false}"  @click="spanC('搜索')"></span>
            <p>搜索</p>
          </router-link>
        </li>
        <li>
          <router-link to="/home">
            <span :class="{'d':true,'d1':isS==='订单'?true:false}" @click="spanC('订单')"></span>
            <p>订单</p>
          </router-link>
        </li>
        <li>
          <router-link to="/home">
            <span :class="{'w':true,'w1':isS==='我的'?true:false}"  @click="spanC('我的')"></span>
            <p>我的</p>
          </router-link>
        </li>
        <li class="empty"></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "YxFooter",
        data(){
          return {
            isS:'外卖'
          }
        },
      methods:{
          //点击按钮修改按钮颜色
        spanC(txt){
         switch (txt) {
           case '外卖':{
             this.isS='外卖';
             break;
           }
           case '搜索':{
             this.isS='搜索';
             break;
           }
           case '订单':{
             this.isS='订单';
             break;
           }
           case '我的': {
             this.isS='我的';
             break;
           }
         }
          }
      }
    }
</script>

<style scoped>
.empty{
  clear: both;
}
.footerMax {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border: 2px solid #e4e4e4;
  height: 2.3rem;
  padding-top: 0.3rem;
  z-index: 10;
  background: white;
}
.bottomLi li{
  list-style: none;
  float: left;
  width: 3.5rem;
  text-align: center;
}
.bottomLi li .e{
   display:inline-block;
   width: 1rem;
   height: 1rem;
   -webkit-background-size: contain;
   background-size: contain;
   background-image: url("../image/e.png");
 }
.bottomLi li .s{
  display:inline-block;
  width: 1rem;
  height: 1rem;
  -webkit-background-size: contain;
  background-size: contain;
  background-image: url("../image/z.png");
}
.bottomLi li .d{
  display:inline-block;
  width: 1rem;
  height: 1rem;
  -webkit-background-size: contain;
  background-size: contain;
  background-image: url("../image/d.png");
}
.bottomLi li .w{
  display:inline-block;
  width: 1rem;
  height: 1rem;
  -webkit-background-size: contain;
  background-size: contain;
  background-image: url("../image/w.png");
}
.bottomLi li .e1{
  display:inline-block;
  width: 1rem;
  height: 1rem;
  -webkit-background-size: contain;
  background-size: contain;
  background-image: url("../image/e-1.png");
}
.bottomLi li .s1{
  display:inline-block;
  width: 1rem;
  height: 1rem;
  -webkit-background-size: contain;
  background-size: contain;
  background-image: url("../image/z-1.png");
}
.bottomLi li .d1{
  display:inline-block;
  width: 1rem;
  height: 1rem;
  -webkit-background-size: contain;
  background-size: contain;
  background-image: url("../image/d-1.png");
}
.bottomLi li .w1{
  display:inline-block;
  width: 1rem;
  height: 1rem;
  -webkit-background-size: contain;
  background-size: contain;
  background-image: url("../image/w-1.png");
}
.bottomLi li p{
  color: #8D8D8D;
}
.bottomLi li a{
  text-decoration: none;
}
</style>
