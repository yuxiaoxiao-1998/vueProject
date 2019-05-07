import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
