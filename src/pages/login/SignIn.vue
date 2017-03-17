<template>
  <div class="signin">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0px" class="signin_main">
      <h3 class="title">欢迎登录</h3>
      <el-form-item prop="account" class="signin_item">
        <el-input type="text" class="signin-input" v-model="loginForm.account" auto-complete="off" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" class="signin-input" v-model="loginForm.checkPass" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-row class="signin_guide">
        <el-col :span="12" class="reg">注册账户</el-col>
        <el-col :span="12" class="psw">找回密码</el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" class="signin-btn" @click.native.prevent="handleSubmit">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="signin_footer">技术支持：欣欣信息有限公司&福建智慧旅游有限公司&emsp;合作伙伴：厦门市美亚柏科信息股份有限公司</div>
  </div>
</template>
<script>
export default {
  name: 'signin',
  data () {
    return {
      loginForm: {
        account: '',
        checkPass: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  }
}
</script>
<style lang="stylus">
  .signin
    height 100%
    background #1879d4 url('../../assets/signin_bg.png') center center no-repeat
    background-size cover
    position relative
    overflow hidden
    .signin_main
      position absolute
      left 50%
      top 50%
      margin-left 100px
      margin-top -110px
      padding 0 40px 40px
      width 300px
      height 302px
      background-color #fff
      border-radius 8px
      box-shadow 0 1px 6px 0 #375b86, 0 1px 6px 0 rgba(255,255,255,0.2)
      h3
        height 80px
        line-height 80px
        color #666
        font-size 28px
        text-align center
      .signin_item
        margin-bottom 24px
      .signin_guide
        height 30px
        .reg,.psw
          font-size 14px
          color #248ef2
        .psw
          text-align right
        
      .signin-input
        input
          padding 0px 10px
          height 48px
          line-height 48px
          border 1px solid #e0e0e0
          color #666
          &::placeholder
            color #e0e0e0
      
      .signin-btn
        width 100%
        height 50px
        padding 0px
        line-height 50px
        font-size 20px
        background-color #ff9705
        border-color #ff9705
        
    .signin_footer
      position absolute
      bottom 0px
      left 0px
      width 100%
      height 70px
      line-height 70px
      color #cee0fa
      font-size 14px
      text-align center
  
  @media only screen and (max-width: 1280px)
    .signin_main
      width 200px !important
      height 250px !important
      padding 0 20px 20px !important
      .signin_item
        margin-bottom 21px !important
      .signin-input
        input
          height 40px !important
          line-height 40px !important
      h3
        height 50px !important
        line-height 50px !important
        font-size 20px !important
  @media only screen and (max-width: 1440px) and (min-width: 1280px)
    .signin_main
      width 250px !important
      height 265px !important
      padding 0 30px 30px !important
      h3
        height 65px !important
        line-height 65px !important
        font-size 24px !important
</style>
