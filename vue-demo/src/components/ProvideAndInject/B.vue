<template>
  <div>我是组件B {{ message }}</div>
</template>

<script>

export default {
  name: 'componentB',
  inject: ['acount'],
  data() {
    return {
      message: ''
    }
  },
  created () {
    this.$on('on-message', this.showMessage);
  },
  methods: {
    showMessage (text) {
      this.message = text;
      window.alert(text);
    }
  },
}
</script>
