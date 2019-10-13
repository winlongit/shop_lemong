import Vue from 'vue'
import App from './App'

// 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
import api from '@/common/vmeitime-http/'
// 全局挂载后使用 http://ext.dcloud.net.cn/plugin?id=159#detail
Vue.prototype.$api = api


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
