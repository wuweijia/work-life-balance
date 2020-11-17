<style>
  .main {
    width: 720px;
    margin: auto;
    text-align: center;
  }
</style>
<template>
  <main class="main">
    <h3>checkbox {{ checkbox }}</h3>
    <section>
      <iCheckBox label="点我" v-model="checkbox"></iCheckBox>
    </section>

    <h3>checkboxGroup {{ checkboxGroup }}</h3>
    <section>
      <iCheckBoxGroup v-model="checkboxGroup">
        <iCheckBox label="萝卜" value="萝卜"></iCheckBox>
        <iCheckBox label="青菜" value="青菜"></iCheckBox>
      </iCheckBoxGroup>
    </section>
  </main>
</template>

<script>
import iCheckBox from '../components/checkboxGroup/check-item'
import iCheckBoxGroup from '../components/checkboxGroup/index'
export default {
  components: {
    iCheckBox,
    iCheckBoxGroup
  },
  data() {
    return {
      checkbox: false,
      checkboxGroup: [],
    }
  },
}
</script>
