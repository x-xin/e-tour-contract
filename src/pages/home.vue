<template>
	<div class="cncn-main-wrap">
    <cncn-main></cncn-main>
    <cncn-footer></cncn-footer>
  </div>
</template>
<script>
import CncnMain from '@/components/CncnMain'
import CncnFooter from '@/components/CncnFooter'
export default {
  name: 'home',
  dada () {
    return {
      aa: 'hah'
    }
  },
  components: {
    CncnMain, CncnFooter
  }
}
</script>
<style lang="stylus">
  .cncn-main-wrap
    margin-left 150px
</style>
