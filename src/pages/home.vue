<template>
	<div class="cncn-main-wrap">
    <div class="cncn-main">
      home
    </div>
    <cncn-footer></cncn-footer>
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
  //
</style>
