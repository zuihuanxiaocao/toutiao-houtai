<template>
  <div class="login">
   <div class="container">
       <img src="../assets/avatar.jpg" alt class="avatar"/>
      <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      class="demo-ruleForm">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholer="请输入用户名" prefix-icon="icon-users"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
         v-model="loginForm.password"
         type="password"
         placeholer="请输入密码"
         prefix-icon="icon-key"
          ></el-input>
      </el-form-item>
      <el-form-item>
           <el-button type="primary" class="login-btn" @click="loginsubmit">登录</el-button>
      </el-form-item>
    </el-form>
     </div>
  </div>
</template>

<script>
import { login } from '@/apis/users.js'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 3,
            max: 16,
            message: '请输入3-16位数的密码',
            trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginsubmit () {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          let res = await login(this.loginForm)
          // console.log(res)
          if (res.data.message === '登录成功') {
            // 将token数据进行本地存储
            localStorage.setItem('toutiao_houtai_token', res.data.data.token)
            // 跳转到后台管理首页
            this.$router.push({ path: '/index' })
          } else {
            this.$message.error(res.data.message)
          }
        } else {
          // 验证不通过 给提示
          this.$message.error('用户数据输入不合法')
          // 终止本次请求
          return false
        }
      })
    }

  }
}
</script>

<style lang='less' scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
