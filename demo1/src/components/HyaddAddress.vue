<template>
  <div class="addAddress">
    <router-view></router-view>
    <!--头部-->
    <div class="header">
      <mt-header title="添加地址" class="addAddress-header">
        <span class="glyphicon glyphicon-menu-left fh" slot="left" @click="$router.push({path:'/order2'})"></span>
      </mt-header>
    </div>
    <!-- 地址信息 -->
    <div class="addAddress_con">
      <div class="add_name one">
        <p>联系人</p>
        <input v-model="name" type="text" placeholder="  你的名字">
        <div class="empty"></div>
      </div>
      <div class="add_sex one">
        <p></p>
        <section>
          <el-radio v-model="radio" label="1">先生</el-radio>
          <el-radio v-model="radio" label="2">女士</el-radio>
        </section>
        <!--<section>-->
        <!--<input v-model="sex" value="1" checked="checked" id="sir" type="radio">-->
        <!--<label for="sir">先生</label>-->
        <!--<input v-model="sex" value="2" id="girl" type="radio">-->
        <!--<label for="girl">女士</label>-->
        <!--</section>-->
        <div class="empty"></div>
      </div>
      <div class="phone one">
        <p>联系电话</p>
        <input type="text" v-model="phone" placeholder="  你的手机号">
        <span @click="phoneBkShow">+</span>
        <div class="empty"></div>
      </div>
      <div class="phone_bk one" v-if="flag">
        <p></p>
        <input type="text" v-model="phone_bk" placeholder="  备选电话">
        <div class="empty"></div>
      </div>
      <div class="sendAddress one">
        <p>送餐地址</p>
        <!-- 点击跳到搜索地址 -->
        <input @click="$router.push({path:'/order3/searchaddress'})" type="text" v-model="sendAddress"  placeholder="  小区/写字楼/学校等">
        <div class="empty"></div>
      </div>
      <div class="address_detail one">
        <p></p>
        <input type="text" v-model="address_detail"
               placeholder="  详细地址(如门牌号等)">
        <div class="empty"></div>
      </div>
      <div class="tag one">
        <p>标签</p>
        <input type="text" v-model="tag"
               placeholder="  无/家/学校/公司">
        <div class="empty"></div>
      </div>
    </div>
    <div class="addAddress_but">
      <el-button @click="addAddress">确定</el-button>
    </div>
    <!-- 弹框 -->
    <div class="pop_up animation bounceIn"
         v-if="isShow">
      <p class="el-icon-warning"></p>
      <br>
      <span>{{alertText}}</span>
      <mt-button type="default" size="large"
                 @click="isShow=false">确认</mt-button>
    </div>
  </div>
</template>

<script>
  // 引入mint-ui 头部
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  import { mapState } from 'vuex'
  // 引入Element
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);
  export default {
    name: "HyaddAddress",
    data () {
      return {
        name:'',//姓名
        radio:'1',//性别
        phone:'',//电话
        phone_bk:'',//备用电话
        sendAddress:'',//送餐地址
        address_detail:'',//详细地址
        tag:'',//标签
        tag_type:'',//标签类型
        flag:false,
        isShow:false,
        alertText:'',//弹框
        user_id:'',//用户id
        geohash:'',//经纬度
        list:'',
      }
    },
    // 路由守卫 子路由调到父路由
    beforeRouteUpdate (to, from, next){
      this.sendAddress = this.$store.state.search;
      console.log(this.$store.state.search);
      this.geohash = this.$store.state.geohash;
      next();
    },
    methods: {
      // 显示备选电话
      phoneBkShow(){
        this.flag = true;
      },
      addAddress(){
        if (
          this.name == '' &&
          this.phone == '' &&
          this.sendAddress == '' &&
          this.address_detail == '' &&
          this.tag_type == ''
        ) {
          this.isShow = true;
          this.alertText = '请输入姓名/手机号/送餐地址/详细地址/标签';
        } else {
          Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
            console.log(res.data.user_id);
            Vue.axios.post('https://elm.cangdu.org/v1/users/'+res.data.user_id+'/addresses',
              {
                // user_id:this.user_id,//用户id
                address:this.sendAddress,//地址
                address_detail:this.address_detail ,//详细地址
                geohash:this.geohash,//经纬度
                name:this.name,//收货人姓名
                phone:this.phone,//手机号
                tag:this.tag,//标签
                sex:this.radio,//性别
                phone_bk:this.phone_bk,//备用电话
                tag_type:2,//标签类型
              }
            ).then(res=>{
              console.log(res.data);
              if (res.data.success === "添加地址成功") {
                // console.log(res.data.success);
                this.$router.push({path:'/order2'});
              }
            }).catch((err) => {
              console.log('请求错误',err);
            });
          }).catch((err) => {
            console.log('请求错误',err);
          });
        }
      },
    },
  }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  .addAddress{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .addAddress-header{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    padding-left: 2%;
  }
  /* 地址信息 */
  .addAddress_con{
    width: 100%;
    padding: 3%;
    /* background-color: #fff; */
  }
  /* 空标签请浮动 */
  .empty{
    clear: both;
  }
  /* input 默认样式 清除 */
  input{
    height: 1.3rem;
    border: 0px;
    outline:none;
    cursor: pointer;
    font-size: .6rem;
  }
  /* 联系人 */
  .one{
    height:2rem;
  }
  .one p{
    width: 30%;
    float: left;
    font-size: .7rem;
  }
  .one input,section{
    width: 70%;
    float: right;
  }
  .phone{
    position: relative;
  }
  .one span{
    position: absolute;
    top: -20%;
    right: 3%;
    color: #3190e8;
    font-size: 1.5rem;
  }
  .addAddress_but button{
    width: 94%;
    height: 1.5rem;
    margin-left: 3%;
    font-size: .7rem;
    color: #ffffff;
    background-color: #4cd964;
  }
  .add_sex{
    height: 1.3rem;
    font-size: .5rem;
  }
  .add_sex>section>input{
    width:6%;
  }
  /* 弹框 */
  .pop_up {
    width: 70%;
    height: 6.9rem;
    background: #fff;
    text-align: center;
    border-radius: 5%;
    position: absolute;
    left: 15%;
    top: 25%;
  }
  /* 手机弹框 */
  .pop_up p {
    font-size: 2rem;
    padding: 0.8rem 0;
  }
  .pop_up span {
    font-size: 0.7rem;
    color: #ccc;
  }
  .pop_up button {
    background-color: green;
    color: #fff;
    margin-top: 0.6rem;
  }
  .fh{
    font-size: 0.6rem;
  }
</style>
