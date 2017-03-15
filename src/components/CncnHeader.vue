<template>
  <el-row class="cncn-header">
    <el-col :span="21">
      <div class="logo">欣欣旅游电子合同系统安全有效便捷</div>
    </el-col>
    <el-col :span="3">
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
  height 50px
  line-height 50px
  color #fff
  background-color #0e2f47
</style>
