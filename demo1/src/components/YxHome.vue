<template>
  <div class="homeMax">
    <!--插座-->
    <router-view></router-view>
    <!--底部-->
    <YxFooter></YxFooter>
  </div>
</template>

<script>
    import YxFooter from "./YxFooter";
    export default {
        name: "YxHome",
      components: {YxFooter}
    }
</script>

<style scoped>

</style>
