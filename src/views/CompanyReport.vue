<script setup lang="ts">
import { ref } from 'vue'

import PageHead from './components/PageHead.vue'

const title = ref('公司个股研报')
</script>

<template>
  <PageHead :title="title" />
</template>

<style scoped lang="less"></style>
