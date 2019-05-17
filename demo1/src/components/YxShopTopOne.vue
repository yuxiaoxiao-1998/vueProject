<template>
  <!--每一个店铺的具体商品展示页面-->
    <div>
      <img :src="'//elm.cangdu.org/img/'+$store.state.shopP.image_path" alt="无法显示" class="bg" v-if="isImg">
      <div class="getMsg" v-if="isImg">
        <div class="getImgleft">
          <img :src="'//elm.cangdu.org/img/'+$store.state.shopP.image_path" alt="无法显示图片" class="leftImg">
        </div>
        <div class="getImgright">
          <p class="rightname">{{$store.state.shopP.name}}</p>
          <div class="rou1">
            <router-link to="/pro">
          <p>商家配送 / 分钟送达 / {{$store.state.shopP.piecewise_agent_fee.tips}}</p>
          <p>公告:{{$store.state.shopP.promotion_info}}</p>
            <span class="glyphicon glyphicon-menu-right jiantou1"></span>
            </router-link>
          </div>
        </div>
        <div class="empty"></div>
        <div class="huodong">
          <router-link to="/proone">
          <p class="threeP">
           <span class="threeImg">{{$store.state.shopP.activities[0].icon_name}}</span>
          <span class="activ">{{$store.state.shopP.activities[0].description}}(APP专享)</span>
            <span class="num">{{$store.state.shopP.activities.length}}个活动</span>
            <span class="glyphicon glyphicon-menu-right jiantou2"></span>
          </p>
          </router-link>
        </div>
      </div>
      <div class="shop12">
      <p class="sShop11">
        <span class="glyphicon glyphicon-menu-left jiantou" @click="$router.back(-1)"></span>
        <span :class="{'shangpin':true,'sele':sele==='商品'?true:false}" @click="sele='商品'">
          商品
        </span>
        <span :class="{'pingjia':true,'sele':sele==='评价'?true:false}" @click="sele='评价'">评价</span></p>
        <!--商品-->
      <div class="sMax">
        <div class="sLeft1">
          <ul>
            <li v-for="s in $store.state.shopAll" :class="{'sLi':true,'select':issele===s.id?true:false}"  @click="sendLiRight(s)">
              <span>{{s.name}}</span>
              <div class="leftTop1">
                 <mt-badge size="large" type="error" class="count" v-if="leftCount(s.foods)>0?true:false">{{leftCount(s.foods)}}</mt-badge>
              </div>
            </li>
          </ul>
        </div>
        <div class="sRight">
          <ul class="sRightOne">
            <li class="sRightLiOne"><span>{{liName}}</span><span class="spanTwo">{{liDes}}</span></li>
            <!--右侧列表-->
            <li v-for="s1 in liAll" class="sRightList">
              <router-link to="/shopHome/detailone">
                <a @click="sengS(s1)">
              <div class="new" v-if="newFood(s1)">新品</div>
              <div class="s1Img">
                <img :src="'//elm.cangdu.org/img/'+s1.image_path" alt="无">
              </div>
              <div class="zp" v-if="zp(s1)">招牌</div>
                </a>
              </router-link>
              <div class="s1Right">
                <router-link to="/shopHome/detailone">
                  <a @click="sengS(s1)">
                <span class="c1Name">{{s1.name}}</span>
                <span class="c1Des">{{s1.description}}</span>
                <p>
                <span class="yueshou1">{{gettips(s1)}}</span>
                <span class="yueshou1">好评率{{s1.satisfy_rate}}%</span>
                </p>
                  </a>
                </router-link>
                <div class="zp1">{{des(s1)}}</div>
                <p class="gp">
                  <span class="moneyOne"><span class="mone">¥{{s1.specfoods[0].price}}</span>起</span>
                  <!--选规格或者加号-->
                  <span class="gj">
                  <span v-if="yCount(s1)>0?true:false" class="coun"><i class="el-icon-remove pre" @click="preCount(s1)"></i>{{yCount(s1)}}</span>
                  <span :class="{'ge':true}" @click="compareGuGe(s1)">{{getGuige(s1)}}</span>
                  </span>
                </p>
              </div>
              <div class="empty"></div>
            </li>

            <!--规格-->
            <div class="y_g" v-if="ge">
              <div class="y_g1">
                <span class="guiName">{{geName}}</span>
                <p class="gui">规格</p>
                <div v-for="f in guige" class="btnOne1">
                  <span :class="{'btnOne':true}"  :style="{'borderColor':gName===f.specs_name?'#3199E8':'#666','color':gName===f.specs_name?'#3199E8':'#666'}" @click="sendMoney(f)">{{f.specs_name}}</span>
                </div>
                <p class="mone mon">¥{{geMoney}}</p>
                <span><i class="el-icon-close cl" @click="ge=false"></i></span>
                <span class="addShop"><el-button type="primary" class="add" @click="addShop">加入购物车</el-button></span>
              </div>
            </div>
          </ul>
        </div>
        <div class="empty"></div>
      </div>
        <!--评价-->
      </div>
    </div>
