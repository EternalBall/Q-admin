<script setup lang="ts">
import Collapse from "@/layout/components/Header/components/Collapse.vue";
import BreadCrumd from "@/layout/components/Header/components/BreadCrumd.vue";
import Size from "@/layout/components/Header/components/Size.vue";
import Refresh from "@/layout/components/Header/components/Refresh.vue";
import Dark from "@/layout/components/Header/components/Dark.vue";
import { ref } from "vue";

let showTool = ref(true);
</script>

<template>
    <div class="header">
        <div class="header-left">
            <!-- 左侧菜单展开和折叠图标 -->
            <Collapse />
            <!-- 面包屑 -->
            <BreadCrumd v-if="showTool" />
        </div>
        <div class="header-right">
            <!-- 搜索菜单 -->
            <!-- 尺寸配置 -->
            <Size v-if="showTool" />
            <!-- 刷新 -->
            <Refresh />
            <!-- 暗黑模式 -->
            <Dark />
            <!-- 全屏 -->
            <!-- 主题设置 -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    height: $aside-header-height;
    .header-left {
        display: flex;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
    }
    .header-right {
        display: flex;
        align-items: center;
    }
}
</style>
