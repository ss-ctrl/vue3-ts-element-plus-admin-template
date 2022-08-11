<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>👩🏻‍💼登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>其他方式登录</span>
        </template>
        <span>哈哈哈</span>
      </el-tab-pane>
    </el-tabs>
    <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
    <el-button type="primary" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginAccount from '@/views/login/cpns/login-account.vue';

const accountRef = ref<InstanceType<typeof LoginAccount>>();
const isKeepPassword = ref(true);
const handleLoginClick = () => {
  console.log('立即登录');
  console.log(isKeepPassword.value);
  accountRef.value?.loginAction(isKeepPassword.value);
};
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
}
</style>
