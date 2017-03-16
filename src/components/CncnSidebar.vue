<template>
  <el-row class="cncn-sidebar">
    <el-col :span="24">
      <el-menu mode="vertical" :default-active="currentPath" class="menu" theme="dark" unique-opened router>
        <template v-for="(item,index) in menuItem" v-if="!item.hidden">
          <el-submenu :index="index+''">
            <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
            <el-menu-item v-for="(child,i) in item.children" :key="i" :index="child.path">{{ child.name }}</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      currentPath: '/home'
    }
  },
  computed: {
    menuItem () {
      return this.$router.options.routes
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentPath = to.path
    }
  },
  mounted () {
    this.currentPath = this.$route.path
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.cncn-sidebar
  width 150px
  position fixed
  top 50px
  bottom 0px
  background-color #2a3542
  overflow: hidden
  .el-col-24
    width auto
    height 100%
    overflow-x auto
    .menu
      width 150px
</style>
