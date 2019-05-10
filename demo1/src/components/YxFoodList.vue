<template>
    <div>
      <mt-header fixed :title="$store.state.title" id="homeOne">
        <router-link to="/home" slot="left">
          <span class="glyphicon glyphicon-menu-left"></span>
        </router-link>
      </mt-header>
      <!--排序,筛选等-->
      <ul class="y_top">
        <li @click="y_LiOne" :class="{'LiOne':isLiOne}"><span>{{listTitle}}</span><span :class="{'glyphicon':true, 'glyphicon-triangle-bottom':true,'y_is':y_isOne}"></span></li>
        <li @click="y_LiTwo" :class="{'LiOne':isLiTwo}"><span>排序</span><span :class="{'glyphicon':true, 'glyphicon-triangle-bottom':true,'y_is':y_isTwo}"></span></li>
        <li><span>筛选</span><span class="glyphicon glyphicon-triangle-bottom"></span></li>
        <div class="empty"></div>
      </ul>
      <!--点击第一个li时显示的列表-->
      <el-collapse-transition>
      <div class="y_listOne"  v-if="isExt">
      <ul class="y_listOne_left">
        <li v-for="(list,k) in listOne" :class="{'selected':isShowOne===list.name?true:false}">
          <a @click="sendRight(list)">
            <img :src="srcSOne[k]">
            <span>{{list.name}}</span>
            <span class="kongge"></span>
            <mt-badge size="small" color="#ccc" class="btn">{{list.count}}</mt-badge>
          <span class="glyphicon glyphicon-menu-right jt"></span>
          </a>
        </li>
      </ul>
        <ul class="y_listOne_right">
          <li v-for="list in listTwo">
            <!--点击进行路由跳转-->
            <router-link to="/111">
              <span>{{list.name}}</span>
              <mt-badge size="small" color="#ccc" class="btn">{{list.count}}</mt-badge>
            </router-link>
          </li>
        </ul>
        <div class="empty"></div>
      </div>
      </el-collapse-transition>
      <!--点击第二个按钮显示的列表-->
      <el-collapse-transition>
        <ul class="yListTwo"  v-if="isTwoExt">
          <li>
            <!--通过路由传值-->
            <router-link to="/food/foodtwo">
              <a @click="clickOne">
            <img src="../image/1.png" alt="无法显示">
            <span>智能排序</span>
                <span :class="{'y_znS':true,'y_znList':y_znListOne==='1'?true:false}"><img src="../image/dui.png" alt="无"></span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link  to="/food/foodtwo">
              <a @click="clicktwo">
                <img src="../image/2.png" alt="无法显示">
                <span>距离最近</span>
                <span :class="{'y_znS':true,'y_znList':y_znListOne==='2'?true:false}"><img src="../image/dui.png" alt="无"></span>
              </a>
            </router-link>

          </li>
          <li>
            <router-link  to="/food/foodtwo">
              <a @click="clickthree">
            <img src="../image/3.png" alt="无法显示">
            <span>销量最高</span>
                <span :class="{'y_znS':true,'y_znList':y_znListOne==='3'?true:false}"><img src="../image/dui.png" alt="无"></span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link  to="/food/foodtwo">
              <a @click="clickfour">
            <img src="../image/4.png" alt="无法显示">
            <span>起送价最低</span>
                <span :class="{'y_znS':true,'y_znList':y_znListOne==='4'?true:false}"><img src="../image/dui.png" alt="无"></span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link  to="/food/foodtwo">
              <a @click="clickfive">
            <img src="../image/5.png" alt="无法显示">
            <span>配送速度最快</span>
                <span :class="{'y_znS':true,'y_znList':y_znListOne==='5'?true:false}"><img src="../image/dui.png" alt="无"></span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link  to="/food/foodtwo">
              <a @click="clicksix">
            <img src="../image/6.png" alt="无法显示">
            <span>评分最高</span>
                <span :class="{'y_znS':true,'y_znList':y_znListOne==='6'?true:false}"><img src="../image/dui.png" alt="无"></span>
              </a>
            </router-link>
          </li>
        </ul>
      </el-collapse-transition>
      <!--点击第三个按钮显示的列表,未写-->
      <el-collapse-transition>
      </el-collapse-transition>
      <!--商铺列表-->
      <router-view></router-view>
    </div>
</template>

