<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
    <div style="color:red" v-if="validateMessage">{{ validateMessage }}</div>
  </div>
</template>
<script>
import Emitter from '../../mixins/emitter'
// import AsyncValidator from 'async-validator';

export default {
  name: 'iFormItem',
  mixins: [Emitter],
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      validateState: '', // 校验状态
      validateMessage: '', // 校验不通过时的提示信息
    }
  },
  computed: {
    // 从 Form 的 model 中动态得到当前表单组件的数据
    fieldValue() {
      return this.form.model[this.prop]
    },
  },
  methods: {
    setRules() {
      this.$on('on-form-blur', this.onFieldBlur);
      this.$on('on-form-change', this.onFieldChange);
    },
    getRules() {
      return this.form.rules ? this.form.rules[this.prop] : []
    },
    onFieldBlur() {
      const rules = this.getRules();
      console.log(rules, e);
    },
    onFieldChange(val) {
      const rules = this.getRules();
      console.log(rules[0].required, val);
      if (rules[0].required && !val) {
        this.validateMessage = rules[0].message
      }
    }
  },
  // 组件渲染时，将实例缓存在 Form 中
  mounted() {
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this)
      // 设置初始值，以便在重置时恢复默认值
      this.initialValue = this.fieldValue
      this.setRules()
    }
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch('iForm', 'on-form-item-remove', this)
  },
}
</script>
