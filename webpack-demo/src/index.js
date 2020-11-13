import Vue from 'vue'
import app from './app.vue'

new Vue({
  render(h) {
    return h(app)
  },
}).$mount("#app")

