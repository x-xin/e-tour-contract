<template>
  <div class="cncn-main-wrap">
  	<div class="cncn-main-wrap-2">
      <div class="cncn-main">
        <div class="cncn-main-con-home">
          <el-row>
            <el-col :span="24">
              <div class="home-common home-msg">1111</div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="home-common home-step">222</div>
            </el-col>
            <el-col :span="12">
              <el-row :gutter="20" class="home-count">
                <el-col :span="12">
                  <div class="home-common home-count-1">1</div>
                </el-col>
                <el-col :span="12">
                  <div class="home-common home-count-2">2</div>
                </el-col>
                <el-col :span="12">
                  <div class="home-common home-count-3">3</div>
                </el-col>
                <el-col :span="12">
                  <div class="home-common home-count-4">4</div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="home-common home-newcontact">444</div>
            </el-col>
            <el-col :span="12">
              <div class="home-common home-newline">555</div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="home-common home-team">666</div>
            </el-col>
            <el-col :span="12">
              <div class="home-common home-contactnum">777</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="home-common home-trend">888888888</div>
            </el-col>
          </el-row>
        </div>
      </div>
      <cncn-footer></cncn-footer>
    </div>
  </div>
</template>
<script>
import CncnFooter from '@/components/CncnFooter'
export default {
  name: 'home',
  dada () {
    return {
      aa: 'hah'
    }
  },
  components: {
    CncnFooter
  }
}
</script>
<style lang="stylus">
  .cncn-main-con-home
    min-height 200px
    // min-width 1030px
    .home-common
      margin-bottom 20px
      border 1px solid #e8e8e8
      background-color #fff
      box-shadow 0 2px 4px 0 rgba(0,0,0,.12)
    .home-msg
      height 118px
    .home-step
      height 218px
    .home-count
      height 218px
      .home-count-1, .home-count-2, .home-count-3, .home-count-4
        height 98px
    .home-newcontact, .home-newline
      height 298px
    .home-team, .home-contactnum
      height 398px
    .home-trend
      height 498px
      
</style>
