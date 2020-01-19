import Vue from 'vue'
import App from '../src/App'
import router from '../src/router'
import store from '../src/store'
import api from './http/api'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design';

// import style
import 'view-design/dist/styles/iview.css';
import service from "../src/http"
import dayjs from 'dayjs'


// Vue.use(ElementUI)

// 把service对象挂载在Vue的原型对象上
// 每一个组件都可以使用
Vue.use(ViewUI);
Vue.prototype.$api = api
Vue.prototype.$axios = service
Vue.prototype.$dayjs = dayjs
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')