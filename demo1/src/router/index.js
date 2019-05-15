import Vue from 'vue'
import Router from 'vue-router'
import SearchCity from '../components/SearchCity'
import YxCity from '../components/YxCity'
import YxHome from '../components/YxHome'
import YxOnePage from '../components/YxOnePage'
import YxFoodList from '../components/YxFoodList'
import YxFootListOne from '../components/YxFootListOne'
import YxFootListTwo from '../components/YxFootListTwo'
import YxSearch from '../components/YxSearch'
import YxShopHome from '../components/YxShopHome'
import YxShopTopOne from '../components/YxShopTopOne'
import YxSale from '../components/YxSale'
import YxDetails from '../components/YxDetails'
import YxOrder from '../components/YxOrder'
import YxDetailsOne from '../components/YxDetailsOne'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/city'},
    {path:'/city',component:YxCity},
    {path:'/search',component:SearchCity},
    {path:'/home',component:YxHome,children:[
        //二级路由重定向
        {path:'',redirect:{path:'onepage'}},
        {path:'onepage',component:YxOnePage},
        {path:'homeOne',component:YxSearch}
      ]},
    {path:'/food',component:YxFoodList,children: [
        //二级路由重定向
        {path:'',redirect:{path:'foodone'}},
        {path:'foodone',component:YxFootListOne},
        {path:'foodtwo',component:YxFootListTwo},
      ]},
    {path:'/shopHome',component:YxShopHome,children:[
        {path:'',redirect:{path:'shopone'}},
        {path:'shopone',component:YxShopTopOne},
        {path:'detailone',component:YxDetailsOne}
      ]},
    {path:'/proone',component:YxSale},
    {path:'/pro',component:YxDetails},
    {path:'/order1',component:YxOrder},
  ]
})
