<template>
  <div class="main">
    <router-link class="link" to='click'>自定义组件</router-link>
    <router-link class="link" to='provide'>组件通信 provide inject</router-link>
    <router-link class="link" to='form'>表单验证</router-link>
    <router-link class="link" to='checkbox'>checkbox</router-link>
    <router-link class="link" to='/computed-watch'>computed-watch</router-link>
    <h3>实现全局组件toast</h3>
    <section>
      <button @click="toast">提示我</button>
    </section>

    <h3>组件双向绑定 .sync 修饰符</h3>
    <section>
      <number v-model="num"></number>
    </section>
  </div>
</template>

<script>

import number from '../components/number'

export default {
  name: 'app',
  components: {
    number,
  },
  data() {
    return {
      num: 1,
    }
  },
  methods: {
    toast() {
      this.$Alert.info({
        content: '这是一条提示消息',
        duration: 1000,
      })
    },
  },
}
</script>


<style>
  .main {
    width: 720px;
    margin: auto;
  }
  .link {
    display: block;
    margin-top: 15px;
    font-size: 20px;
  }
</style>