</template>

<script>
    export default {
      name: "YxShopTopOne",
      data() {
        return {
          //首页上点击商铺传递的商铺本身的信息
          topShop: this.$store.state.shopP,
          sele: '商品',
          //判断是否更换背景颜色
          issele: '',
          //名字和描述
          liName: '',
          liDes: '',
          //整个右侧子串对象(也就是foods对应的数组)
          liAll: {},
          //当没有活动时,不显示上面图片
          isImg: true,
          //规格数组
          guige: [],
          //规格是否存在
          ge: false,
          //点开规格的商品自身的名字
          geName: '',
          //当前被选中的商品的价格
          geMoney: '',
          //小商品的选择的颜色变更
          gName: '默认',
          foodId: '',
          //唯一标识
          weiyi: '',
          //当点击加入购物车时,1,左边减号出现,显示数量,当数组specfoods.length>1则不能使用减号,当为加号时,则匹配id是否相等,相等时count--;2,bootom中点击时改变数量;
          //餐盒费
          ch:0,
        }
      },
      methods: {
        sendLiRight(s) {
          this.liAll = s.foods;
          this.liName = s.name;
          this.liDes = s.description;
          this.issele = s.id;
        },
        //过滤月售
        gettips(s1) {
          return s1.tips.split(" ")[1];
        },
        //判断新品
        newFood(l) {
          //新品
          let newfood = false;
          let b = l.hasOwnProperty("attributes");
          if (b) {
            for (let i of l.attributes) {
              if (i !== null) {
                if (l.attributes.length >= 1 && l.attributes[0].icon_name === '新') {
                  newfood = true;
                  return newfood;
                } else if (l.attributes.length > 1 && l.attributes[1].icon_name === '新') {
                  newfood = true;
                  return newfood;
                } else {
                  newfood = false;
                  return newfood;
                }
              } else {
                newfood = false;
                return newfood;
              }
            }
          }
        },
        //判断招牌
        zp(l) {
          //招牌
          let zhaopai = false;
          let b1 = l.hasOwnProperty("attributes");
          if (b1) {
            for (let i of l.attributes) {
              if (i !== null) {
                if (l.attributes.length >= 1 && l.attributes[0].icon_name === '招牌') {
                  zhaopai = true;
                  return zhaopai;
                } else if (l.attributes.length > 1 && l.attributes[1].icon_name === '招牌') {
                  zhaopai = true;
                  return zhaopai;
                } else {
                  zhaopai = false;
                  return zhaopai;
                }
              } else {
                zhaopai = false;
                return zhaopai;
              }
            }
          }
        },
        //判断价格上面的描述
        des(l) {
          if (l.activity === null) {
            l.activity = {"image_text": ''};
          }
          return l.activity.image_text;
        },
        //判断是选规格还是加号
        getGuige(l) {
          if (l.specfoods.length === 1) {
            return '+';
          } else {
            return '选规格';
          }
        },
        compareGuGe(l) {
          //判断当为选规格时,弹出框,框可以选择购物
          if (l.specfoods.length > 1) {
            this.geName = l.name;
            this.guige = l.specfoods;
            this.geMoney = l.specfoods[0].price;
            this.ge = true;
          } else {
            this.geName = l.name;
            this.geMoney = l.specfoods[0].price;
            this.foodId = l.specfoods[0].food_id;
            this.weiyi = l.item_id;
            this.gName = '';
            //包装费
            this.ch=l.specfoods[0].packing_fee;
            this.addShop();
          }
        },
        //点击商品时将价格显示在下方
        sendMoney(f) {
          this.geMoney = f.price;
          this.gName = f.specs_name;
          this.foodId = f.food_id;
          //包装费
          this.ch=f.packing_fee;
        },
        addShop() {
          //向vueX中添加时,将数据进行过滤
          //逻辑:1.将要显示的数据封装成一个对象2,(若数组长度为0,则直接添加到数组中)3(否则,遍历并通过id(也就是food_id)判断该数组中是否已经存在对应对象,v代表已经存在于数组中的对象,3-1如果存在,则过滤出来对应的那个对象,将该对象的countS++,3-2,若不存在直接添加)
          let shopA = {
            name: this.geName,
            price: this.geMoney,
            sName: this.gName,
            countS: 1,
            id: this.foodId,
            wy: this.weiyi,
            canhe:this.ch
          };
          if (this.$store.state.addShopAll.length == 0) {
            this.$store.state.addShopAll.push(shopA);
          } else {
            let isHas = this.$store.state.addShopAll.some((v) => {
              return v.id === this.foodId;
            });
            if (isHas) {
              //找到对应的对象,将其count++
              const arr = this.$store.state.addShopAll.filter((v) => {
                //过滤之后产生的新数组中只有一个元素
                return v.id === this.foodId;
              });
              arr[0].countS++;
            } else {
              //否则将对象添加到数组中
              this.$store.state.addShopAll.push(shopA);
            }
          }
          //-----------------
          //将选规格框不显示
          this.ge = false;
          //将总数量++
          this.$store.state.addCount++;
        },
        //减号的显示和隐藏,数量的显示和隐藏(item_id为右侧小商品之间的唯一标识)
        yCount(m) {
          let sum = 0;
          for (let j in this.$store.state.addShopAll) {
            if (m.item_id === this.$store.state.addShopAll[j].wy) {
              sum += this.$store.state.addShopAll[j].countS;
            }
          }
          return sum;
        },
        //左侧的对应的数量的显示
        leftCount(s) {
          let sum = null;
          for (let i in s) {
            for (let j in this.$store.state.addShopAll) {
              if (s[i].item_id === this.$store.state.addShopAll[j].wy) {
                sum += this.$store.state.addShopAll[j].countS;
              }
            }
          }
          return sum;
        },
        //点击减号时判断是否可以点击
        preCount(s1){
          console.log(s1);
          if(s1.specfoods.length>1){
            alert('选规格商品请在购物车进行减少');
          }else{
            //当只有一条时,判断找到相对应的vuex中的对象,进行数量的减少
            for (let j in this.$store.state.addShopAll) {
              if (s1.specfoods[0].item_id === this.$store.state.addShopAll[j].wy) {
                this.$store.state.addShopAll[j].countS--;
                this.$store.state.addCount--;
                if(this.$store.state.addShopAll[j].countS <= 0){
                  this.$store.state.addShopAll.splice(j,1);
                }
              }
            }
          }
        },
        //点击时将对应的自身的信息传入vuex中
        sengS(s1){
          this.$store.commit('xiangQing',s1);
        }
      },
        created() {
          //商铺本身的信息,判断上方图片是否显示
          for (let icon of this.$store.state.shopP.activities) {
            if (icon.icon_name === '无') {
              this.isImg = false;
            } else {
              this.isImg = true;
            }
          }
          //初始进入的右侧显示
          // for(let i in this.$store.state.shopAll){
          //     this.sendLiRight(this.$store.state.shopAll[0]);
            // console.log(111);
          // }
        },
    }
