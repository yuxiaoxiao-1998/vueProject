<template>
    <div>
      <mt-header fixed title="搜索" class="yx_sousuo">
          <a slot="left" @click="$router.back(-1)">
            <span class="glyphicon glyphicon-menu-left"></span>
          </a>
      </mt-header>
      <div class="btnAndInput">
        <input type="text" class="form-control" placeholder="请输入商家或美食名称" id="inputTwo" v-model="inputData"><span class="glyphicon glyphicon-remove cuo" @click="remoone"></span>
        <button class="btn btn-primary btn1" @click="tijiaoSearch">提交查询</button>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "YxSearch",
        data(){
          return {
            inputData:'',
            zsData:[]
          }
        },
      methods:{
        tijiaoSearch(){
          if(this.inputData===''||this.inputData===null){
            alert('暂无结果,请重新查询!');
          }else{
            Vue.axios.get('https://elm.cangdu.org/v4/restaurants?geohash='+this.$store.state.cityall.geo+'&keyword='+this.inputData).then((res) => {
                  //-------------------------
                  //获取数据,展示数据----未写
                  //思路:1,v-for展开zsData数组,2,点击时将该条数据添加到vuex的一个变量中存储,比保存搜索记录,3,清除所有历史记录
                  this.zsData=res.data;
                  console.log(this.zsData);
            }).catch((error)=>{console.log('请求错误',error)});
          }
        },
        remoone(){
          this.inputData='';
        },

      },

    }
</script>

<style scoped>
.yx_sousuo{
  height: 2rem;
  font-size: 0.7rem;
}
  #inputTwo{
    height: 1.5rem;
    background: #F2F2F2;
    width: 11rem;
    display: inline-block;
    font-size: 0.7rem;
    padding-left: 0.3rem;
  }
#inputTwo::-webkit-input-placeholder{
  color:#9C8B8B;
  font-weight: bold;
}
  .btn1{
    height: 1.4rem;
    width: 3.1rem;
    background: #3190E8;
    font-size: 0.6rem;
    display: inline-block;
    vertical-align:0.02rem;
    font-weight: bold;
  }
  .btnAndInput{
    margin-top: 2.5rem;
    background: white;
    padding: 0.5rem;
  }
  .cuo{
    position: relative;
    left:-1rem;
    color:#9C8B8B;
    font-weight: bold;
    display: inline-block;
    height: 1rem;
    width: 0.5rem;
      }
</style>
