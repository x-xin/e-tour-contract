<template>
  <div class="main">
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
  
</style>
