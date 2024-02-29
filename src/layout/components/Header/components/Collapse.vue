<script setup lang="ts">
import useGlobalStore from "@/stores/modules/global.ts";

const globalStore = useGlobalStore();
const changeCollApseIcon = () => {
    globalStore.isCollapse = globalStore.setCollapse(globalStore.isCollapse);
};
</script>

<template>
    <el-icon class="collapse-icon q-icon" :size="20" @click="changeCollApseIcon">
        <SvgIcon name="menu-left" width="20px" height="20px" v-if="!globalStore.isCollapse"></SvgIcon>
        <SvgIcon name="menu-right" width="20px" height="20px" v-if="globalStore.isCollapse"></SvgIcon>
    </el-icon>
</template>

<style lang="scss" scoped></style>
