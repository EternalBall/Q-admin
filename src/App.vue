<script setup lang="ts">
import { onMounted } from "vue";
// const dimension = ref("default");

import useAuthStore from "@/stores/modules/auth";
const authStore = useAuthStore();

onMounted(() => {
    authStore.listRouters();
});
</script>

<template>
    <!-- <el-config-provider :size="dimension"> -->
    <router-view></router-view>
    <!-- </el-config-provider> -->
</template>

<style scoped lang="scss"></style>
