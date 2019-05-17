<template>
    <div class="max">
      <!--城市从vuex中获取-->
      <mt-header fixed :title="$store.state.cityIn.name" class="sea1">
        <router-link to="/" slot="left">
        <!--左侧按钮未写,预留-->
          <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
        </router-link>
        <router-link to='/city' slot="right" class="back">切换城市</router-link>
      </mt-header>

      <div class="sMax">
      <div class="top">
        <input type="text" class="form-control" placeholder="输入学校,商务楼,地址" id="inputOne" @input="inputC($event)">
        <button class="btn btn-primary btn1" @click="searchCity">提交</button>
      </div>
      <div class="bottom">
        <p :class="{'his1':true,'his':isHis ? true:false}">搜索历史</p>
        <div>
          <!--根据输入框内容显示对应地址显示-->
          <li v-for="c in seaCity" :class="{'cLi':true,'cLi1': isLi ? true:false}" @click="souSuoHis(c)"  id="h">
            <router-link to="/home">
              <a @click="sendVuexone(c.name,c.latitude,c.longitude,c.geohash)">
              <p>{{c.name}}</p>
              <span>{{c.address}}</span>
              </a>
            </router-link>
          </li>
          <!--搜索历史的显示-->
          <ul v-for="c1 in $store.state.cityHistory" :class="{'cLi':true,'his':isHis ? true:false}" >
              <p>{{c1.name}}</p>
              <span>{{c1.address}}</span>
          </ul>
          <div @click="removeC" :class="{'qingchu':true,'his':isHis ? true:false}">清除所有历史</div>
        </div>
        <div></div>
      </div>
      </div>
    </div>
</template>

<script>
  import  Vue from "vue";
    export default {
        name: "SearchCity",
        data(){
            return{
              cityData:'',
              seaCity:[],
              //搜索历史是否显示
              isHis:false,
              //搜索到的列表是否显示
              isLi:true,
          }
        },
        methods:{
          inputC(e){
            //可修改为不操作dom获取输入框的值
            this.cityData=e.target.value;
          },
          searchCity(){
            //搜索历史文字的显示和隐藏
            this.isHis = !this.isHis;
            if(this.isHis){
              this.isLi=false;
            }else{
              this.isLi=true;
            }
            Vue.axios.get('https://elm.cangdu.org/v1/pois?city_id='+this.$store.state.cityIn.id+'&keyword='+this.cityData+'&type=search').then((res) => {
              this.seaCity=res.data;
            }).catch((error)=>{console.log('请求错误',error)});
          },
          souSuoHis(c) {
            this.$store.state.cityHistory.push(c);
          },
          removeC(){
            this.$store.state.cityHistory=[];
          },
          sendVuexone(name,latitude,longitude,geohash){
            //传给vuex经纬度以及名字信息
            this.$store.state.cityall={n:name,l:latitude,l1:longitude,geo:geohash};
          }
        },
    }
</script>

<style scoped>
  .max{
    background: #F5F5F5;
  }
.sea1{
  height: 2rem;
  font-size: 0.8rem;
  z-index: 10;
}
.sMax{
  margin-top: 2rem;
}
.back{
  font-size: 0.6rem;
}
#inputOne{
  height: 1.5rem;
  font-size: 0.6rem;
  margin: 0.5rem;
  width: 15rem;
  margin-top: 0;
}
.btn1{
    width: 15rem;
    height: 1.5rem;
    font-size: 0.6rem;
    margin: 0.5rem;
    margin-top: 0;
    background: #3190E8;
}
  .top{
    background: white;
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    border:1px solid #E4E4E4;
  }
  .his{
    display: none;
  }
  .his1{
    height: 1.5rem;
    line-height: 1rem;
    border: 1px solid #e4e4e4;
    font-size: 0.5rem;
    margin-bottom: 0;
  }
  .cLi{
    list-style:none;
    height: 3rem;
    font-size: 0.6rem;
    border: 1px solid #E4E4E4;
    background: white;
    box-sizing: border-box;
    padding-left: 1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
  .cLi1{
    display: none;
  }
  .cLi p{
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .cLi span{
    font-size: 0.45rem;
  }
  .qingchu{
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.5rem;
    background: white;
    color: black;
    margin-top: -0.5rem;
    border-top: 1px solid #e4e4e4;
  }
  #h a{
    color: black;
    text-decoration: none;
  }
</style>
