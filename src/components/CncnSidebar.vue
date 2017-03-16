<template>
  <el-row class="cncn-sidebar">
    <el-col :span="24">
      <el-menu mode="vertical" :default-active="currentPath" class="menu" unique-opened router>
        <template v-for="(item,index) in menuItem">
          <el-menu-item :index="item.children[0].path" :class="item.singleClass" v-if="item.single">
            <i :class="item.icon"></i>
            {{ item.children[0].name }}
          </el-menu-item>
          <el-submenu :index="index+''" :i="index" v-else-if="!item.hidden&&!item.single">
            <template slot="title">
              <i :class="item.icon"></i>
              {{item.name}}
            </template>
            <el-menu-item v-for="(child,i) in item.children" :key="i" :index="child.path">
              {{ child.name }}
            </el-menu-item>
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
  z-index 5
  .el-col-24
    width auto
    height 100%
    overflow-x auto
    .menu
      width 150px
      font-size 14px
      background-color #2a3542
      .menu-item-single
        height 44px
        line-height 44px
        border-left 4px solid #2a3542
        color #b8c7ce
        &:hover
          border-left 4px solid #48576a
          background-color #48576a
        &.is-active
          color #47a3ff
          border-left 4px solid #47a3ff
          background-color #1b405d
      .el-submenu
        &.is-active
          background-color #1b405d
          .el-submenu__title
            color #47a3ff
            border-left 4px solid #47a3ff
        .el-submenu__title
          height 44px
          line-height 44px
          color #b8c7ce
          border-left 4px solid #2a3542
          &:hover
            border-left 4px solid #48576a
            background-color #48576a
        .el-menu
          background-color #0e2f47
          .el-menu-item
            height 40px
            line-height 40px
            color #b8c7ce
            &:hover
              background-color #48576a
            &.is-active
              color #47a3ff
</style>