<script>
  import Vue from 'vue'
  import 'element-ui/lib/theme-chalk/base.css';
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
  Vue.component(CollapseTransition.name, CollapseTransition)
    export default {
      name: "YxFoodList",
      data() {
        return {
          listTitle: this.$store.state.title,
          listOne: {},
          srcS: '',
          srcSOne: [],
        //  被点击的li背景的切换
          isShowOne:'',
          //右侧显示的对应左侧的子数据
          listTwo:{},
          //------------------
          //下拉列表是否存在的判断
          isExt:false,
          //小三角按钮旋转
          y_isOne:false,
          //字体颜色变化
          isLiOne:false,
          //  -------------
          // 排序的三个变量(字体颜色,按钮旋转,ul是否存在的判断)
            isTwoExt:false,//ul
            y_isTwo:false,//按钮是否旋转
            isLiTwo:false,//字体颜色
          //---------------
          //筛选的三个变量(字体颜色,按钮旋转,ul是否存在的判断)一个存在时,另外两个都不存在

          //-----------
          //对号是否存在的变量
          y_znListOne:'',
        //  ---------------
        }
      },
      created() {
        //第一个商品按钮的数据获取
        Vue.axios.get('https://elm.cangdu.org/shopping/v2/restaurant/category').then((res) => {
          this.listOne = res.data;
          this.showImage();
        }).catch((error) => {
          console.log('请求错误', error)
        });
        //第二个排序的按钮的数据获取
        Vue.axios.get('https://elm.cangdu.org/shopping/v2/restaurant/category').then((res) => {
          this.listOne = res.data;
        }).catch((error) => {
          console.log('请求错误', error)
        });
      },
      methods: {
        y_LiOne() {
          //第一个列表ul是否显示
          this.isExt= !this.isExt;
          //根据ul是否显示完成字的切换
          if(this.isExt){
            this.listTitle='分类';
            this.y_isOne=true;
            this.isLiOne=true;
            this.isTwoExt=false;
            this.y_isTwo=false;
            this.isLiTwo=false;

          }else{
            this.listTitle= this.$store.state.title;
            this.y_isOne=false;
            this.isLiOne=false;
          }
        },
        y_LiTwo(){
          //第二个列表ul是否显示
          this.isTwoExt = !this.isTwoExt;
          if(this.isTwoExt){
              this.y_isTwo=true;
              this.isLiTwo=true;
              this.isExt=false;
              this.y_isOne=false;
              this.isLiOne=false;
          }else{
            this.y_isTwo=false;
            this.isLiTwo=false;
          }

        },
        //判断图片的格式
        showImage() {
          for (let s of this.listOne) {
            let len = s.image_url.length;
            if (s.image_url.slice(len - 4) === 'jpeg') {
              this.srcS = 'https://fuss10.elemecdn.com/' + s.image_url.slice(0, 1) + '/' + s.image_url.slice(1, 3) + '/' + s.image_url.slice(3) + '.jpeg';
            } else if (s.image_url.slice(len - 3) === 'png') {
              this.srcS = 'https://fuss10.elemecdn.com/' + s.image_url.slice(0, 1) + '/' + s.image_url.slice(1, 3) + '/' + s.image_url.slice(3) + '.png';
            } else {
              this.srcS = '//elm.cangdu.org/img/default.jpg'
            }
            this.srcSOne.push(this.srcS);
          }
        },
        //通过方法将数据显示在右侧
        sendRight(list){
          //当点击某一个li时.切换背景颜色
          this.isShowOne=list.name;
          //赋值给右侧子对象
          this.listTwo=list.sub_categories;
        },
        //点击不同的通过路由传值,传过去不同的id值,two组件根据不同的id发起请求
        clickOne(){
          this.y_znListOne='1';
          this.isTwoExt=false;
          this.y_isTwo=false;
          this.isLiTwo=false;
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.cityall.l+'&longitude='+this.$store.state.cityall.l1+'&order_by=4').then((res) => {
            this.$store.state.clickTwo=res.data;
          }).catch((error)=>{console.log('请求错误',error)});
        },
        clicktwo(){
          this.y_znListOne='2';
          this.isTwoExt=false;
          this.y_isTwo=false;
          this.isLiTwo=false;
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.cityall.l+'&longitude='+this.$store.state.cityall.l1+'&order_by=5').then((res) => {
            this.$store.state.clickTwo=res.data;
          }).catch((error)=>{console.log('请求错误',error)});
        },
        clickthree(){
          this.y_znListOne='3';
          this.isTwoExt=false;
          this.y_isTwo=false;
          this.isLiTwo=false;
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.cityall.l+'&longitude='+this.$store.state.cityall.l1+'&order_by=6').then((res) => {
            this.$store.state.clickTwo=res.data;
          }).catch((error)=>{console.log('请求错误',error)});
        },
        clickfour(){
          this.y_znListOne='4';
          this.isTwoExt=false;
          this.y_isTwo=false;
          this.isLiTwo=false;
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.cityall.l+'&longitude='+this.$store.state.cityall.l1+'&order_by=1').then((res) => {
            this.$store.state.clickTwo=res.data;
          }).catch((error)=>{console.log('请求错误',error)});
        },
        clickfive(){
          this.y_znListOne='5';
          this.isTwoExt=false;
          this.y_isTwo=false;
          this.isLiTwo=false;
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.cityall.l+'&longitude='+this.$store.state.cityall.l1+'&order_by=2').then((res) => {
            this.$store.state.clickTwo=res.data;
          }).catch((error)=>{console.log('请求错误',error)});
        },
        clicksix(){
          this.y_znListOne='6';
          this.isTwoExt=false;
          this.y_isTwo=false;
          this.isLiTwo=false;
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.cityall.l+'&longitude='+this.$store.state.cityall.l1+'&order_by=3').then((res) => {
            this.$store.state.clickTwo=res.data;
          }).catch((error)=>{console.log('请求错误',error)});
        }
      }
    }
