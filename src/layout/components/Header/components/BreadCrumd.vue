<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import { computed } from "vue";
import useAuthStore from "@/stores/modules/auth";
import { useRoute, useRouter } from "vue-router";
import { HOME_URL } from "@/config";
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();

const breadcrumbList = computed(() => {
    let breadCrumbData = authStore.getBreadcrumbList[route.matched[route.matched.length - 1].path] ?? [];
    // 不需要面包屑可以删除
    if (breadCrumbData[0].path !== HOME_URL) {
        breadCrumbData = [{ path: HOME_URL, meta: { icon: "HomeFilled", title: "首页" } }, ...breadCrumbData];
    }
    return breadCrumbData;
});
const handleBreadcrumb = (val: any, index: number) => {
    if (index !== breadcrumbList.value.length - 1) router.push(val.path);
};
</script>

<template>
    <div class="bread-crumd-container mask-image">
        <el-breadcrumb :separator-icon="ArrowRight">
            <transition-group name="breadCrumd">
                <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
                    <div
                        class="el-breadcrumb__inner is-link"
                        :class="{ 'item-no-icon': !item.meta.icon }"
                        @click="handleBreadcrumb(item, index)"
                    >
                        <el-icon v-if="item.meta.icon" class="breadcrumb-icon">
                            <component :is="item.meta.icon"></component>
                        </el-icon>
                        <span class="breadcrumb-title">{{ item.meta.title }}</span>
                    </div>
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>

<style lang="scss" scoped>
.breadcrumb-enter-active {
    transition: all 0.2s;
}
.breadcrumb-enter-from,
.breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(10px);
}
.bread-crumd-container {
    margin-left: 20px;
    display: flex;
    align-items: center;
    user-select: none;
    overflow: hidden;
    .el-breadcrumb {
        white-space: nowrap;
        .el-breadcrumb__item {
            position: relative;
            display: inline-block;
            float: none;
            .breadcrumb-title {
                font-weight: 600;
            }
            .item-no-icon {
                transform: translateY(-3px);
            }
            .el-breadcrumb__inner {
                display: inline-flex;
                &.is-link {
                    color: var(--el-header-text-color);
                    &:hover {
                        color: var(--el-color-primary);
                    }
                }
                .breadcrumb-icon {
                    margin-top: 1px;
                    margin-right: 6px;
                    font-size: 16px;
                }
                .breadcrumb-title {
                    margin-top: 2px;
                }
            }
            &:last-child .el-breadcrumb__inner,
            &:last-child .el-breadcrumb__inner:hover {
                color: var(--el-header-text-color-regular);
            }
            :deep(.el-breadcrumb__separator) {
                transform: translateY(-1px);
            }
        }
    }
}

/* 右侧向左侧移动，面包屑模糊 */
.mask-image {
    padding-right: 50px;
    mask-image: linear-gradient(90deg, #000000 0%, #000000 calc(100% - 50px), transparent);
}
</style>
