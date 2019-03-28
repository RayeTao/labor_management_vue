import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//登录
const Login = () => import('../views/login/Login.vue').then(m => m.default);
//首页
const Home = () => import('../views/home/Home.vue').then(m => m.default);
//工人库
const Roster = () => import('../views/worker/Roster.vue').then(m => m.default);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/home/roster',
          name: 'roster',
          component: Roster
        }
      ]
    },

  ]
})
