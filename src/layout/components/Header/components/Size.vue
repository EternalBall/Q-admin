<script setup lang="ts">
import useGlobalStore from "@/stores/modules/global";
import { computed } from "vue";

const globalStore = useGlobalStore();
let currentSize = computed(() => globalStore.dimension);

let dropdownList = [
    { label: "默认", value: "default" },
    { label: "大型", value: "large" },
    { label: "小型", value: "small" },
];

let onCommand = (val: string) => {
    if (currentSize.value === val) return;
    globalStore.setDimension(val);
    window.location.reload();
    // 提示
    console.log("尺寸切换成功");
};
</script>

<template>
    <el-tooltip content="尺寸配置" placement="left">
        <el-dropdown @command="onCommand">
            <el-icon class="q-icon m-r-18px" :size="22"><ElementPlus /></el-icon>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item
                        v-for="item in dropdownList"
                        :disabled="currentSize == item.value"
                        :key="item.value"
                        :command="item.value"
                    >
                        {{ item.label }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-tooltip>
</template>

<style lang="scss" scoped></style>
