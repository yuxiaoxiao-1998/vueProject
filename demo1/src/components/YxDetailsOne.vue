<template>
    <div class="max">
    <mt-header fixed :title="$store.state.detilsOne.name" class="headOne">
      <span class="glyphicon glyphicon-menu-left" slot="left" @click="$router.back(-1)"></span>
    </mt-header>
      <img :src="'//elm.cangdu.org/img/'+$store.state.detilsOne.image_path" alt="无" class="imgOne">
      <div class="maxOne">
      <p class="one">{{$store.state.detilsOne.description}}</p>
      <p class="two">{{$store.state.detilsOne.name}}</p>
      <p class="three">评分<el-rate
        v-model="$store.state.detilsOne.rating"
        disabled
        show-score
        text-color="#ff9900" class="three1">
      </el-rate></p>
      <p><span class="four">{{gettips()}}</span><span class="five">售价¥{{$store.state.detilsOne.specfoods[0].price}}起</span></p>
      <p class="six"><span class="six1">评论数{{$store.state.detilsOne.rating_count}}</span><span>好评率{{$store.state.detilsOne.satisfy_rate}}%</span></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "YxDetailsOne",
        methods:{
        gettips(){
          return this.$store.state.detilsOne.tips.split(" ")[1];
        },
      }
    }
</script>

<style scoped>
.headOne{
  height: 2rem;
  font-size: 0.7rem;
}
.max{
  margin-bottom: 2rem;
}
  .imgOne{
    width: 100%;
  }
  .maxOne{
    padding-left: 0.5rem;
  }
  .one{
    font-size: 0.5rem;
  }
  .two{
  font-size: 0.7rem;
  }
  .three{
    font-size: 0.6rem;
  }
  .three1{
    display: inline-block;
    font-size: 1rem;
  }
  .four{
    font-size: 0.6rem;
    margin-right: 1rem;
  }
  .five{
    color:#FF9100;
    font-size: 0.6rem;
    letter-spacing: 0.01rem;
  }
  .six{
    font-size: 0.6rem;
  }
  .six1{
    margin-right:1rem;
  }
</style>
