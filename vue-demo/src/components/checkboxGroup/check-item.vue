<template>
  <main>
    <label v-if="label" for="label">{{ label }}</label>
    <span>
      <input v-model="model" :value="value" @change="change" id="label" type="checkbox" />
    </span>
  </main>
</template>
<script>
import Emitter from '../../mixins/emitter.js'
 import { findComponentUpward } from '../../utils/assist';

export default {
  name: 'iCheckBox',
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number, Boolean],
      default: false,
    },
  },
  data() {
    return {
      currentValue: this.value,
      group: false,
      parent: null,
      model: ""
    }
  },
  methods: {
    change(event) {
      const checked = event.target.checked;
      this.currentValue = checked ? this.value : '';
      console.log(this.model);
      this.$emit('input', checked);
      this.$emit('on-change', checked);

      // this.dispatch('iGroupCheckBox', 'checkBox-on-change', this.currentValue)
    },
  },
  mounted() {
    this.parent = findComponentUpward(this, 'iGroupCheckBox')

    if (this.parent) {
      this.group = true;
    }
  },
}
</script>
