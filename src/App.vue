<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
const user = sessionStorage.getItem('user')
export default {
  name: 'app'
}
</script>

<style lang="stylus" scoped>
  #app
    height 100%
</style>
