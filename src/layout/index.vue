<script setup lang="ts">
import vertical from "@/layout/vertical/index.vue";
</script>

<template>
    <!-- 布局方式：Pc / Mobile -->
    <component :is="vertical"></component>
</template>

<style lang="scss" scoped></style>
