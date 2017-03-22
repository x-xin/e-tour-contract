<template>
  <div class="cncn-sign-system password">
    <div class="cncn-sign-system-wrap">
      <cncn-header></cncn-header>
      <div class="cncn-sign-system-con">
        <div class="cncn-sign-system-main password-main">
          <el-row :gutter="6" class="cncn-progress">
            <el-col :span="8">
              <div class="cncn-progress-base cncn-progress-complate">
                验证身份<i class="arrow-right"></i>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="cncn-progress-base cncn-progress-current">
                <i class="arrow-left"></i>设置密码<i class="arrow-right"></i>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="cncn-progress-base">
                <i class="arrow-left"></i>完成
              </div>
            </el-col>
          </el-row>
          <h1>您正在使用邮箱验证码找回密码，请完成以下操作</h1>
          <el-form :model="passwordForm" :rules="rules" ref="passwordForm" label-width="110px" class="signup-password-form">
            <el-form-item label="您的邮箱：" prop="email">
              <el-input type="email" size="large" v-model="passwordForm.email" auto-complete="off" placeholder="请输入注册的邮箱"></el-input>
            </el-form-item>
            <el-form-item label="邮箱验证码：" prop="code">
              <el-input type="text" size="large" v-model="passwordForm.code" auto-complete="off" placeholder="请输入6位邮箱验证码">
                <template slot="append">获取验证码</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="large">下一步</el-button>
            </el-form-item>
          </el-form>
          <div class="signup-password-desc">
            <h2>没收到邮箱验证码？</h2>
            <p>1、网络通讯异常可能会造成邮件丢失，请重新获取或稍后再试。</p>
            <p>2、请核实邮箱是否正常使用，并检查垃圾邮件。</p>
            <p>3、如果邮箱已停用，请选择其他验证方式。</p>
          </div>
        </div>
      </div>
      <cncn-footer></cncn-footer>
    </div>
  </div>
</template>
<script>
import CncnHeader from '@/components/CncnHeader.vue'
import CncnFooter from '@/components/CncnFooter.vue'

export default {
  name: 'password',
  data () {
    return {
      passwordForm: {
        email: '',
        code: ''
      },
      rules: {
        email: [
          { message: '请输入邮箱', trigger: 'blur' }
        ],
        code: [
          { message: '请再次验证码', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    CncnHeader, CncnFooter
  }
}
</script>
<style lang="stylus">
  .signup-password-form
    input
      &::placeholder
        color #e0e0e0
      &:-webkit-autofill
        box-shadow 0 0 0px 1000px white inset
        
  .password-main
    h1
      width 100%
      margin-bottom 50px
      text-align center
      font-size 18px
      color #999
</style>
