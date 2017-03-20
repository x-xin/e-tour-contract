<template>
  <div class="signup">
    <cncn-header></cncn-header>
    <div class="signup-wrap">
      <div class="signup-con">
        <div>signup-con</div>
        <div>signup-con</div>
        <div>signup-con</div>
        <div>signup-con</div>
        <div>signup-con</div>
        <div>signup-con</div>
        <div>signup-con</div>
        <div>signup-con</div>
      </div>
    </div>
    <cncn-footer></cncn-footer>
  </div>
</template>
<script>
import CncnHeader from '@/components/CncnHeader.vue'
import CncnFooter from '@/components/CncnFooter.vue'

export default {
  name: 'signup',
  data () {
    return {
      //
    }
  },
  components: {
    CncnHeader, CncnFooter
  }
}
</script>
<style lang="stylus">
  .signup
    min-height 100%
    position relative
    background-color #ecf0f5
    .signup-wrap
      // margin 64px 46px 74px
      position absolute
      top 64px
      left 0px
      width 100%
      .signup-con
        margin 0px 46px
        background-color #fff
</style>
