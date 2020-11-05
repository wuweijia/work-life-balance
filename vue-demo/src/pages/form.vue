<style>
  .main {
    width: 720px;
    margin: auto;
    text-align: center;
  }
</style>
<template>
  <div class="main">
    <iForm :model="formValidate" :rules="ruleValidate">
      <iFormItem label="用户名" prop="name">
        <iInput v-model="formValidate.name" />
      </iFormItem>
      <iFormItem label="邮箱" prop="mail">
        <iInput v-model="formValidate.mail" />
      </iFormItem>
    </iForm>
  </div>
</template>
<script>
  import iForm from '../components/form/form.vue';
  import iFormItem from '../components/form/form-item.vue';
  import iInput from '../components/form/input';

  export default {
    name: "iform",
    components: {
      iForm,
      iFormItem,
      iInput
    },
    data () {
      return {
        formValidate: {
          name: '',
          mail: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
        }
      }
    },
  }
</script>
