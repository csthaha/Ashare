<script setup lang="ts">
import { ref } from 'vue'

import PageHead from './components/PageHead.vue'
import ChooseDate from './components/ChooseDate.vue'

import moment from 'moment'

import { getLonghbDetail } from '../service/stock/index'

const title = ref('个股龙虎榜')

let dateRange: any = ref([
  moment(new Date()).format('YYYY-MM-DD'),
  moment(new Date()).format('YYYY-MM-DD')
])
var postDate = function (date: Date) {
  dateRange.value = date
}
const inputVal: any = ref('')

const tableData: any = ref([])
const onSearch = async function () {
  const res = await getLonghbDetail({
    startDate: dateRange.value[0],
    endDate: dateRange.value[1],
    code: inputVal.value
  })
  const { data } = res
  tableData.value = data
}
</script>

<template>
  <PageHead :title="title" />
  <span class="list-desc">
    龙虎榜数据只是为了让你了解一些游资以及机构对此票的动向。 不能依据此来进行做多或空！
  </span>
  <main class="list-content">
    <div class="list-head">
      <ChooseDate :is-range="true" @postDate="postDate" />
      <div class="head-input">
        <span>请输入股票代码：</span>
        <el-input v-model="inputVal" class="input-txt" size="default" placeholder="请输入代码" />
      </div>
      <el-button type="primary" class="list-btn" @click="onSearch">查询</el-button>

      <!-- <span v-show="tableData.length" class="head-txt">
        共 <span style="color: red">{{ tableData.length }}</span> 家涨停。
        <span v-show="tableData.length > 30">找相应板块大胆搞起。</span>
      </span> -->
    </div>
  </main>
</template>

<style scoped lang="less">
.list-desc {
  display: inline-block;
  width: 100%;
  height: 24px;
  line-height: 24px;
  text-align: right;
  font-size: 12px;
  color: cadetblue;
  margin-bottom: 12px;
}
.list-content {
  height: calc(100% - 68px);
}

.list-head {
  display: flex;
  // flex-direction: column;

  .head-input {
    width: 520px;
    display: flex;
    margin-left: 24px;
    align-items: center;
    .input-txt {
      width: 220px;
    }
  }
  .list-btn {
    width: 84px;
  }
}
</style>
