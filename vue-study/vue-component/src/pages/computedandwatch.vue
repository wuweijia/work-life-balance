<style>
  .main {
    width: 720px;
    margin: auto;
    text-align: center;
  }
</style>
<template>
  <main class="main">
    <div>{{ message }}</div>
    <div>{{ count.a }}</div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      count: {
        a: '1',
        b: '2'
      },
      message: 'test'
    }
  },
  watch: {
    count: {
      handler: function() {
        console.log('1');
      },
      // deep: true
    },
    'count.a': {
      handler: function() {
        console.log('count.a');
      },
      // deep: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.count.a = '2'
    }, 500);

  },
}
</script>
