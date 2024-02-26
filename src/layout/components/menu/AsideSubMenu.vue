<script setup lang="ts">
import { SVG_PREFIX } from "@/config/index.ts";
import AsideSubMenu from "@/layout/components/menu/AsideSubMenu.vue";
import { useRouter } from "vue-router";
const { menuList } = defineProps<{ menuList: Array<any> }>();
import useGlobalStore from "@/stores/modules/global";
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";
const router = useRouter();
const globalStore = useGlobalStore();
const { menuBLSColor } = storeToRefs(globalStore);

const handlerMenuIsLink = (item: any) => {
    if (item.meta.isLink) return window.open(item.meta.isLink, "_blank");
    router.push(item.path);
};

watch(
    () => globalStore.isDark,
    () => {
        menuBLSColor.value = globalStore.setMenuBLSColor();
    }
);
onMounted(() => {
    menuBLSColor.value = globalStore.setMenuBLSColor();
});
</script>

<template>
    <template v-for="item in menuList" :key="item.path">
        <el-sub-menu :index="item.path" v-if="item.children?.length" v-show="item.meta.isHide == '1'">
            <template #title>
                <el-icon v-if="item.meta.icon && item.meta.icon.indexOf(SVG_PREFIX) == -1">
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <el-icon v-if="item.meta.icon && item.meta.icon.indexOf(SVG_PREFIX) == 0">
                    <component :name="item.meta.icon" is="SvgIcon"></component>
                </el-icon>
                <span v-text="item.meta.title"></span>
            </template>
            <AsideSubMenu :menuList="item.children" />
        </el-sub-menu>

        <!-- 功能节点 -->
        <el-menu-item :index="item.path" v-else v-show="item.meta.isHide == '1'" @click="handlerMenuIsLink(item)">
            <el-icon v-if="item.meta.icon && item.meta.icon.indexOf(SVG_PREFIX) == -1">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <el-icon v-if="item.meta.icon && item.meta.icon.indexOf(SVG_PREFIX) == 0">
                <component :name="item.meta.icon" is="SvgIcon"></component>
            </el-icon>
            <template #title>
                <span v-text="item.meta.title"></span>
            </template>
        </el-menu-item>
    </template>
</template>

<style lang="scss" scoped>
.el-menu-item {
    height: $aside-menu-height !important;
    margin-bottom: $aside-menu-margin-bottom;
    font-weight: $aside-menu-font-weight;
    color: #000000;

    /* 设置用户禁止选中 */
    user-select: none;
    border-left: $aside-menu-border-left solid v-bind(menuBLSColor);
    border-radius: $aside-menu-border-left;

    @apply dark:c-#E5E3FA;
    i {
        transform: translate($aside-menu-font-icon-translate); // 图标偏移
    }
    span {
        transform: translate($aside-menu-font-icon-translate); // 文字偏移
    }

    // 设置鼠标悬停时el-menu-item的样式
    &:hover {
        color: var(--el-color-primary);
        background: var(--el-color-primary-light-8);
        border-left: $aside-menu-border-left solid var(--el-color-primary);

        // & 含义 .el-menu-item
        border-radius: $aside-menu-border-left;

        // 实现鼠标悬停时icon变色
        i {
            color: var(--el-color-primary);
        }
    }

    // 设置选中el-menu-item时的样式
    &.is-active {
        color: var(--el-color-primary);
        background: var(--el-color-primary-light-8);
        border-left: $aside-menu-border-left solid var(--el-color-primary);
    }
}

// 子节点
:deep(.el-sub-menu__title) {
    height: $aside-menu-height;
    padding-right: 0; // 去除collapse缩小多余的边框
    margin-bottom: $aside-menu-margin-bottom;
    font-weight: $aside-menu-font-weight;
    color: #000000;

    /* 设置用户禁止选中 */
    user-select: none;
    border-left: $aside-menu-border-left solid v-bind(menuBLSColor);
    border-radius: $aside-menu-border-left;

    @apply dark:c-#E5E3FA;
    i {
        transform: translate($aside-menu-font-icon-translate); // 图标偏移
    }
    span {
        transform: translate($aside-menu-font-icon-translate); // 文字偏移
    }
    &:hover {
        color: var(--el-color-primary);
        background: var(--el-color-primary-light-8);
        border-left: $aside-menu-border-left solid var(--el-color-primary);
    }
    &:active {
        color: var(--el-color-primary);
        background: var(--el-color-primary-light-8);
        border-left: $aside-menu-border-left solid var(--el-color-primary);
    }
}
/* 子级菜单字体高亮，父级菜单也高亮 */
.el-sub-menu.is-active > .el-sub-menu__title {
    color: var(--el-color-primary) !important;
}

/* icon图标也跟着变 */
.el-sub-menu.is-active > .el-sub-menu__title i {
    color: var(--el-color-primary) !important;
}
</style>
