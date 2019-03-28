<template>
  <a-layout>
    <a-layout-sider class="layout-sider" collapsible v-model="collapsed">
      <div class="logo-content">
        <img src="../../images/home/home_logo.png" class="logo-img"/>
        <span class="logo-title" v-show="!collapsed">城市服务平台</span>
      </div>
      <a-menu theme="dark" mode="inline">
        <a-sub-menu key="1">
          <span slot="title">
            <a-icon type="user"/>
            <span>工人库</span>
          </span>
          <a-menu-item key="2" @click="gotoRoster">花名册</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <div class="header-login-title">欢迎,超级管理员</div>
        <img src="../../images/home/login_config.png" class="header-login-img"/>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb class="layout-breadcrumb">
          <a-breadcrumb-item >工人库</a-breadcrumb-item>
          <a-breadcrumb-item style="color: #223355">花名册</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="layout-content">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
  .logo-content {
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    vertical-align: middle;
  }

  .logo-img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }

  .logo-title {
    font-size: 20px;
    color: rgba(0, 160, 233, 1);
    padding-left: 10px;
    vertical-align: middle;
  }
  .layout-sider{
    min-height: 100vh;
  }
  .layout-header{
    background: #fff;
    position: relative;
  }
  .layout-content{
    padding: 24px;
    height: 100%;
  }
  .layout-breadcrumb{
    margin: 16px 0;
    color: #7A8B9C
  }
  .header-login-img{
    margin-right: 40px;
    width: 30px;
    height: 30px;
    position: absolute;
    top:50%;
    left:95%;
    transform: translate(-50%,-50%);
  }
  .header-login-title{
    float: right;
    margin-right: 40px;
    font-size: 16px;
  }

</style>
<script>
  export default {
    data() {
      return {
        collapsed: false,
      }
    },
    methods:{
      gotoRoster(){
        this.$router.push({
          name: 'roster'
        })
      }
    }
  }
</script>
