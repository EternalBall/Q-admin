<script setup lang="ts">
import useRefreshStore from "@/stores/modules/refresh";

const refreshStore = useRefreshStore();

const handlerRefresh = () => {
    refreshStore.refresh = !refreshStore.refresh;
    // 提示
    console.log("刷新缓存");
};
</script>

<template>
    <el-tooltip content="刷新缓存">
        <el-icon class="q-icon m-r-18px" size="20" @click="handlerRefresh">
            <Refresh />
        </el-icon>
    </el-tooltip>
</template>

<style lang="scss" scoped></style>
