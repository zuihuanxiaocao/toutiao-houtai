import Vue from 'vue'
import App from './App.vue'
// 引入路由模块
import router from '@/router/index.js'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入样式文件
import '@/styles/index.less'
// 让vue实例上能够挂载element-ui的所有组件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  // 注入路由
  router,
  render: h => h(App)
}).$mount('#app')
