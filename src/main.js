import Vue from 'vue'
import 'element-theme-darkplus/lib/index.css';
import App from './App.vue'
import router from './router'
require(`@/plugins/element-ui`)
require(`@/plugins/clipboard`)
require(`@/plugins/axios`)
require(`@/plugins/device`)

import '@/icons' // icon

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
