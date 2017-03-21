<template>
  <div class="cncn-sign-system signup">
    <div class="cncn-sign-system-wrap">
      <cncn-header></cncn-header>
      <div class="cncn-sign-system-con">
        <div class="cncn-sign-system-main">
          <el-row :gutter="6" class="cncn-progress">
            <el-col :span="12">
              <div class="cncn-progress-base cncn-progress-complate">
                设置账号<i class="arrow-right"></i>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="cncn-progress-base cncn-progress-current">
                <i class="arrow-left"></i>完成注册</i>
              </div>
            </el-col>
          </el-row>
          <el-form :model="signupForm" :rules="rules" ref="signupForm" label-width="100px" class="signup-password-form">
            <el-form-item label="用户类型：">
              <span class="type"><i class="cncn-icon-enterprise"></i>企业用户</span>
            </el-form-item>
            <el-form-item label="企业邮箱：" prop="email">
              <el-input type="email" v-model="signupForm.email" auto-complete="off" placeholder="该邮箱作为账号登录"></el-input>
            </el-form-item>
            <el-form-item label="登录密码：" prop="pass">
              <el-input type="password" v-model="signupForm.pass" auto-complete="off" placeholder="请设置登录密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="checkPass">
              <el-input type="password" v-model="signupForm.checkPass" auto-complete="off" placeholder="请再次输入登录密码"></el-input>
            </el-form-item>
            <el-form-item label="验证码：" prop="code">
              <el-input type="password" v-model="signupForm.code" auto-complete="off" placeholder="请输入验证码">
                <template slot="append"><img class="code-img" src="../../assets/code.jpg"></template>
              </el-input>
              
            </el-form-item>
            <el-form-item>
              <el-radio class="radio protocol" v-model="radio" label="3">同意<a href="#">《福建智慧旅游电子合同协议》</a></el-radio>
            </el-form-item>
            <el-form-item>
              <el-button type="primary form-btn">下一步</el-button>
            </el-form-item>
          </el-form>
          <div class="signup-password-desc">
            <h2>认证申请材料<em>（影印件必须为彩色原件的扫描件或数码照）</em></h2>
            <p>1、单位证件照：经营许可证照，营业执照；</p>
            <p>2、法人代表人身份证正反面影印件；</p>
            <p>3、委托书，必须盖有单位公章（合同/业务专员章无效）。<a href="#">下载委托书模板</a></p>
            <span>如有疑问，请拨打 0592-5372105</span>
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
  name: 'signup',
  data () {
    return {
      signupForm: {
        email: '',
        pass: '',
        checkPass: '',
        code: ''
      },
      rules: {
        email: [
          { message: '请输入邮箱', trigger: 'blur' }
        ],
        pass: [
          { message: '请输入密码', trigger: 'blur' }
        ],
        checkPass: [
          { message: '请再次输入密码', trigger: 'blur' }
        ],
        code: [
          { message: '请再次验证码', trigger: 'blur' }
        ]
      },
      radio: '1'
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
</style>
