<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <span v-if="data.children && data.children.length && !data.expand"
          >+</span
        >
        <span v-if="data.children && data.children.length && data.expand"
          >-</span
        >
      </span>
      <span>{{ data.title }}</span>
      <TreeNode
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
        :show-checkbox="showCheckbox"
      ></TreeNode>
    </li>
  </ul>
</template>
<script>
import { findComponentUpward } from '../../utils/assist.js'
export default {
  name: 'TreeNode',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tree: findComponentUpward(this, 'Tree'),
    }
  },
  watch: {
    'data.children': {
      handler(data) {
        if (data) {
          const checkedAll = !data.some((item) => !item.checked)
          this.$set(this.data, 'checked', checkedAll)
        }
      },
      deep: true,
    },
  },
}
</script>
<style>
  .tree-ul, .tree-li{
      list-style: none;
      padding-left: 10px;
  }
  .tree-expand{
      cursor: pointer;
  }
</style>
