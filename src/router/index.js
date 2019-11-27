// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入路由所映射的组件
import Login from '@/views/login.vue'
import Index from '@/views/index.vue'

// Use
Vue.use(VueRouter)
// 创建路由对象
let router = new VueRouter({
  // 进行路由配置
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'Index' }
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Index',
      path: '/index',
      component: Index
    }
  ]
})
// 暴露
export default router
