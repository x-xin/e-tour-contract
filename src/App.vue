<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
const user = sessionStorage.getItem('user')
export default {
  name: 'app',
  watch: {
    '$route' (to, from) { // 监听路由改变
      console.log(to, from)
    }
  }
}
</script>

<style lang="stylus" scoped>
  #app
    height 100%
</style>
