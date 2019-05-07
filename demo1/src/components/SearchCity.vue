<template>
    <div>
      <!--中间城市不固定,点击哪个显示哪个-->
      <mt-header title="上海">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to='/' slot="right">切换城市</router-link>
      </mt-header>

    </div>
</template>

<script>
    export default {
        name: "SearchCity",
    }
</script>

<style scoped>

</style>
