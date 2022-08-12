<template>
  <div class="nav-header">
    <span>山东移动物联网header</span>
    <user-Info class="user-Info" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserInfo from './cpns/user-info.vue';

export default defineComponent({
  components: {
    UserInfo
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
}
</style>
