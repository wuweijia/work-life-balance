<style>
  .main {
    width: 720px;
    margin: auto;
    text-align: center;
  }
</style>
<template>
  <main class="main">
    <section>
      <h3>自定义事件</h3>
      <IconIc29Search :size='32'>12321</IconIc29Search>
      <Button @on-click="handle"></Button>
    </section>
    <section>
      <h3>输出</h3>
      <div> {{ log }}</div>
    </section>
  </main>
</template>

<script>
import Button from '../components/button'
import { IconIc29Search } from 'figmaicontest'

export default {
  components: {
    Button,
    IconIc29Search
  },
  data() {
    return {
      log: ''
    }
  },
  methods: {
    handle(e) {
      console.log(e);
      this.log = JSON.stringify(e)
    },
  },
}
</script>
