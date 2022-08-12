<template>
  <div class="main">
    <el-container>
      <el-header>
        <nav-header />
      </el-header>
      <el-container>
        <el-aside width="210px">
          <nav-menu />
        </el-aside>
        <el-container class="page">
          <el-main class="page-content">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/nav-menu';
import NavHeader from '@/components/nav-header';
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.el-container {
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 65px);
  color: red;
}

.el-header {
  display: flex;
  color: #333;
  width: 100%;
  text-align: center;
  align-items: center;
  height: 65px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  // line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  // color: #333;
  color: #000000;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
