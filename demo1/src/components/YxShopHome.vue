<template>
  <div>
    <!--购物车页面-->
    <!--加入购物车-->
    <router-view></router-view>
    <!--购物车显示-->
    <YxShopBottom></YxShopBottom>
  </div>
</template>

<script>
    import YxShopBottom from "./YxShopBottom";
    export default {
        name: "YxShopHome",
      components: {YxShopBottom}
    }
</script>

<style scoped>

</style>
