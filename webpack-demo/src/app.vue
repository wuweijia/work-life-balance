<template>
  <div>{{ txt }}</div>
</template>

<script>
import isEmpty from 'lodash/isEmpty'

export default {
  data() {
    return {
      txt: 'adc'
    }
  },
  mounted() {
    const testlodash = {
      a: '1'
    }
    const res  = isEmpty(testlodash)
    if (!res) {
      alert('333')
    }
  },
}
</script>
