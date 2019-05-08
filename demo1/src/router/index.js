import Vue from 'vue'
import Router from 'vue-router'
import SearchCity from '../components/SearchCity'
import YxCity from '../components/YxCity'
import YxHome from '../components/YxHome'
import YxOnePage from '../components/YxOnePage'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/city'},
    {path:'/city',component:YxCity},
    {path:'/search',component:SearchCity},
    {path:'/home',component:YxHome,children:[
        //二级路由重定向
        {path:'',redirect:{path:'onepage'}},
        {path:'onepage',component:YxOnePage}
      ]},
  ]
})
