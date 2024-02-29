<script setup lang="ts">
import { onMounted } from "vue";
import { useTheme } from "@/utils/theme";
const { initThemeConfig } = useTheme();

import useAuthStore from "@/stores/modules/auth";
import router from "./router";
const authStore = useAuthStore();

onMounted(async () => {
    await authStore.listRouters();

    // 添加动态路由[扁平化一级路由数据]
    authStore.menuList.forEach((item: any) => {
        if (item.isFull == "0") {
            // 如果是全屏的话，直接为整个页面
            router.addRoute(item);
        } else {
            router.addRoute("layout", item);
        }
    });
});
initThemeConfig();
</script>

<template>
    <router-view></router-view>
</template>

<style scoped lang="scss"></style>
