<script setup lang="ts">
import { computed } from "vue";
import settings from "@/settings.ts";
import { useRoute } from "vue-router";
import Logo from "@/layout/components/logo/index.vue";
import Main from "@/layout/components/main/index.vue";
import Header from "@/layout/components/Header/index.vue";
import useGlobalStore from "@/stores/modules/global";
import useAuthStore from "@/stores/modules/auth";
import AsideSubMenu from "@/layout/components/menu/AsideSubMenu.vue";
const globalStore = useGlobalStore();
const authStore = useAuthStore();
const route = useRoute();

const menuList = computed(() => authStore.showMenuList);
const menuAnimate = settings.menuAnimate;
// console.log("纵向布局左侧动态路由", menuList, menuAnimate);
</script>

<template>
    <el-container class="vertical-container">
        <el-aside
            class="vertical-aside transition-all"
            :style="{ width: !globalStore.isCollapse ? globalStore.menuWidth + 'px' : '70px' }"
        >
            <Logo :isCollapse="globalStore.isCollapse" :layout="globalStore.layout" />
            <el-menu
                :defaultActive="route.path"
                :collapse="globalStore.isCollapse"
                :collapse-transition="false"
                :uniqueOpened="globalStore.uniqueOpened"
                :class="menuAnimate"
            >
                <AsideSubMenu :menuList="menuList" />
            </el-menu>
        </el-aside>
        <el-container>
            <el-header class="vertical-header">
                <Header />
            </el-header>
            <el-main class="vertical-main">
                <Main />
            </el-main>
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
    // .vertical-main {
    // }
}
// 去除菜单右侧边框
.el-menu {
    border-right: none;
}
</style>
