<template>
  <div>
    <button @click="increase(-1)">减 1</button>
    <span style="color: red;padding: 6px">{{ value }}</span>
    <button @click="increase(1)">加 1</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      num: this.value
    }
  },
  methods: {
    increase(val) {
      this.num += val
      this.$emit('input', this.num)
    }
  },
}
</script>
