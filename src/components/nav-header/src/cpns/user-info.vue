<template>
  <div class="user-info">
    <el-dropdown :hide-timeout="800">
      <span class="el-dropdown-link">
        <el-avatar class="avatar" :size="55" :src="imgSrc" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="User">用户信息</el-dropdown-item>
          <el-dropdown-item :icon="Edit">修改资料</el-dropdown-item>
          <el-dropdown-item :icon="SwitchButton" divided
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { SwitchButton, User, Edit } from '@element-plus/icons-vue';
import { computed } from 'vue';
const imgSrc = computed(
  () => 'https://pic4.zhimg.com/v2-cd0522d412e7ae785b1a85c583238623_r.jpg'
);
</script>

<style scoped lang="less">
.avatar {
  border: 1px #eeeeee solid;
  margin-right: 10px;
  cursor: pointer;
}
</style>