</script>

<style scoped>
  .empty{
    clear: both;
  }
.sShop11{
  height: 2rem;
  background: white;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 0;
}
.shangpin{
    width: 1rem;
    height:1rem;
    margin-left: 3rem;
    display: inline-block;
    margin-top: 0.5rem;
     font-size:0.5rem ;
    width: 1.5rem;
    text-align: center;
    font-weight: bold;
  }
  .pingjia{
    width: 1.5rem;
    height:1rem;
    margin-left: 4rem;
    display: inline-block;
    font-size:0.5rem ;
    text-align: center;
    font-weight: bold;
  }
  .sele{
    border-bottom: 2px solid #3190E8;
    color:#3190E8;
  }
.jiantou{
  font-size: 0.7rem;
  padding-left: 1rem;
  vertical-align: -0.3rem;
  box-sizing: border-box;
}
  .sLi{
    height: 2rem;
    line-height: 2rem;
    width: 4rem;
    text-align: center;
    background: #F5F5F5;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    font-size: 0.6rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
  }
  .sLeft1{
    float: left;
    list-style: none;
  }
  .sRightOne li{
    list-style: none;
    padding-left: 0.3rem;
  }
  .sRight{
    float: right;
    width: 12rem;
    margin-bottom: 2rem;
  }
  .sRightLiOne{
    height: 2rem;
    line-height: 2rem;
    font-size: 0.8rem;
    font-weight: bolder;
    color: #6E6A66;
    background: #F5F5F5;
  }
  .sRightLiOne .spanTwo{
    font-size: 0.4rem;
    font-weight: 400;
    margin-left: 0.3rem;
    color:#999999;
  }
  .s1Img img{
    width: 2.7rem;
  }
  .sRightList{
    padding:0.3rem;
    border-bottom: 1px solid #e4e4e4;
    background: white;
    position: relative;
    overflow: hidden;
  }
  .sRightList a{
    color:#666;
  }
  .s1Img,.s1Right{
    float: left;
  }
  .s1Right{
    width: 8.7rem;
    padding-left: 0.5rem;
  }
  .select{
    background: white;
    border-left: 5px solid #3190E8;
  }
  .c1Name{
    display: inline-block;
    font-weight: bolder;
    font-size: 0.7rem;
    height: 1.5rem;
    width: 6rem;
    line-height: 1.5rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .c1Des{
    display: block;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.5rem;
    color:#999999;
  }
  .yueshou1{
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.5rem;
  }
  .moneyOne{
    display: inline-block;
    width:2.5rem;
    font-size: 0.7rem;
  }
  .mone{
    color: #FF6600;
    font-weight: bolder;
    letter-spacing: 0.1rem;
  }
  .bg{
    width: 100%;
    height:5rem;
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    /*高斯模糊*/
    filter: blur(20px);
  }
  .shop12{
    position: relative;
  }
  .getMsg{
    position: relative;
    margin-bottom: 0;
    box-sizing: border-box;
    padding: 0.5rem;
    background: rgba(0,0,0,0.3);
  }
  .getImgleft{
    float: left;
  }
  .getImgright{
    float: left;
    box-sizing: border-box;
    padding-left: 0.5rem;
  }
  .leftImg{
    width: 3rem;
    border-radius: 10px;
  }
  .getImgright a{
    font-size: 0.5rem;
    color: white;
  }
  .rightname{
    font-size: 0.7rem;
    font-weight: bold;
    color: white;
  }
  .threeP{
    margin-bottom: 0;
  }
  .threeImg{
    display: inline-block;
    background: rgb(240,115,115);
    padding: 0.09rem;
    font-size: 0.5rem;
    border-radius: 5px;
    color: white;
  }
  .rou1{
    position: relative;
    width: 11rem;
  }
  .jiantou1{
      position: absolute;
      right:0.2rem;
      top:0.5rem;
  }
  .jiantou2{
    position: absolute;
    right:0.8rem;
    top:0.1rem;
    color: white;
    font-size: 0.5rem;
  }
  .activ{
    color: white;
    font-size: 0.5rem;
    margin-left: 0.5rem;
  }
  .huodong{
    margin-top: 0.5rem;
    position: relative;
  }
  .num{
    color: white;
    position: absolute;
    right:1.4rem;
    top:0.1rem;
  }
  .new{
    width: 2rem;
    height: 2rem;
    background: #5ec452;
    color:white;
    font-size: 0.4rem;
    box-sizing: border-box;
    padding-top: 1.3rem;
    text-align: center;
    transform: rotateZ(-45deg);
    position: absolute;
    left:-1rem;
    top:-1rem;
  }
  .zp{
    color:#f07373;
    border: 1px solid #f07373;
    display: inline-block;
    border-radius: 10px;
    font-size: 0.35rem;
    padding: 0.01rem 0.1rem;
    position: absolute;
    right: 1rem;
    top:0.5rem;
  }
  .zp1{
    color:#f07373;
    border: 1px solid #f07373;
    display: inline-block;
    border-radius: 10px;
    font-size: 0.35rem;
    padding: 0.01rem 0.1rem;
  }
  .gp{
    position: relative;
  }
  /*方块的样式*/
  .ge{
    background: #3190E8;
    color: white;
    font-size: 0.6rem;
    font-weight: bolder;
    padding:0.2rem;
    border-radius: 10px;
  }
  .y_g{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    left: 0;
    top:0;
  }
  .y_g1{
    width: 11rem;
    height: 8rem;
    background: white;
    position: absolute;
    left: 3rem;
    border-radius: 20px;
    top:6rem;
    z-index: 10;
    border: 2px solid #e4e4e4;
    box-shadow: #e4e4e4 1px 1px 2px;
  }
  .gui{
      width: 100%;
      padding: 0 1rem;
      font-size: 0.6rem;
  }
  .guiName{
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 0.7rem;
    padding: 0.5rem;
  }
  .btnOne{
    display: inline-block;
    border: 1px solid #666;
    padding: 0.25rem;
    font-size: 0.6rem;
    margin-left: 0.5rem;
    border-radius: 10px;
  }
  .btnOne1{
    display: inline-block;
  }
  .cl{
    font-size: 0.9rem;
    position: absolute;
    right:1rem;
    top:1rem;
  }
  .mon{
    font-size: 0.7rem;
    font-weight: bolder;
    padding-left: 0.5rem;
    position: absolute;
    bottom: 0.5rem;
  }
  .addShop{
    position: absolute;
    right: 1rem;
    bottom: 0.7rem;
  }
  .add{
    font-size: 0.6rem;
    padding: 0.4rem;
  }
  .count{
    width: 0.8rem;
    height:0.8rem;
   position: absolute;
    border-radius: 50%;
    line-height: 0.8rem;
    right: 0.2rem;
    top:0.1rem;
  }
.isShowOne{
  display: none;
}
  .num{
    font-size: 0.5rem;
  }
  .pre{
    font-size: 0.8rem;
    display: inline-block;
    height: 0.8rem;
    line-height: 0.8rem;
    color: #ccc;
    margin-right: 0.2rem;
  }
  .coun{
    font-size: 0.7rem;
  }
  .gj{
    display: inline-block;
    width: 4rem;
    position: absolute;
    right: 0.5rem;
    text-align: right;
  }
</style>
