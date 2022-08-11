<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginPanel from './cpns/login-panel.vue';
export default defineComponent({
  components: { LoginPanel },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.login {
  height: 100%;
  width: 100%;
  background: url('@/assets/img/login-bg.svg');
}
</style>
