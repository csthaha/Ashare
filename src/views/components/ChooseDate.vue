<script setup lang="ts">
import { ref } from 'vue'

import moment from 'moment'

const props = defineProps({
  isRange: Boolean
})

const emit = defineEmits(['postDate'])

const shortcuts = [
  {
    text: '今天',
    value: new Date()
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    }
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    }
  }
]

const shortcutsRange = [
  {
    text: '上周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: '上月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '3月前',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]

const date = ref(new Date())

const dateRange: any = ref([new Date(), new Date()])

const onChange = function () {
  const startDate = moment(dateRange.value[0]).format('YYYY-MM-DD')
  const endDate = moment(dateRange.value[1]).format('YYYY-MM-DD')

  const curDate = moment(date.value).format('YYYY-MM-DD')
  const d = props.isRange ? [startDate, endDate] : curDate
  emit('postDate', d)
}
</script>

<template>
  <div>
    <span class="demonstration">请选择查看日期：</span>

    <el-date-picker
      v-if="props.isRange"
      v-model="dateRange"
      type="daterange"
      unlink-panels
      range-separator="To"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :shortcuts="shortcutsRange"
      @change="onChange"
    />

    <el-date-picker
      v-else
      v-model="date"
      type="date"
      placeholder="请选择"
      :shortcuts="shortcuts"
      :default-value="new Date()"
      @change="onChange"
    />
  </div>
</template>

<style scoped lang="less"></style>
