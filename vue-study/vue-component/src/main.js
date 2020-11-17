import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Index from './pages/index'
import ProvideInject from './pages/provide-inject'
import form from './pages/form'
import updata from './pages/updata'
import computedandwatch from './pages/computedandwatch'
import App from './App.vue'
import button from './pages/click.vue'
import communication from './pages/组件通信.vue'
import checkbox from './pages/checkbox.vue'

import Alert from './components/alert/alert'
import './components/createElement/index';

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$Alert = Alert

const routes = [
  { path: '/', component: Index },
  { path: '/provide-inject', component: ProvideInject },
  { path: '/form', component: form },
  { path: '/auto-updata', component: updata },
  { path: '/computed-watch', component: computedandwatch },
  { path: '/click', component: button },
  { path: '/provide', component: communication },
  { path: '/checkbox', component: checkbox },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
