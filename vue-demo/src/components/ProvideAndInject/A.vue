<template>
  <div>
    <button @click="handleClick">组件A触发事件</button>
    <componmentB></componmentB>
  </div>

</template>

<script>
import componmentB from './B'
import Emitter from '../../mixins/emitter';

export default {
  name: 'componentA',
  mixins: [ Emitter ],
  components: {
    componmentB,
  },
  data() {
    return {
      acount: 0
    }
  },
  provide() {
    return { acount: this.add}
  },
  methods: {
    add() {
      return this.acount += 1
    },
    handleClick () {
      this.broadcast('componentB', 'on-message', '我是组件A广播给组件B的数据');
    }
  },
}
</script>
