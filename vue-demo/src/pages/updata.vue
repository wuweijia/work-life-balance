<template>
  <main>
    <div> {{ message }} </div>
    <button @click="change">改变数据</button>
  </main>
</template>

<script>
export default {
  props: {
    type: {
      default: 'test',
      type: String
    }
  },
  data() {
    return {
      message: '我是小明'
    }
  },
  methods: {
    change() {
      setTimeout(() => {
        console.log(this.message);
      }, 0);
      this.message = '现在我是小李'
    }
  },
}
</script>
