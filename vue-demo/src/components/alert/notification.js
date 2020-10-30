import Alert from './alert.vue'
import Vue from 'vue'

Alert.newInstance = properties => {
  const props = properties || {};
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Alert, {
        props,
      })
    },
  })
  const component = Instance.$mount()
  document.body.appendChild(component.$el)

  // 实例
  console.log(Instance);
  const alert = Instance.$children[0];
  return {
    add(noticeProps) {
      alert.add(noticeProps)
    },
    remove(name) {
      alert.remove(name)
    }
  }
}

export default Alert