</script>

<style scoped>
  .empty{
    clear: both;
  }
  #homeOne{
    height: 2rem;
    font-size: 0.7rem;
    z-index: 10;
    font-weight: bolder;
  }

.y_top{
  margin-top: 2rem;
  font-size: 0;
  margin-bottom: 0;
  position: fixed;
  z-index: 10;
  background: white;
}
  .y_top>li{
    list-style: none;
    float: left;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.5rem;
    width:5.33rem;
    text-align: center;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
  }
  .y_top>li>span{
    margin-right: 0.2rem;
  }
  .y_is{
    transform: rotateX(180deg);
  }
  .LiOne{
    color:#26A2FF;
  }
  .y_listOne{
    position: fixed;
    z-index: 10;
    top: 4rem;
    height: 16rem;
    background: white;
  }
  .y_listOne_left{
    width: 8rem;
    border: 1px solid #e4e4e4;
    float: left;
    background: #F1F1F1;
    list-style: none;
    height: 16rem;
    overflow:auto;
  }
  .y_listOne_left>li{
    height: 1.8rem;
    line-height: 1.8rem;
    position: relative;
    padding-left: 0.6rem;
  }
  .y_listOne_left .selected{
    background:white;
  }
  .y_listOne_left>li a{
    font-size: 0.55rem;
    color:black;
    text-decoration: none;
  }
  .y_listOne_left>li .btn{
    position: absolute;
    right:1rem;
    top:0.6rem;
    font-size: 0.4rem;
  }
  .y_listOne_left>li img{
    width: 1rem;
  }
  .y_listOne_left>li .kongge{
    display: inline-block;
    width: 1.5rem;
    height: 1rem;
    line-height: 1rem;
  }
  .jt{
    position: absolute;
    right: 0.3rem;
    font-size: 0.3rem;
    top:0.85rem;
  }
  .y_listOne_right{
    width: 8rem;
    background: white;
    float: left;
    list-style: none;
    height: 16rem;
    overflow:auto;
    border-bottom: 1px solid #e4e4e4;
    border-left: 1px solid #e4e4e4;
  }
  .y_listOne_right>li{
    height: 1.8rem;
    line-height: 1.8rem;
    position: relative;
    padding-left: 0.6rem;
    border-bottom: 1px solid #e4e4e4;
  }
  .y_listOne_right>li a{
    font-size: 0.55rem;
    color:black;
    text-decoration: none;
  }
  .y_listOne_right>li .btn{
    position: absolute;
    right:1rem;
    top:0.6rem;
    font-size: 0.4rem;
  }
  .yListTwo{
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    background: white;
    z-index: 10;
  }
  .yListTwo li{
    height: 2.3rem;
    line-height: 2.3rem;
    font-size: 0.5rem;
    border-bottom: 1px solid #e4e4e4;
    background: white;
    position: relative;
  }
  .yListTwo li a{
    color: black;
    display: block;
    background: white;
    text-decoration: none;
  }
  .yListTwo li img{
    width: 0.7rem;
    margin-right:1rem;
    margin-left: 1rem;
  }
  .y_znS{
    display: none;
  }
  .y_znList{
    width: 0.7rem;
    position: absolute;
    right: 2rem;
    display:inline-block;
  }
</style>
