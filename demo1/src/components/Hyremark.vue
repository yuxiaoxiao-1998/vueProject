<template>
    <div class="remark">
      <!--头部-->
      <div class="header">
        <mt-header title="订单列表" class="remark-header">
          <!--登录返回-->
          <span class="glyphicon glyphicon-menu-left" slot="left" @click="$router.back(-1)"></span>
        </mt-header>
      </div>
      <!-- 快速备注 -->
      <div class="remark_banner">
        <p>快速备注</p>
        <ul>
          <li>
            <el-radio-group v-model="radio1" size="medium">
              <el-radio-button label="不要辣" ></el-radio-button>
              <el-radio-button label="少点辣"></el-radio-button>
              <el-radio-button label="多点辣"></el-radio-button>
            </el-radio-group>
          </li>
          <li>
            <el-radio-group v-model="radio2" size="medium">
              <el-radio-button label="不要香菜"></el-radio-button>
            </el-radio-group>
          </li>
          <li>
            <el-radio-group v-model="radio3" size="medium">
              <el-radio-button label="不要洋葱" ></el-radio-button>
            </el-radio-group>
          </li>
          <li>
            <el-radio-group v-model="radio4" size="medium">
              <el-radio-button label="多点醋" ></el-radio-button>
            </el-radio-group>
          </li>
          <li>
            <el-radio-group v-model="radio5" size="medium">
              <el-radio-button label="多点葱" ></el-radio-button>
            </el-radio-group>
          </li>
          <li>
            <el-radio-group v-model="radio6" size="medium">
              <el-radio-button label="去冰" ></el-radio-button>
              <el-radio-button label="少冰" ></el-radio-button>
            </el-radio-group>
          </li>
        </ul>
      </div>
      <!-- 其他备注 -->
      <div class="other_note">
        <div class="other_top">
            <p>其他备注</p>
        </div>
        <div class="other_bot">
          <el-input
          class="other_text"
          type="textarea"
          :rows="4"
          placeholder="请输入备注内容(可不填)"
          v-model="textarea">
        </el-input>
        </div>
      </div>
      <!-- 确定按钮 -->
      <router-link to="/order1">
      <el-button class="remark_but" @click="remarkClack">确定</el-button>
      </router-link>

    </div>
</template>

<script>
  // 引入mint-ui 头部
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  Vue.component(Header.name, Header);
  // 引入Element
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);
    export default {
        name: "Hyremark",
        data () {
          return {
            radio1:'',
            radio2:'',
            radio3:'',
            radio4:'',
            radio5:'',
            radio6:'',
            textarea:'',
            remarkArr:[],
          }
        },
        methods: {
          remarkClack(){
            this.remarkArr.push(this.radio1,this.radio2,this.radio3,this.radio4,this.radio5,this.radio6,this.textarea);
            this.$store.commit("remark",this.remarkArr);
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
.remark{
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.remark-header{
  width: 100%;
  height: 2rem;
  font-size: .8rem;
  padding-left: 2%;
}
/* 快速备注 */
.remark_banner{
  width: 100%;
  height: 8rem;
  background-color: #fff;
  margin: 3% 0 3% 0;
  padding: 0 5% 0 3%;
}
.remark_banner p{
  height: 1rem;
  line-height: 1rem;
  padding: .3rem 0 0 .3rem;
  font-size: .7rem;
}
.remark_banner li{
  float:left;
  padding: .5rem 0 0 .3rem;
  list-style: none;
}
/* 其他备注 */
.other_note{
  width:100%;
  height: 8rem;
  background-color: #fff;
  padding: .5rem 3% 0 4%;
}
.other_top{
  height: 1rem;
  font-size: .7rem;
  margin: 0 0 1rem 0;
}
.other_text >>> .el-textarea__inner{
  background-color: #f5f5f5;
  font-size: .6rem;
  color: #666;
}
/* 按钮 */
.remark_but{
  width: 92%;
  height: 1.5rem;
  margin: 5% 0 0 4%;
  background-color: #4cd964;
  color:#fff;
  font-size: .7rem;
}
</style>
