<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" scoped>
  #app 
    background-color #ccc
    box-shadow 10px 10px 10px #000
</style>
