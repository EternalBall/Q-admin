<script setup lang="ts">
import { computed, type Component } from "vue";
import { useScreen } from "@/hooks/screen";
import useGlobalStore from "@/stores/modules/global";
import vertical from "@/layout/vertical/index.vue";
import mobile from "@/layout/mobile/index.vue";

const globalStore = useGlobalStore();
const layout = computed(() => globalStore.layout);

// 布局
const layoutComponent: Record<string, Component> = {
    vertical: vertical,
    // cloumns: cloumns,
    // horizontal: horizontal,
};
// 监测移动端
const { isMobile } = useScreen();
</script>

<template>
    <!-- 布局方式：Pc / Mobile -->
    <component :is="layoutComponent[layout]" v-if="!isMobile"></component>
    <component :is="mobile" v-if="isMobile"></component>
</template>
