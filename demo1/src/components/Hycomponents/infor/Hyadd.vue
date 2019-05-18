<template>
  <div class="add">
    <router-view></router-view>
    <mt-header title="新增地址" class="add-header">
      <!--登录返回-->
      <mt-button @click="$router.push({path:'/infor/address'})" icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="part"></div>
    <div class="add_input">
      <el-input class="input_c" v-model="name" placeholder="请填写你的姓名">
      </el-input>
      <div @click="$router.push({path:'/infor/address/add/addDetail'})">
        <el-input class="input_c" v-model="address" placeholder="小区/写字楼/学校等">
        </el-input>
      </div>
      <el-input class="input_c" v-model="address_detail" placeholder="请填写详细送餐地址">
      </el-input>
      <el-input class="input_c" v-model="phone" placeholder="请填写能够联系到您的手机号">
      </el-input>
      <el-input class="input_c" v-model="phone_bk" placeholder="备用联系电话(选填)">
      </el-input>
    </div>
    <div class="part"></div>
    <el-button class="newEdit" type="success" @click="addSite">新增地址</el-button>

    <!-- 弹框 -->
    <div class="pop_up animation bounceIn"
         v-if="isShow">
      <!--<p class="el-icon-warning"></p>-->
      <img src="../../../imgages/images/警告.png" alt="" style="width:40%;">
      <br>
      <span>{{alertText}}</span>
      <mt-button type="default" size="large"
                 @click="isShow=false">确认</mt-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "Hyadd",
    data () {
      return {
        isShow:false,
        alertText:'',//弹框里的值
        user_id:'',
        name: '',
        address: '',
        address_detail: '',
        phone: '',
        phone_bk: '',
        geohash:'',
        sex:'',
        tag:'',
        tag_type:'',
        item: '',
      }
    },
    // 路由守卫 子路由调到父路由
    beforeRouteUpdate (to, from, next) {
      if (JSON.parse(localStorage.getItem("item"))) {
        this.item = JSON.parse(localStorage.getItem("item"));
        this.address = this.item.name + "*" + this.item.address;
      }
      next();
    },
    created () {

    },
    methods: {
      addSite () {
        let reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
        if (
          this.name == '' &&
          this.phone == ''
        ) {
          this.isShow = true;
          this.alertText = "请输入用户名/手机号"
        } else if(!(reg.test(this.phone))){
          this.isShow = true;
          this.alertText = "请输入正确手机号"
        }else {
          Vue.axios.get('https://elm.cangdu.org/v1/user').then(res=>{
            this.$store.state.getUserId = res.data.user_id;
            Vue.axios.post(
              " https://elm.cangdu.org/v1/users/"+res.data.user_id +"/addresses",
              {
                address: this.address,
                address_detail: this.address_detail,
                geohash: this.item.geohash,
                phone:this.phone,
                phone_bk:this.phone_bk,
                name: this.name,
                tag:'您好',
                sex:1,
                poi_type:0,
                tag_type:3,
              }
            ).then((res) => {
              if (res.data.success === "添加地址成功") {
                this.$router.push({path:'/profile/infor/address'});
              }
            }).catch((err) => {
              console.log("请求错误",err);
            });
          }).catch(err=>{
            console.log('请求错误',err);
          })
        }
      }
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
  }
  .add {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 30;
  }
  /* 头部 */
  .add-header {
    width: 100%;
    height: 2rem;
    font-size: 0.8rem;
    padding-left: 2%;
  }
  /* 空白分割 */
  .part {
    width: 100%;
    height: 0.5rem;
  }
  .add_input {
    width: 100%;
    /* height: 11.6rem; */
    background-color: #ffffff;
    padding: 3%;
  }
  .input_c {
    width: 100%;
    /* height:1.7rem; */
    /* background-color: #ddd; */
    margin-bottom: 1%;
  }
  .newEdit {
    width: 94%;
    height: 1.5rem;
    font-size: 0.8rem;
    /* background-color: green; */
    margin: 5% 0 0 3%;
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
    top: 35%;
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
</style>
