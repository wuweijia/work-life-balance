<template>
  <div>
    <h3>自定义事件</h3>
    <Button @on-click="handle">2323</Button>
    <h3>组件通信 provide inject</h3>
    <ProvideA></ProvideA>

    <h3>form 表单验证</h3>
    <section>
      <i-form :model="formValidate" :rules="ruleValidate">
        <i-form-item label="用户名不能为空" prop="name">
          <i-input v-model="formValidate.name"></i-input>
        </i-form-item>
      </i-form>
    </section>

    <h3>checkbox {{ checkbox }}</h3>
    <section>
      <iCheckBox label="点我" v-model="checkbox"></iCheckBox>
    </section>

    <h3>checkboxGroup {{ checkboxGroup }}</h3>
    <section>
      <iCheckBoxGroup v-model="checkboxGroup">
        <iCheckBox label="萝卜" value="萝卜"></iCheckBox>
      </iCheckBoxGroup>
    </section>

    <h3>vue.extend and $mount 实现全局组件toast</h3>
    <section>
      <button @click="toast">提示我</button>
    </section>

    <h3>tree控件（递归）</h3>
    <section>
      <tree :data="[]"></tree>
    </section>

    <h3>组件双向绑定 .sync 修饰符</h3>
    <section>
      <number v-model="num"></number>
    </section>

    <h3>事件修饰符</h3>
    <section>
      <click @click="click"></click>
    </section>

    <h3>createElement render</h3>
    <section>
      <anchored-heading :level='1'>123</anchored-heading>
    </section>
  </div>
</template>

<script>
import Button from '../components/button'
import ProvideA from '../components/ProvideAndInject/A'
import iForm from '../components/form/form.vue'
import iFormItem from '../components/form/form-item.vue'
import iInput from '../components/form/input.vue'
import iCheckBox from '../components/checkboxGroup/check-item'
import iCheckBoxGroup from '../components/checkboxGroup/index'
import tree from '../components/tree/tree'
import number from '../components/number'
import click from '../components/click'

export default {
  name: 'app',
  components: {
    Button,
    ProvideA,
    iForm,
    iFormItem,
    iInput,
    iCheckBox,
    iCheckBoxGroup,
    tree,
    number,
    click
  },
  data() {
    return {
      num: 1,
      formValidate: {
        name: '',
        mail: '',
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
        ],
      },
      checkbox: false,
      checkboxGroup: '',
      data: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                },
                {
                  title: 'leaf 1-1-2',
                },
              ],
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1',
                },
                {
                  title: 'leaf 1-2-1',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    handle(e) {
      console.log(e)
    },
    toast() {
      this.$Alert.info({
        content: '这是一条提示消息',
        duration: 1000,
      })
    },
    click() {
      console.log('这是一个事件回调');
    }
  },
}
</script>
