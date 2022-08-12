<template>
  <div class="nav-menu">
    <!-- 菜单 -->
    <el-menu
      active-text-color="#ffd04b"
      background-color="#2a4668"
      default-active="2"
      text-color="#fff"
      class="el-menu-vertical"
      :unique-opened="Boolean('同时打开多个')"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

// vuex - typescript => pinia

const store = useStore();

const userMenus = computed(() => store.state.login.userMenus);

const router = useRouter();

const handleMenuItemClick = (item: any) => {
  router.push({
    path: item.url ?? '/not-found'
  });
};
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #2a4668;

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #2a4668 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #2a4668 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: 100%;
}
</style>
