<template>
    <div class="bottom">
       <div class="shop" @click="y_show1 = !y_show1">
         <i class="el-icon-shopping-cart-2 shop1" ></i>
         <mt-badge size="large" type="error" class="rightTop">{{$store.state.addCount}}</mt-badge>
       </div>
      <div>
      </div>
      <!--当购物车商品发生变化时,会变为结算-->
      <div :class="{'jiesuan':yanse1==='1'?true:false,'jiesuan1':yanse1===''?true:false}">
        {{jiesuan}}
      </div>
      <el-collapse-transition>
      <div class="clear" v-if="y_show1">
        <p class="shOne"><span class="shOne1">购物车</span><span class="shOne2" @click="removeAll"><i class="el-icon-delete"></i>清空</span></p>
        <div class="shAll">
        <p v-for="s in $store.state.addShopAll" id="sAll">
          <span>{{s.name}}</span>
          <span>{{s.price}}</span>
          <span>{{s.sName}}</span>
          <span>{{s.countS}}</span>
        </p>
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
            if(this.jiesuan==='结算'){
              return '1';
            }else{
              return '';
            }
          }
        },
      methods:{
        removeAll(){
          this.$store.state.addShopAll=[];
          this.$store.state.addCount=0;
        },

      }
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
}
  .shop{
    width: 2rem;
    height: 2rem;
    background: #666;
    border-radius: 50%;
    border: 3px solid #3D3D3F;
    position: absolute;
    left: 1rem;
    top:-0.6rem;
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
}
  .shOne{
    width: 100%;
    height: 2rem;
    background: #ECEFF1;
    margin-bottom: 0;
  }
  .clear{
    width: 100%;
    position: absolute;
    bottom: 1.8rem;
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
    height: 1.5rem;
  }
  .shAll{
    background: white;
  }
  .rightTop{
    position: absolute;
    right: -0.1rem;
    font-size: 0.5rem;
  }
</style>
