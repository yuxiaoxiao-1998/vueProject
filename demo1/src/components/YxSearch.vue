<template>
  <!--该页有小bug-->
    <div>
      <mt-header fixed title="搜索" class="yx_sousuo">
          <a slot="left" @click="waimai()">
            <span class="glyphicon glyphicon-menu-left"></span>
          </a>
      </mt-header>
      <div class="btnAndInput">
        <input type="text" class="form-control" placeholder="请输入商家或美食名称" id="inputTwo" v-model="inputData"><span class="glyphicon glyphicon-remove cuo" @click="remoone"></span>
        <button class="btn btn-primary btn1" @click="tijiaoSearch">提交查询</button>
      </div>
      <div class="bottom">
        <!--搜索时显示-->
        <div v-if="isbot1">
        <p class="shangjia">商家</p>
          <ul class="bottom_yx">
            <router-link to="/shopHome">
            <li v-for="p in zsData">
              <a @click="sendAll(p.id,p)">
              <div class="left">
              <img :src="'//elm.cangdu.org/img/'+p.image_path" alt="">
              </div>
              <div class="right">
              <span class="kendeji">{{p.name}}</span>
              <span class="icon-zf">支付</span>
              <span class="yueshou">月售{{p.rating_count}}单</span>
              <span class="peisong">{{p.float_minimum_order_amount}} 元起送 / 距离{{p.distance}}</span>
              </div>
              <div class="empty"></div>
              </a>
            </li>
            </router-link>
          </ul>
        </div>
        <!--历史记录显示-->
        <div  v-if="isbot2">
        <p class="shangjia">历史记录</p>
        <ul class="bottom_yx">
          <li v-for="(p,i) in $store.state.shopHistory"  class="cuo1P">
            <a @click="sendInput(p)">
              <p>{{p}}</p>
            </a>
            <span class="glyphicon glyphicon-remove cuo1" @click="remotwo(i)"></span>
          </li>
        </ul>
          <p @click="remoHiss" class="qingchu">清除所有历史</p>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "YxSearch",
        data(){
          return {
            inputData:'',
            zsData:[],
            isbot1:false,
            isbot2:true,
          }
        },
      methods:{
          //点击提交按钮
        tijiaoSearch(){
          if(this.inputData===''||this.inputData===null){
            alert('暂无结果,请重新查询!');
          }else{
            Vue.axios.get('https://elm.cangdu.org/v4/restaurants?geohash='+this.$store.state.cityall.geo+'&keyword='+this.inputData).then((res) => {
                  this.zsData=res.data;
                  this.isbot1=!this.isbot1;
                  if(this.isbot1){
                    this.isbot2=false;
                  }else{
                    this.isbot2=true;
                  }
            }).catch((error)=>{console.log('请求错误',error)});
            //当点击时将该条数据存到vuex中,以便历史记录的显示-1
            this.$store.commit('history1',this.inputData);
          }
        },
        remoone(){
          this.inputData='';
        },
        sendInput(p){
          this.inputData=p;
          //发起网络请求,通过id可以进入到商铺具体商品的页面-2
          Vue.axios.get('https://elm.cangdu.org/v4/restaurants?geohash='+this.$store.state.cityall.geo+'&keyword='+this.inputData).then((res) => {
            //该数据为点击商铺列表所存储的该商铺的所有信息
            this.zsData=res.data;
            this.isbot1=!this.isbot1;
            if(this.isbot1){
              this.isbot2=false;
            }else{
              this.isbot2=true;
            }
          }).catch((error) => {
            console.log('请求错误', error)
          });
        },
        //清除所有历史记录
        remoHiss(){
          this.$store.commit('remoHisAll');
        },
        //通过x删除一条历史记录
        remotwo(i){
          this.$store.commit('remoHis',i);
        },
        //点击搜索出来的每一条数据之后,传入对应id发起请求,将数据存放到 shopAll中,在YxshopTop页面将页面进行渲染,数据进行遍历
        sendAll(id,p){
          //点击哪一个发送哪一个的请求
          Vue.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id='+id).then((res) => {
            //该数据为点击商铺列表所存储的该商铺的所有信息
            this.$store.state.shopAll=res.data;
            this.$store.state.shopP=p;
          }).catch((error) => {
            console.log('请求错误', error)
          });
        },
        waimai(){
          this.$router.push({path:'/home/onepage'});
            this.$store.commit('xiugai','外卖');
        }
      }
    }
</script>

<style scoped>
  .empty{
    clear: both;
  }
.yx_sousuo{
  height: 2rem;
  font-size: 0.7rem;
}
  #inputTwo{
    height: 1.5rem;
    background: #F2F2F2;
    width: 11rem;
    display: inline-block;
    font-size: 0.7rem;
    padding-left: 0.3rem;
  }
#inputTwo::-webkit-input-placeholder{
  color:#9C8B8B;
  font-weight: bold;
}
  .btn1{
    height: 1.4rem;
    width: 3.1rem;
    background: #3190E8;
    font-size: 0.6rem;
    display: inline-block;
    vertical-align:0.02rem;
    font-weight: bold;
  }
  .btnAndInput{
    margin-top: 2.5rem;
    background: white;
    padding: 0.5rem;
  }
  .cuo{
    position: relative;
    left:-1rem;
    color:#9C8B8B;
    font-size: 0.5rem;
    font-weight: bold;
    display: inline-block;
    height: 1rem;
    width: 0.5rem;
      }
  .bottom{
    border: 1px solid #e4e4e4;
    margin-bottom: 2.5rem;
  }
.bottom_yx img{
  width: 2rem;
}
  .shangjia{
    font-size: 0.6rem;
    height: 1.5rem;
    line-height: 1.5rem;
    font-weight: bold;
    padding-left: 0.5rem;
  }
.bottom_yx li{
  background: white;
  border-bottom: 1px solid #e4e4e4;
  padding: 0.6rem 0.5rem;
}
  .bottom_yx a{
    color: black;
  }
  .icon-zf{
    border:2px solid #FF6000;
    display:inline-block;
    height:0.5rem;
    line-height:0.5rem;
    font-size: 0.5rem;
    font-weight: bold;
    color: #FF6000;
    transform: skew(-20deg);
  }
  .left,.right{
    float: left;
  }
  .right{
    border-bottom:1px solid #e4e4e4;
    padding-top: 0.3rem;
    height:3rem;
    width: 12rem;
    padding-left: 0.2rem;
  }
  .kendeji{
    font-weight: bold;
    font-size: 0.5rem;
  }
  .yueshou{
    display: block;
    font-size: 0.5rem;
    margin: 0.1rem 0;
  }
  .peisong {
    display: inline-block;
    font-size: 0.5rem;
    margin: 0.1rem 0;
  }
  .cuo1P{
    background: red;
    position: relative;
  }
  .cuo1{
    position: absolute;
    right: 0.5rem;
    line-height: 1rem;
    top:0.5rem;
    width: 3rem;
    font-size: 0.5rem;
    text-align: center;
    height: 1.5rem;
  }
  .qingchu{
    padding-left: 0.5rem;
    font-size: 0.6rem;
  }
</style>
