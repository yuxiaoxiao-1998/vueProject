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
    //点击加入购物车商品的总数量
    addCount:0,
    //-------------------------
    //商品页点击图片进入详情页的对象
    detilsOne:{},
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
  },
  mutations:{
    xiangQing(state,sps){
      state.detilsOne=sps;
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
