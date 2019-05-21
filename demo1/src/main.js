import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
//移动端js插件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//网络请求插件
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//vuex插件
import Vuex from 'vuex'
Vue.use(Vuex)
//Element插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

//----------------------------
// animated.css动画
import animated from 'animate.css'
Vue.use(animated)
// 解决跨域请求问题的
axios.defaults.withCredentials = true;
// import Vuex from 'vuex'
// Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    //该对象存储了被点击的城市对象的name和id
    cityIn:{},
    //存储历史记录
    cityHistory:[],
    //搜索店铺或商家的历史记录
    shopHistory:[],
    shopHistory1:[],
    //传递过来的地址名字,经度纬度,经纬度数组
    cityall:{},
  //  存储甜品饮品等点击过来的名字,及下列商铺所有信息(初始页面的显示)
    title:'',
    allList:[],
//当点击智能排序等按钮时,传递的数据,动态变量
    clickTwo:[],
    //点击商铺,该数据记录被点击的商铺里的商品信息
    shopAll:[],
    //商铺本身的页面
    shopP:{},
  //  --------------------
      //点击加入购物车时的数组
    //{name:this.geName,price:this.geMoney,sName:this.gName,countS:1,id:this.foodId,wy:this.weiyi}
    addShopAll:[],
    //点击结算时的对应商铺的总购物车商品
    newShop:[],
    //-------------------------
    //商品页点击图片进入详情页的对象
    detilsOne:{},
    //所有被加入购物车的的商品的信息
    allS:[],
    //对应商铺的总购物车数量---------------3
    mineAllSum:[],
  //  -----------------------hyy-------------------------
    //
    packNum: [],
    // 修改的名字
    setUserName: '',
    // 登录的用户名
    isName: false,
    // 快速备注数组
    remarkArr:[],
    // 存储id
    getUserId:'',
  //  搜索地址
    search:'',
  //  经纬度
    geohash:'',
    //地址
    address:'',
    //--------jack--
    nowTime:'',
  },
  mutations:{
    timeFormate(state,timeStamp) {
      // if(this.$store.state.sureOrderMark){
      // console.log('timeFormate函数被触发了')
      // this.$store.state.sureOrderMark=false;
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      // let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      // return year + "-" + month + "-" + date +"-"+" "+hh+":"+mm ;
      state.nowTime = year + "-" + month + "-" + date +"-"+" "+hh+":"+mm ;
      // console.log(this.nowTime);
      // }
    },
    //
    history1(state,payload){
      state.shopHistory1.push(payload);
      let his=Array.from(new Set(state.shopHistory1));
      state.shopHistory=his;
    },
    //点击删除一条历史记录
    remoHis(state,i){
        state.shopHistory.splice(i,1);
    },
    //清空所有历史记录
    remoHisAll(state){
      state.shopHistory=[];
    },
    //详情页的数据存储
    xiangQing(state,sps){
      state.detilsOne=sps;
    },
    //点击结算时传递的对应商铺所加入的购物车的信息
    newS(state,shop){
      state.newShop=shop;
    },
    allMineShop(state,shop){
        state.allS.push(shop);
    },
    //每一个商铺总数量的过滤-------------2
    mineAllCount(state,shopId){
      //过滤出id相同的返回给一个新的变量(存储对应商铺购物车的总数量sumCount1)
      let sumCount1=0;
      //定义变量sumMoneyAll(存储对应购物车的总钱数)
      let sumMoneyAll=0;
      //定义数组(存储对应商品的foodId和价格)
      let arrFood=[];
      for(let s of state.addShopAll){
        if(s.shopId===shopId){
          sumCount1 += s.countS;
          sumMoneyAll += s.countS*s.price;
          arrFood.push({foodid:s.id,foodPrice:s.price})
        }
      }
      state.mineAllSum.push({id:shopId,count:sumCount1,allMoney:sumMoneyAll,food:arrFood});
    },
    //每一个商铺总数量的过滤,点击减号时总数量发生改变
    updateMineAll1(state,payload){
      for(let s of state.mineAllSum){
        if(s.id===payload.id){
          s.count--;
          for(let s1 of s.food){
            if(s1.foodid===payload.foodId){
              s.allMoney -= s1.foodPrice;
            }
          }
        }
      }
    },
    //每一个商铺总数量的过滤,点击加号时总数量发生改变
    updateMineAll2(state,payload){
      for(let s of state.mineAllSum){
        if(s.id===payload.id){
          s.count++;
          for(let s1 of s.food){
            if(s1.foodid===payload.foodId){
              s.allMoney += s1.foodPrice;
            }
          }
        }
      }
    },
    //清空购物车的方法
    removeAllShop(state,id){
      for(let s of state.mineAllSum){
        if(s.id===id){
          s.count=0;
        }
      }
    },
    //------------------------hyy-------------------
    isname(state) {
      if (sessionstroage.username) {
        state.isName = true;
      } else {
        state.isName = false;
      }
    },
    remark(state,pay){
      state.remarkArr = pay;
    },
  },
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
