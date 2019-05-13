<template>
  <!--优惠界面-->
    <div class="hMax">
      <div class="hName1">{{$store.state.shopP.name}}</div>
      <div class="youhui">
        <p style=" width:3rem;border-radius: 20px;padding: 0.1rem ;color: white;font-size: 0.5rem;border: 1px solid #e4e4e4;text-align: center; display: inline-block;">优惠信息</p>
        <div class="huodong">
            <p class="threeP" v-for="p in $store.state.shopP.activities">
              <span class="threeImg" :style="{backgroundColor:'#'+p.icon_color}">{{p.icon_name}}</span>
              <span class="activ">{{p.description}}(APP专享)</span>
            </p>
        </div>
      </div>
      <div class="youhui">
        <p style=" width:3rem;border-radius: 20px;padding: 0.1rem ;color: white;font-size: 0.5rem;border: 1px solid #e4e4e4;text-align: center; display: inline-block;margin-top: 2rem">商家公告</p>
        <p style="color:white;font-size: 0.5rem;width: 100%;text-align: left;padding-left: 2rem;">{{$store.state.shopP.promotion_info}}</p>
      </div>
      <p style="width: 100%;text-align: center;margin-top: 2rem">
        <span @click="$router.back(-1)">
        <i class="el-icon-close guanbi"></i>
        </span>
      </p>
    </div>
</template>

<script>
    export default {
        name: "YxSale"
    }
</script>

<style scoped>
  .hMax{
    background: rgba(0,0,0,0.8);
    padding-top: 0;
    position: fixed;
    left:0;
    right: 0;
    top:0;
    bottom: 0;
  }
.hName1{
  width: 100%;
  height: 7rem;
  text-align: center;
  font-size: 1rem;
  color: white;
  padding-top: 2rem;

}
  .youhui{
    width: 100%;
    text-align: center;
  }
  .threeImg{
    display: inline-block;
    padding: 0.09rem;
    font-size: 0.5rem;
    border-radius: 5px;
    color: white;
  }
  .activ{
    color: white;
    font-size: 0.5rem;
    margin-left: 0.5rem;
  }
  .huodong{
    margin-top: 0.5rem;
    text-align: left;
    padding-left: 2rem;
  }
  .guanbi{
    color: white;
    font-size: 1.5rem;
    border: 1px solid white;
    border-radius: 50%;
    padding: 0.2rem;
  }
</style>
