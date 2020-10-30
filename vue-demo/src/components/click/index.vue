<template>
  <div>
    <button @click="click">click</button>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      console.log('组件内事件');
    }
  },
}
</script>
