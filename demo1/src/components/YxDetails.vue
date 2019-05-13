<template>
  <!--质量检测页面-->
    <div>
      <mt-header fixed title="商家详情" class="head">
        <span class="glyphicon glyphicon-menu-left" slot="left" @click="$router.back(-1)"></span>
      </mt-header>
      <div class="shopXiang">
        <p class="huodong">活动与属性</p>
        <div style="background: white;padding: 0.3rem">
        <p class="threeP" v-for="p in $store.state.shopP.activities">
          <span class="threeImg" :style="{backgroundColor:'#'+p.icon_color}">{{p.icon_name}}</span>
          <span class="activ">{{p.description}}(APP专享)</span>
        </p>
        <p class="threeP" v-for="p in $store.state.shopP.supports">
          <span class="threeImg" :style="{backgroundColor:'#'+p.icon_color}">{{p.icon_name}}</span>
          <span class="activ">{{p.description}}(APP专享)</span>
        </p>
      </div>
      </div>
      <div class="anquan">
        <p class="shipin">食品监督安全公示</p>
        <div class="spLeft">
          <img src="../image/xl1.png" alt="无">
        </div>
        <div class="spRight">
          <p>监督检查结果:<span style="color:#1AFA29">良好</span></p>
          <p>检查日期</p>
        </div>
        <div class="empty"></div>
      </div>
      <div class="infor">
      <p>商家信息</p>
       <p>{{$store.state.shopP.name}}</p>
        <p>地址:{{$store.state.shopP.address}}</p>
        <p>营业时间:{{$store.state.shopP.opening_hours}}</p>
        <p @click="show">营业执照<span class="glyphicon glyphicon-menu-right yingye" ></span></p>
        <p @click="show1">餐饮服务许可证<span class="glyphicon glyphicon-menu-right yingye" ></span></p>
      </div>
      <img :src="'//elm.cangdu.org/img/'+img1" v-if="showOne" class="img1">
      <img :src="'//elm.cangdu.org/img/'+img2" v-if="showTwo" class="img1">
    </div>
</template>

<script>
    export default {
        name: "YxDetails",
      data(){
          return {
            showOne:false,
            showTwo:false,
            img1:'',
            img2:''
          }
      },
      methods:{
        show(){
          this.showOne = !this.showOne;
          if(this.showOne){
              this.showTwo=false;
          }
        },
        show1(){
          this.showTwo = !this.showTwo;
          if(this.showTwo){
            this.showOne=false;
          }
        }
      },
      created(){
          if(this.$store.state.shopP.license.hasOwnProperty("business_license_image")){
          this.img1=this.$store.state.shopP.license.business_license_image;
          }else if(this.$store.state.shopP.license.hasOwnProperty("catering_service_license_image")){
      this.img2=this.$store.state.shopP.license.catering_service_license_image;
          }else{
            this.img1='';
            this.img2='';
          }
      }
    }
</script>

<style scoped>
  .empty{
    clear: both;
  }
.head{
  height: 2rem;
  font-size: 0.7rem;
}
.huodong{
  height: 2rem;
  border-bottom: 1px solid #e4e4e4;
  margin-top: 2.5rem;
  line-height: 2rem;
  font-size: 0.8rem;
  background: white;
  padding-left: 1rem;
  margin-bottom: 0;
  }
.threeImg{
  padding: 0.1rem;
  border-radius: 10px;
  margin-right: 0.5rem;
}
  .threeP{
    padding-left: 1rem;
    height: 1.5rem;
    font-size: 0.5rem;
  }
.anquan{
  height: 5rem;
  background: white;
  margin-top: 0.5rem;
  }
  .shipin{
    padding-left: 1rem;
    font-size: 0.7rem;
    border-bottom: 1px solid #e4e4e4;
    height: 2rem;
    line-height: 2rem;
  }
  .infor{
    background: white;
    margin-top: 0.5rem;
  }
  .infor p{
    padding-left: 1rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.6rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    border-bottom: 1px solid #e4e4e4;
    position: relative;
  }
.infor p:nth-of-type(1){
  font-size: 0.7rem;
}
.yingye{
position: absolute;
  right: 1rem;
  top:0.6rem;
}
.img1{
  position: fixed;
  width: 100%;
  height: 70%;
  top:0;
  left:0;
  }
  .spLeft{
    float: left;
    padding-left: 1rem;
  }
  .spRight{
    float: left;
    font-size: 0.6rem;
    margin-top: 0.3rem;
    margin-left: 0.5rem;
  }
  .spLeft img{
    width: 2.5rem;
  }
</style>
