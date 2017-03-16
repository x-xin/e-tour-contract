<template>
  <el-row class="cncn-header">
    <el-col :span="14" class="logo">
      <span>欣欣旅游电子合同系统安全有效便捷</span>
    </el-col>
    <el-col :span="10" class="quit">
      <span>您好，lxstest</span>&emsp; | &emsp;
      <span>退出登录</span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      //
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.cncn-header
  position fixed
  top 0px
  left 0px
  width 100%
  height 50px
  line-height 50px
  color #fff
  background-color #0e2f47
  .logo
    padding-left 20px
  .quit
    padding-right 20px
    text-align right
</style>
