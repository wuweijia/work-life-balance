<template>
  <main ref="group">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'iGroupCheckBox',
  data() {
    return {
      value: []
    }
  },
  mounted() {
    this.$on('checkBox-on-change', function(e){
      if (e) {
        console.log(e);
      }
    })
  },
}
</script>
