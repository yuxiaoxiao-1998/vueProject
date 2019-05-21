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
//------------------------------------------------------------
import Hylogin from '../components/Hycomponents/Hylogin.vue'
import Hyprofile from '../components/Hycomponents/Hyprofile.vue'
import Hybalance from '../components/Hycomponents/balance/Hybalance.vue'
import Hydetail from '../components/Hycomponents/balance/Hydetail.vue'

import Hybenefit from '../components/Hycomponents/benefit/Hybenefit.vue'
import Hypoints from '../components/Hycomponents/points/Hypoints.vue'
import Hydetailpoi from '../components/Hycomponents/points/Hydetailpoi.vue'
import Hyorder from '../components/Hycomponents/Hyorder.vue'
import Hychome from '../components/Hycomponents/Hychome.vue'
import Hyvipcard from '../components/Hycomponents/vipcard/Hyvipcard.vue'
import Hyservice from '../components/Hycomponents/Hyservice.vue'
import Hydownload from '../components/Hycomponents/Hydownload.vue'

import Hyinfor from '../components/Hycomponents/infor/Hyinfor.vue'
import Hysetusername from '../components/Hycomponents/infor/Hysetusername.vue'
import Hyaddress from '../components/Hycomponents/infor/Hyaddress.vue'
import Hyadd from '../components/Hycomponents/infor/Hyadd.vue'
import HyaddDetail from '../components/Hycomponents/infor/HyaddDetail.vue'
import Hyforget from '../components/Hycomponents/Hyforget.vue'

import Hyexchange from '../components/Hycomponents/benefit/Hyexchange.vue'
import Hycommend from '../components/Hycomponents/benefit/Hycommend.vue'
import HyhbHistory from '../components/Hycomponents/benefit/HyhbHistory.vue'
import Hypayment from '../components/Hycomponents/vipcard/Hypayment'
import Hyusercart from '../components/Hycomponents/vipcard/Hyusercart'
import HyinvoiceRecord from '../components/Hycomponents/vipcard/HyinvoiceRecord'
import Hysearchaddress from '../components/Hycomponents/Hysearchaddress'
//-------------------------yxx
import Hychooseaddress from '../components/Hychooseaddress'
import HyaddAddress from '../components/HyaddAddress'
import Hyinvoice from '../components/Hyinvoice'
import Hyremark from '../components/Hyremark'
Vue.use(Router)
//---------jack-------
import HyorderDetail from '../components/Hycomponents/HyorderDetail'

export default new Router({
  routes: [
    {path:'/',redirect:'/city'},
    {path:'/city',component:YxCity},
    {path:'/search',component:SearchCity},
    {path:'/home',component:YxHome,children:[
        //二级路由重定向
        {path:'',redirect:{path:'onepage'}},
        {path:'onepage',component:YxOnePage},
        {path:'homeOne',component:YxSearch},
        //从登录开始的路由
        // 一级路由 我的页面
        {path:'profile', component:Hyprofile},
        // 一级 我的订单
        {path:'order', component:Hyorder},
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
        {path:'detailone',component:YxDetailsOne},
      ]},
    {path:'/proone',component:YxSale},
    {path:'/pro',component:YxDetails},
    {path:'/order1',component:YxOrder},
  //  ------------------------------------------------------
    {
      //登录界面
      path:'/login',
      component:Hylogin,
    },
    {
      //账户信息页面
      path:'/infor',
      component:Hyinfor,
     // 三级路由 修改
      children:[
      // 修改用户名
      {
        path:'setusername',
        component:Hysetusername,
       },
        // 编辑地址
         {
            path: 'address',
              component: Hyaddress,
              // 四级路由
              children:[
                // 新增地址
                {
                  path: 'add',
                  component: Hyadd,
                  // 五级路由
                  children:[
                    // 搜索地址
                    {
                      path:'addDetail',
                      component:HyaddDetail,
                    }
                  ]
                }
              ]
            },
            // 三级forget
            {
              path: 'forget',
              component: Hyforget,
            },
          ]
        },

      // ]
    // },
    {
      path: '/balance',
      component: Hybalance,
      // 二级路由
      children:[
        {
          path:'detail',
          component:Hydetail,
        },
      ]
    },
    // 一级 我的优惠
    {
      path:'/benefit',
      component:Hybenefit,
      // 二级路由
      children:[
        // 推荐有奖
        {
          path: 'commend',
          component: Hycommend,
        },
        // 兑换红包
        {
          path:'exchange',
          component:Hyexchange,
        },
        {
          path: 'hbHistory',
          component: HyhbHistory,
        },
      ]
    },
    // 一级 我的积分
    {
      path: '/points',
      component: Hypoints,
    },
    //一级,积分
        {
          path:'/detailpoi',
          component:Hydetailpoi,
        },

    // 一级 积分商城
    {
      path:'/chome',
      component:Hychome,
    },
    // 一级 饿了么会员
    {
      path:'/vipcard',
      component:Hyvipcard,
      // 二级路由
      children:[
        // 二级 在线支付
        {
          path:'payment',
          component:Hypayment,
        },
        // 二级 兑换会员
        {
          path: 'usercart',
          component: Hyusercart,
        },
        // 二级 购买记录
        {
          path: 'invoiceRecord',
          component: HyinvoiceRecord,
        },
      ]
    },
    // 一级 服务中心
    {
      path: '/service',
      component: Hyservice,
    },
    // 一级 下载APP
    {
      path: '/download',
      component: Hydownload,
    },
    //订单页面进入添加一个收货地址---yxx
    {
      path:'/order2',
      component:Hychooseaddress,
    },
    {
      path:'/order3',
      component:HyaddAddress,
      children:[
        {
          path:'searchaddress',
          component:Hysearchaddress,
        },
      ]
    },
    {
      path:'/invoice',
      component:Hyinvoice
    },
    {
      path:'/beizhu',
      component:Hyremark
    },
    //------jack---
    //一级  我的详细订单
    {
      path:'/orderDetail',
      component:HyorderDetail
    },
  ]
})
