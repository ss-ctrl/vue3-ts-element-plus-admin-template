<template>
  <div class="login-account">
    <el-form label-width="60px" ref="formRef" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import type { FormInstance } from 'element-plus';
import { defineComponent, ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { rules } from '../config/account-config';
import localCache from '@/utils/cache';

export default defineComponent({
  setup() {
    const store = useStore();
    const account = reactive({
      name: localCache.getCache('name'),
      password: localCache.getCache('password')
    });

    const formRef = ref<FormInstance>();

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('name', account.name);
            localCache.setCache('password', account.password);
          } else {
            localCache.deleteCache('password');
          }

          // 开始登录验证
          store.dispatch('login/accountLoginAction', { ...account });
        }
      });
    };
    return {
      rules,
      account,
      loginAction,
      formRef
    };
  }
});
</script>

<style scoped></style>
