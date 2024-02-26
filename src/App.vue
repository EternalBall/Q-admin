<script setup lang="ts">
import { onMounted } from "vue";
// const dimension = ref("default");

import useAuthStore from "@/stores/modules/auth";
import router from "./router";
const authStore = useAuthStore();

onMounted(async () => {
    await authStore.listRouters();

    // 3、添加动态路由[扁平化一级路由数据]
    authStore.menuList.forEach((item: any) => {
        // if (item.component && typeof item.component == "string") {
        //   // 扁平化路由也需要构造component路由函数
        //   item.component = modules["/src/views/" + item.component + ".vue"];
        // }
        if (item.isFull == "0") {
            // 如果是全屏的话，直接为整个页面
            router.addRoute(item);
        } else {
            router.addRoute("layout", item);
        }
    });
});
</script>

<template>
    <!-- <el-config-provider :size="dimension"> -->
    <router-view></router-view>
    <!-- </el-config-provider> -->
</template>

<style scoped lang="scss"></style>
