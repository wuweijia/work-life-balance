<style>
  .main {
    width: 720px;
    margin: auto;
  }
</style>
<template>
  <main class="main">
    <ProvideA></ProvideA>

  </main>
</template>

<script>
import ProvideA from '../components/ProvideAndInject/A'

export default {
  components: {
    ProvideA
  },
}
</script>
