<template>
  <div class="content">
    <div class="logo-content">
      <img src="../../images/login/logo.png" class="logo-img"/>
      <span class="logo-title">劳务管理系统</span>
    </div>
    <div class="login-content">
      <div class="login-form">
        <div class="login-form-title">
          <span class="title">用户登录</span>
        </div>
        <div class="login-input">
          <a-input placeholder="请输入用户名" v-model="userName" size="large">
            <a-icon slot="prefix" type="user"/>
          </a-input>
        </div>
        <div class="login-input">
          <a-input type="password" placeholder="请输入密码" v-model="password" size="large">
            <a-icon slot="prefix" type="lock"/>
          </a-input>
        </div>
        <div class="login-remember-password">
          <a-checkbox @change="rememberPassword" style=" color:white;">记住密码</a-checkbox>
        </div>
        <div class="login-button">
          <a-button type="primary" block @click.native="login">登录</a-button>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
  .content {
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(63, 160, 249, 1), rgba(21, 83, 238, 1));
    background-size: 100% 100%;
    position: fixed;
  }

  .logo-content {
    padding-left: 48px;
    height: 100px;
    line-height: 100px;
    vertical-align: middle;
  }

  .logo-img {
    width: 96px;
    height: 64px;
    vertical-align: middle;
  }

  .logo-title {
    font-size: 36px;
    color: rgba(255, 255, 255, 1);
    padding-left: 20px;
    vertical-align: middle;
  }

  .login-content {
    margin: 60px 300px 0px 200px;
    background: url("../../images/login/login_bg.png") no-repeat;
    background-size: 80% 100%;
    height: 100%;
    position: fixed;
    width: 80%
  }

  .login-form {
    width: 350px;
    height: 350px;
    background: rgba(33, 39, 113, 0.7);
    border-radius: 4px;
    float: right;
    margin-right: 200px;
    margin-top: 40px;
  }

  .login-form-title {
    width: 100%;
    height: 40px;
    background: linear-gradient(180deg, rgba(0, 160, 233, 1), rgba(0, 122, 196, 1));
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px 4px 0px 0px;
    line-height: 40px;

  }

  .title {
    color: white;
    font-size: 18px;
    padding-left: 10%;
  }

  .login-input {
    padding: 30px 30px 0 30px;
  }
  .login-remember-password {
    padding: 10px 0px 0px 30px;
    font-size: 18px;
  }
  .login-button {
    padding: 30px;
  }
</style>

<script>
  export default {
    data() {
      return {
        userName: '',
        password: '',
      }
    },
    methods:{
      rememberPassword(e){
        console.log(e.target.checked)
      },
      login(){
        this.$router.push({
          name: 'home'
        })
      }
    },
    mounted(){

    }
  }
</script>


