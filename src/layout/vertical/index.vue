<script setup lang="ts">
import useGlobalStore from "@/stores/modules/global";
const globalStore = useGlobalStore();
</script>

<template>
    <el-container class="vertical-container">
        <el-aside
            class="vertical-aside transition-all"
            :style="{ width: !globalStore.isCollapse ? globalStore.menuWidth + 'px' : '70px' }"
        >
            <div>logo</div>
            <div>menu</div>
        </el-aside>
        <el-container>
            <el-header class="vertical-header"> 头部 </el-header>
            <el-main class="vertical-main"> main </el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.vertical-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .vertical-aside {
        z-index: $layout-aside-z-index;
        padding-right: $aside-menu-padding-right;
        padding-left: $aside-menu-padding-left;
        background-color: var(--el-menu-bg-color);
        border-right: none;
        box-shadow: $aside-menu-box-shadow;
    }
    .vertical-header {
        height: $aside-header-height;
        background-color: var(--el-header-bg-color);
    }
    .vertical-main {
    }
}
// 去除菜单右侧边框
.el-menu {
    border-right: none;
}
</style>
