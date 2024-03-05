<script setup lang="ts">
import useGlobalStore from "@/stores/modules/global";
import { useTheme } from "@/utils/theme";
const globalStore = useGlobalStore();
const { switchDark } = useTheme();

defineProps({
    size: {
        type: Number,
        default: 20,
    },
});

const hanlerSwitchDark = async (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    // 画圈
    let endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    // @ts-ignore
    if (document.startViewTransition == undefined) {
        /** 明亮和暗黑模式核心逻辑 */
        // 定义图标切换变量(true-月亮，false-太阳)
        globalStore.setGlobalState("isDark", !globalStore.isDark);
        switchDark();
        /** 明亮和暗黑模式核心逻辑 */
    } else {
        // @ts-ignore
        const transition = document.startViewTransition(() => {
            /** 明亮和暗黑模式核心逻辑 */
            // 定义图标切换变量(true-月亮，false-太阳)
            globalStore.setGlobalState("isDark", !globalStore.isDark);
            switchDark();
            /** 明亮和暗黑模式核心逻辑 */
        });
        await transition.ready;
        const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
        document.documentElement.animate(
            {
                clipPath: globalStore.isDark ? clipPath : [...clipPath].reverse(),
            },
            {
                duration: 300,
                easing: "ease-in",
                pseudoElement: globalStore.isDark ? "::view-transition-new(root)" : "::view-transition-old(root)",
            }
        );
    }
};
</script>

<template>
    <el-tooltip content="明亮模式" v-if="!globalStore.isDark">
        <el-icon class="q-icon m-r-18px" :size="size" @click="hanlerSwitchDark"><Sunny /></el-icon>
    </el-tooltip>
    <el-tooltip content="暗黑模式" v-if="globalStore.isDark">
        <el-icon class="q-icon m-r-18px" :size="size" @click="hanlerSwitchDark"><Moon /></el-icon>
    </el-tooltip>
</template>

<style lang="scss">
::view-transition-old(root),
::view-transition-new(root) {
    mix-blend-mode: normal;
    animation: none;
}
::view-transition-old(root) {
    z-index: 9999;
}
::view-transition-new(root) {
    z-index: 1;
}
.dark::view-transition-old(root) {
    z-index: 1;
}
.dark::view-transition-new(root) {
    z-index: 9999;
}
</style>
