<template>
  <div class="max">
    <div class="bottom">
       <div :class="{'shop':true}" @click="y_show1 = !y_show1" :style="{'backgroundColor':$store.state.addCount>0?'#3190E8':'#666'}">
         <i class="el-icon-shopping-cart-2 shop1"></i>
         <mt-badge size="large" type="error" class="rightTop" v-if="$store.state.addCount>0?true:false">{{$store.state.addCount}}</mt-badge>
       </div>

      <div class="pri">
        <p :style="{'fontSize':'0.8rem','fontWeight':'bold','color':'white'}">¥{{getMoney()}}</p>
        <p :style="{'fontSize':'0.4rem','fontWeight':'bold','color':'white'}">{{$store.state.shopP.piecewise_agent_fee.tips}}</p>
      </div>

      <!--当购物车商品发生变化时,会变为结算-->
      <router-link to="/order1">
      <div :class="{'jiesuan':yanse1==='1'?true:false,'jiesuan1':yanse1===''?true:false}">
        {{jiesuanFont()}}
      </div>
      </router-link>
    </div>
    <el-collapse-transition>
      <div class="clear" v-if="y_show1">
        <p class="shOne"><span class="shOne1">购物车</span><span class="shOne2" @click="removeAll"><i class="el-icon-delete"></i>清空</span></p>
        <div class="shAll">
          <div v-for="s in $store.state.addShopAll" id="sAll" v-if="s.countS===0?false:true">
            <p class="one">
              <span class="name">{{s.name}}</span>
              <span class="price">¥{{s.price}}</span>
              <span class="countS"><i class="el-icon-remove remove" @click="removeOne(s)"></i>{{s.countS}}<i class="el-icon-circle-plus addOne" @click="addOne1(s)"></i></span>
            </p>
            <span class="sName">{{s.sName}}</span>
          </div>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
    export default {
        name: "YxShopBottom",
        data(){
          return {
            //$store.state.shopP店铺自身信息
            jiesuan:'还差'+this.$store.state.shopP.float_minimum_order_amount+'元起送',
            y_show1:false,
          }
        },
        computed:{
          yanse1(){
            if(this.jiesuan==='去结算'){
              return '1';
            }else{
              return '';
            }
          },
        },
        methods:{
        removeAll(){
          this.$store.state.addShopAll=[];
          this.$store.state.addCount=0;
        },
        removeOne(s){
          for(let i in this.$store.state.addShopAll){
              if(s.id===this.$store.state.addShopAll[i].id){
                this.$store.state.addShopAll[i].countS--;
                this.$store.state.addCount--;
                if(this.$store.state.addShopAll[i].countS <= 0){
                  this.$store.state.addShopAll.splice(i,1);
                }
              }
          }
          console.log(this.$store.state.addShopAll);
        },
        addOne1(s){
          for(let i in this.$store.state.addShopAll){
            if(s.id===this.$store.state.addShopAll[i].id){
              this.$store.state.addShopAll[i].countS++;
              this.$store.state.addCount++;
            }
          }
          console.log(this.$store.state.addShopAll);
        },
        getMoney(){
          let money=0;
          if(this.$store.state.addShopAll == []){
            money=0;
          }else{
            for(let p of this.$store.state.addShopAll){
              money += p.price*p.countS;
              if(Number(money) == 0 || money==''){
                money=0.00;
              }
            }
          }
          return money;
          },
        jiesuanFont(){
          let money=0;
          if(this.$store.state.addShopAll.length>0){
            for(let p of this.$store.state.addShopAll){
              money += p.price*p.countS;
              if(money >= this.$store.state.shopP.float_minimum_order_amount){
                this.jiesuan='去结算';
              }else{
                this.jiesuan='还差'+this.$store.state.shopP.float_minimum_order_amount+'元起送';
              }
            }
          }else{
            this.jiesuan='还差'+this.$store.state.shopP.float_minimum_order_amount+'元起送';
          }
          return this.jiesuan;
          },
        },
    }
</script>

<style scoped>
.bottom{
  height: 2rem;
  background: #3D3D3F;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
}
  .shop{
    width: 2rem;
    height: 2rem;
    background: #666;
    border-radius: 50%;
    border: 3px solid #3D3D3F;
    position: absolute;
    left: 1rem;
    top:-0.3rem;
    z-index: 10;
  }
  .shop1{
    font-size:1.3rem;
    position: absolute;
    left:0.3rem;
    top:0.3rem;
  }
  .jiesuan{
    width: 5rem;
    height: 2rem;
    position: absolute;
    color: white;
    font-size: 0.7rem;
    text-align: center;
    background:#4CD964;
    box-sizing: border-box;
    padding-top: 0.5rem;
    right: 0;
    bottom: 0;
  }
.jiesuan1{
  width: 5rem;
  height: 2rem;
  position: absolute;
  color: white;
  font-size: 0.7rem;
  text-align: center;
  background:#666;
  box-sizing: border-box;
  padding-top: 0.5rem;
  right: 0;
  bottom: 0;
  /*当不是结算时,点击div无效*/
  pointer-events: none;
}
  .shOne{
    width: 100%;
    height: 2rem;
    background: #ECEFF1;
    margin-bottom: 0;
    position: fixed;
    z-index: 8;
  }
  .clear{
    width: 100%;
    position: fixed;
    bottom: 1.8rem;
    max-height: 12rem;
    overflow:auto;
  }
.shOne1{
  font-size: 0.7rem;
  line-height: 2rem;
  margin-left: 1rem;
}
  .shOne2{
    font-size: 0.5rem;
    line-height: 2rem;
    position: absolute;
    right: 1rem;
  }
  #sAll{
    border-bottom: 1px solid #e4e4e4;
    color: black;
    padding: 0.3rem 0;
    padding-left: 1rem;
  }
  .shAll{
    background: white;
    padding-top:1.8rem;
  }
  .rightTop{
    position: absolute;
    right: -0.1rem;
    font-size: 0.5rem;
  }
  .name{
      font-size: 0.7rem;
      font-weight: bold;
      color:#666666;
  }
.sName{
  font-size: 0.5rem;
  padding-left: 0.2rem;
}
  .price{
    font-size: 0.7rem;
    color:orangered;
    font-weight: bold;
    position: absolute;
    left: 10rem;
    margin-top: 0.2rem;
  }
  .countS{
    position: absolute;
    right: 1rem;
    margin-top: 0.2rem;
    font-size: 0.7rem;
  }
  .remove{
    color:#ccc;
  }
  .addOne{
    color: #3190E8;
  }
  .pri{
    display: inline-block;
    height: 2rem;
    position: absolute;
    left:3.1rem;
    padding-left: 0.3rem;
  }
</style>
