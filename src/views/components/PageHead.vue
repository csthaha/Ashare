<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <span class="header-title">{{ title }}</span>
</template>

<style scoped lang="less">
.header-title {
  display: inline-block;
  color: var(--el-menu-active-color);
  width: 100%;
  height: 24px;
  text-align: center;
}
</style>
