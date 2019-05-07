<template>
  <div>
      <mt-header fixed title="饿了么" class="title"></mt-header>
      <p>城市组件</p>
  <div class="cityMax">
  </div>
  </div>
</template>

<script>
  import { Header } from 'mint-ui';
  import  Vue from "vue";
  Vue.component(Header.name, Header);
    export default {
        name: "YxCity"
    }
</script>

<style scoped>
.title{
  height: 2rem;
  font-size:0.9rem;
}
</style>
