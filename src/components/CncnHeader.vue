<template>
  <el-row class="cncn-header">
    <el-col :span="14" class="logo">
      <span>欣欣旅游电子合同系统<em>&nbsp;&nbsp;安全&nbsp;&nbsp;有效&nbsp;&nbsp;便捷</em></span>
    </el-col>
    <el-col :span="10" class="quit">
      <span>您好，Roda</span>&emsp; | &emsp;
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
  z-index 5
  .logo
    padding-left 20px
    span
      font-size 22px
      font-weight bold
      em
        font-weight normal
        font-size 14px
        
  .quit
    padding-right 20px
    text-align right
    font-size 14px
</style>
