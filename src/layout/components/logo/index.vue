<script setup lang="ts">
import { ref, watch } from "vue";
import settings from "@/settings.ts";
import useGlobalStore from "@/stores/modules/global";
const globalStore = useGlobalStore();

const title = ref(settings.logoTitle);
const titleSize = ref(`${settings.loginTitleSize}px`);
const logoUrl = ref(settings.logoUrl);
const logoSize = ref(settings.logoSize);
const titleAnimation = ref(settings.logoTitleAnimate);
const hide = ref(settings.logoHidden);
let logoWidth = ref("");

const props = defineProps({
    isCollapse: {
        require: false,
        type: Boolean,
    },
    layout: {
        require: "vertical",
        type: String,
    },
});

watch(
    () => globalStore.layout,
    () => {
        if (globalStore.layout === "classic" || globalStore.layout === "horizontal") {
            logoWidth.value = "220px";
        } else {
            logoWidth.value = "100%";
        }
    },
    {
        deep: true,
        immediate: true,
    }
);
</script>

<template>
    <div class="logo" v-show="hide">
        <!-- 横向 -->
        <img
            :src="logoUrl"
            class="m-l-15px m-r-12px LogoImg rounded-full select-none"
            alt="avatar"
            v-if="props.layout === 'vertical' || props.layout === 'mobile'"
        />
        <!-- 经典 -->
        <img
            :src="logoUrl"
            class="m-l--3px m-r-12px LogoImg rounded-full select-none"
            alt="avatar"
            v-if="props.layout === 'classic'"
        />
        <!-- 列 -->
        <img
            :src="logoUrl"
            class="m-l-10px m-r-12px LogoImg rounded-full select-none"
            alt="avatar"
            v-if="props.layout === 'columns'"
        />
        <!-- 水平 -->
        <img
            :src="logoUrl"
            class="m-l--6px m-r-12px LogoImg rounded-full select-none"
            alt="avatar"
            v-if="props.layout === 'horizontal'"
        />
        <span
            v-text="title"
            :class="titleAnimation"
            class="title font-bold max-w-140 truncate"
            v-show="!props.isCollapse"
        ></span>
    </div>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    width: v-bind(logoWidth);
    height: $aside-header-height;
    line-height: $aside-header-height;
    text-align: center;
    // cursor: pointer;
}
.LogoImg {
    width: v-bind(logoSize);
    height: v-bind(logoSize);
}
.title {
    font-size: v-bind(titleSize);
}
</style>
