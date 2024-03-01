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
// .bread-crumd-container {
// }

/* 右侧向左侧移动，面包屑模糊 */
.mask-image {
    padding-right: 50px;
    mask-image: linear-gradient(90deg, #000000 0%, #000000 calc(100% - 50px), transparent);
}
</style>
