<script setup lang="ts">
import { ref } from 'vue'

import PageHead from './components/PageHead.vue'
import ChooseDate from './components/ChooseDate.vue'

import moment from 'moment'
import { getDownPool } from '../service/stock/index'
import { formatAmount, jumpXueQiu } from '../utils/index'

const title = ref('跌停股池')

let dateRange: any = ref([
  moment(new Date()).format('YYYY-MM-DD'),
  moment(new Date()).format('YYYY-MM-DD')
])
var postDate = function (date: Date) {
  dateRange.value = date
}

const colsMap: any = {
  name: {
    key: 'n',
    label: '名称'
  },
  fba: {
    key: 'fba',
    label: '跌停价成交额'
  },
  days: {
    key: 'days',
    label: '连续跌停'
  },
  oc: {
    key: 'oc',
    label: '翘板数'
  },
  hs: {
    key: 'hs',
    label: '换手率'
  },
  industry: {
    key: 'hybk',
    label: '所属行业'
  },
  tshare: {
    key: 'tshare',
    label: '总市值'
  }, // 总市值
  amount: {
    key: 'amount',
    label: '成交额'
  } // 成交额
}

const amountList = ['fba', 'tshare', 'amount']

const tableData: any = ref([])
const onSearch = async function () {
  const res = await getDownPool({
    startDate: dateRange.value[0],
    endDate: dateRange.value[1]
  })
  const { data } = res
  tableData.value = data
}
onSearch()
const handleClick = () => {
  console.log('click')
}
</script>

<template>
  <PageHead :title="title" />
  <main class="down-content">
    <div class="down-head">
      <ChooseDate :is-range="true" @postDate="postDate" />
      <el-button type="primary" class="down-btn" @click="onSearch">查询</el-button>

      <span v-show="tableData.length" class="head-txt">
        共 <span style="color: red">{{ tableData.length }}</span> 家跌停。
        <span>是否有机会低吸呢 ？</span>
      </span>
    </div>

    <div class="down-data">
      <el-table :data="tableData" style="width: 100%" stripe height="100%">
        <el-table-column
          v-for="item in Object.keys(colsMap)"
          :sortable="item === 'lbCount'"
          :fixed="item === 'name'"
          :key="colsMap[item].key"
          :prop="colsMap[item].key"
          :label="colsMap[item].label"
          :width="amountList.includes(item) ? 200 : 120"
        >
          <template #default="{ row }">
            <el-button
              v-if="item === 'name'"
              link
              @click="jumpXueQiu(row.m, row.code)"
              type="primary"
              size="small"
            >
              {{ row[colsMap[item].key] }}
            </el-button>
            <span v-if="amountList.includes(item)">
              {{ formatAmount(row[colsMap[item].key]) }}
            </span>
            <span v-if="item === 'hs'"> {{ row[colsMap[item].key] }}% </span>
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </main>
</template>

<style scoped lang="less">
.down-head {
  display: flex;
  .down-btn {
    margin-left: 20px;
  }
  .head-txt {
    margin-left: auto;
    margin-right: 30px;
  }
}
.down-content {
  height: calc(100% - 24px);
}
.down-data {
  margin-top: 30px;
  height: calc(100% - 44px);
}
</style>
