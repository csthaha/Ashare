<script setup lang="ts">
import { ref } from 'vue'

import PageHead from './components/PageHead.vue'

const title = ref('次新股池列表')
</script>

<template>
  <PageHead :title="title" />
</template>

<style scoped lang="less"></style>
