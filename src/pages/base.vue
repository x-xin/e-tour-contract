<template>
  <div class="cncn-main-core">
    <cncn-header></cncn-header>
    <cncn-sidebar></cncn-sidebar>
    <router-view></router-view>
  </div>
</template>
<script>

import CncnHeader from '@/components/CncnHeader'
import CncnSidebar from '@/components/CncnSidebar'

export default {
  name: 'base',
  components: {
    CncnHeader, CncnSidebar
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="stylus">
  .cncn-main-core
    position fixed
    top 50px
    left 0px
    width 100%
    height 100%
</style>
