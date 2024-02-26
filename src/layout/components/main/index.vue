<script setup lang="ts">
import useGlobalStore from "@/stores/modules/global";
import useRefreshStore from "@/stores/modules/refresh";
// import useKeepAliveStore from "@/stores/modules/keepAlive";

import { storeToRefs } from "pinia";
import { ref, watch, provide, nextTick } from "vue";
const globalStore = useGlobalStore();
const refreshStore = useRefreshStore();
// const keepAliveStore = useKeepAliveStore();
const { transition } = storeToRefs(globalStore);
// const { keepAliveName } = storeToRefs(keepAliveStore);

// 路由刷新缓存
const flag = ref(true);
watch(
    () => refreshStore.refresh,
    () => {
        // 路由销毁
        flag.value = false;
        nextTick(() => {
            flag.value = true;
        });
    }
);
// 刷新当前路由页面缓存方法
const isRouterShow = ref(true);
// 注入全局方法
const refreshCurrentPage = (val: boolean) => (isRouterShow.value = val);
provide("refresh", refreshCurrentPage);
</script>

<template>
    <section>
        <router-view v-slot="{ Component, route }">
            <transition :name="transition" mode="out-in" appear>
                <keep-alive :max="16" v-if="flag">
                    <component :is="Component" :key="route.fullPath" v-if="isRouterShow" />
                </keep-alive>
            </transition>
        </router-view>
    </section>
</template>

<style lang="scss" scoped>
@import "@/styles/transition.scss";
</style>
