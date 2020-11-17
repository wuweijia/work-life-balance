<template>
  <button :class="'i-button-size' + size" :disabled="disabled" @click="handleClick">button</button>
</template>
<script>
  // 判断参数是否是其中之一
  function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
      if (value === validList[i]) {
        return true;
      }
    }
    return false;
  }

  export default {
    props: {
      size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default']);
        },
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick() {
        this.$emit('on-click', '自定义事件');
      }
    },
  }
</script>

<style scoped>

</style>
