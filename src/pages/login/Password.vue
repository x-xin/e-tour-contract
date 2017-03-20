<template>
  <div class="password">
    <cncn-header></cncn-header>
    <div class="password-con">
      signup-con
    </div>
    <cncn-footer></cncn-footer>
  </div>
</template>
<script>
import CncnHeader from '@/components/CncnHeader.vue'
import CncnFooter from '@/components/CncnFooter.vue'

export default {
  name: 'password',
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
  
</style>
