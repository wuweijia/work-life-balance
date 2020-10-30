import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Index from './pages/index'
import ProvideInject from './pages/provide-inject'
import form from './pages/form'
import updata from './pages/updata'
import App from './App.vue'
import Alert from './components/alert/alert'
import './components/createElement/index';

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$Alert = Alert
// router
const routes = [
  { path: '/', component: Index },
  { path: '/provide-inject', component: ProvideInject },
  { path: '/form', component: form },
  { path: '/auto-updata', component: updata },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  data: {
    foo: 1
  },
  computed: {
    bar: function () {
      return this.foo + 1
    }
  },
  methods: {
    baz: function () { /* ... */ }
  },
  render: h => h(App),
}).$mount('#app')
