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

const store=new Vuex.Store({
  state:{
    //该对象存储了被点击的城市对象的name和id
    cityIn:{},
    cityall:{},
    cityPos:[]
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
