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
        <li  @click="y_Lithr" :class="{'LiOne':isLithr}"><span>筛选</span><span :class="{'glyphicon':true, 'glyphicon-triangle-bottom':true,'y_is':y_isthr}"></span></li>
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
            <router-link to="/food/foodtwo">
            <a @click="send1(list.id)">
              <span>{{list.name}}</span>
              <mt-badge size="small" color="#ccc" class="btn">{{list.count}}</mt-badge>
              </a>
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
        <div class="yListThr" v-if="isthrExt">
         <p class="ps1">配送方式</p>
          <p>
            <span v-for="s in y_ps"  class="ps" @click="addOne(s)" :class="{'color':s.isClick}">
              <img src="../image/fn.png" alt="" class="fn" v-if="!s.isClick">
              <img src="../image/dui.png" alt="" class="fn1"  v-if="s.isClick" >
              {{s.text}}
            </span>
          </p>
          <p  class="ps1">商家属性(可以多选)</p>
          <p v-for="(s,i) in y_sx" class="ps" @click="addOne(s)" :class="{'color':s.isClick}">
            <span :style="{'borderColor':'#'+s.icon_color,'borderStyle':'solid','color':'#'+s.icon_color,'borderWidth':'1px'}" class="sx"  v-if="!s.isClick">{{s.icon_name}}</span>
            <img src="../image/dui.png" alt="" class="fn1"  v-if="s.isClick">
            <span>{{s.name}}</span>
          </p>
          <p class="zh">
            <el-button class="qingkong" @click="qk()">清空</el-button>
            <router-link to="/food/foodtwo">
            <el-button type="success"  class="qingkong" @click="qd()">确定{{count()}}</el-button>
            </router-link>
          </p>
        </div>
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
          isShowOne:'异国料理',
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
          isthrExt:false,//ul
          y_isthr:false,//按钮是否旋转
          isLithr:false,//字体颜色
          //-----------
          //对号是否存在的变量
          y_znListOne:'',
        //  ---------------
        //   筛选对应显示的数据
          y_ps:[],
          y_sx:[],
          //被选中时的数量
          s_count:0,
          //请求参数对应的数组
          p_arr:[],
          p_arr1:[]
        }
      },
      created() {
        //第一个商品按钮的数据获取
        Vue.axios.get('https://elm.cangdu.org/shopping/v2/restaurant/category').then((res) => {
          this.listOne = res.data;
          this.showImage();
          //进入时,默认选中异国料理
          for(let list of this.listOne){
            if(list.name==='异国料理'){
              this.sendRight(list);
            }
          }
        }).catch((error) => {
          console.log('请求错误', error)
        });
        //第三个筛选的按钮的数据获取
        Vue.axios.get('https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes').then((res) => {
          this.y_ps = res.data;
        }).catch((error) => {
          console.log('请求错误', error)
        });
        //第三个筛选的按钮的数据获取1
        Vue.axios.get('https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes').then((res) => {
          this.y_sx = res.data;
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
            this.y_isthr=false;
            this.isLithr=false;
            this.isthrExt=false;

          }else{
            this.listTitle= this.$store.state.title;
            this.y_isOne=false;
            this.isLiOne=false;
            this.isthrExt=false;
          }
        },
        y_LiTwo(){
          //第二个列表ul是否显示
          this.isTwoExt = !this.isTwoExt;
          if(this.isTwoExt){
              this.listTitle= this.$store.state.title;
              this.y_isTwo=true;
              this.isLiTwo=true;
              this.isExt=false;
              this.y_isOne=false;
              this.isLiOne=false;
              this.y_isthr=false;
              this.isLithr=false;
              this.isthrExt=false;
          }else{
            this.y_isTwo=false;
            this.isLiTwo=false;
          }
        },
        y_Lithr(){
          this.isthrExt = !this.isthrExt;
          if(this.isthrExt){
            this.listTitle= this.$store.state.title;
            this.y_isTwo=false;
            this.isLiTwo=false;
            this.isTwoExt=false;
            this.isExt=false;
            this.y_isOne=false;
            this.isLiOne=false;
            this.y_isthr=true;
            this.isLithr=true;
          }else{
            this.y_isthr=false;
            this.isLithr=false;
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
        },
        send1(id){
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.cityall.l+'&longitude='+this.$store.state.cityall.l1+'&restaurant_category_ids[]='+id).then((res) => {
              this.isExt=false,
              this.y_isOne=false,
              this.isLiOne=false,
              this.listTitle= this.$store.state.title;
            this.$store.state.clickTwo=res.data;
          }).catch((error)=>{console.log('请求错误',error)});
        },
        //是否显示
        addOne(s){
          if(s.isClick){
            //不选中
            //当前被选中的数量
              this.s_count--;
             var index = this.p_arr1.indexOf(s.id);
            // 如果在数组中没找到指定元素则返回 -1
              if (index > -1) {
                this.p_arr1.splice(index, 1);
              }
              Vue.set(s,'isClick',false);
          }else{
              //选中
              this.s_count++;
             this.p_arr.push(s.id);
             //最后发请求的数组
             this.p_arr1=Array.from(new Set(this.p_arr));
             Vue.set(s,'isClick',true);

          }
        },
        //清空所有的对号和样式
        qk(){
          for(let s of this.y_sx){
            Vue.set(s,'isClick',false);
          }
          for(let s of this.y_ps){
            Vue.set(s,'isClick',false);
          }
          this.s_count=0;
        },
        //被选中的数量的判断
        count(){
          if(this.s_count <= 0){
            return '';
          }else{
            return '('+this.s_count+')';
          }
        },
        //筛选出的数据
        qd(){
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.$store.state.cityall.l+'&longitude='+this.$store.state.cityall.l1+'&support_ids []='+this.p_arr1).then((res) => {
            this.$store.state.clickTwo=res.data;
          }).catch((error) => {
            console.log('请求错误', error)
          });
          this.isthrExt=false;
        }
      }
    }
</script>

<style scoped>
  .color{
    color:#3190E8;
  }
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
  .yListThr{
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    background: white;
    z-index: 10;
  }
  .ps1{
    font-size: 0.5rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.5rem;
    padding-left: 0.5rem;
  }
  .ps{
    display: inline-block;
    padding:0.3rem 0.3rem;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    font-size: 0.45rem;
    width: 4.6rem;
    margin: 0.2rem 0.3rem;
  }
  .sx{
    padding: 0.1rem;
    border-radius: 10px;
    font-size: 0.5rem;
  }
  .zh{
    height: 2.2rem;
    background:#F1F1F1;
    margin-top: 0.5rem;
  }
  .qingkong{
    width: 7.5rem;
    height: 1.7rem;
    font-size: 0.7rem;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
  }
  .fn{
    width: 0.8rem;
  }
  .fn1{
    width: 0.8rem;
  }
</style>
