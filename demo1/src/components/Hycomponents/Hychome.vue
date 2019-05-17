<template>
  <div class="chome">
    <a href="###">请重新进入</a>
    <p>请返回后重新进入积分商城</p>
    <img src="https://yun.duiba.com.cn/webapp/img/retrylogin.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "Hychome"
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
  .chome{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    text-align: center;
    /* line-height: middle; */
    padding-top: 50%;

  }
  .chome a{
    font-size: .8rem;
    color: blue;
    text-decoration: none;
  }
  .chome p{
    font-size: .6rem;
    padding: 2% 0;
  }
  .chome img{
    width: 50%;
  }
</style>
