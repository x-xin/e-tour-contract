<template>
  <div class="signin">
    <el-form :model="signinForm" :rules="rules" ref="signinForm" label-width="0px" class="signin_main">
      <h3 class="title">欢迎登录</h3>
      <el-form-item prop="account" class="signin_item">
        <el-input type="text" class="signin-input" v-model="signinForm.account" auto-complete="off" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass" class="signin_item">
        <el-input type="password" class="signin-input" v-model="signinForm.checkPass" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-row class="signin_guide">
        <el-col :span="12" class="reg">
          <router-link to="/signup">注册账户</router-link>
        </el-col>
        <el-col :span="12" class="psw">
          <router-link to="/password">找回密码</router-link>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" class="signin-btn" @click.native.prevent="handleSubmit" v-loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="signin_footer">技术支持：欣欣信息有限公司&福建智慧旅游有限公司&emsp;合作伙伴：厦门市美亚柏科信息股份有限公司</div>
  </div>
</template>
<script>
import { requestSignin } from '../../api'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'signin',
  data () {
    return {
      signinForm: {
        account: 'Roda',
        checkPass: '123456'
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'loading', 'account'
    ])
  },
  methods: {
    ...mapActions([
      'postLogin'
    ]),
    handleSubmit () {
      this.$refs.signinForm.validate((valid) => {
        if (valid) {
          let loginParams = {
            username: this.signinForm.account,
            password: this.signinForm.checkPass
          }
          let _this = this
          this.postLogin({

            params: loginParams,
            success (res) {
              if (res.data.code === 1) {
                // 路由跳转
                console.log(res.data.code)
                sessionStorage.setItem('user', _this.account)
                _this.$router.replace('/home')
              } else {
                console.log(res.data.code)
                _this.$notify({
                  title: '错误',
                  message: res.data.msg,
                  type: 'error'
                })
              }
            },
            error (res) {
              console.log(res)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
          &:-webkit-autofill
            box-shadow 0 0 0px 1000px white inset
      
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
      
  @media only screen and (max-width: 1440px) and (min-width: 1280px)
    .signin_main
      transform scale(.9)
      transform-origin 0 120px
  @media only screen and (max-width: 1280px)
    .signin_main
      transform scale(.8)
      transform-origin 0 120px
</style>
