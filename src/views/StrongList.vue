<script setup lang="ts">
import { ref } from 'vue'

import PageHead from './components/PageHead.vue'
import ChooseDate from './components/ChooseDate.vue'

import { getPoolQS } from '../service/stock/index'
import { formatAmount, jumpXueQiu } from '../utils/index'
import moment from 'moment'

const title = ref('强势股列表')

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
  reason: {
    key: 'cc',
    label: '入选理由'
  },
  newHigh: {
    key: 'nh',
    label: '是否新高'
  },
  zdp: {
    key: 'zdp',
    label: '涨跌幅'
  },
  hs: {
    key: 'hs',
    label: '换手率 '
  },
  amount: {
    key: 'amount',
    label: '成交额'
  }, // 成交额
  tshare: {
    key: 'tshare',
    label: '总市值'
  }, // 总市值
  hybk: {
    key: 'hybk',
    label: '所属行业'
  }
}
const amountList = ['tshare', 'amount']

const tableData: any = ref([])
const onSearch = async function () {
  const res = await getPoolQS({
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
  <main class="strong-content">
    <div class="strong-head">
      <ChooseDate :is-range="true" @postDate="postDate" />
      <el-button type="primary" class="strong-btn" @click="onSearch">查询</el-button>

      <span v-show="tableData.length" class="head-txt">
        共 <span style="color: red">{{ tableData.length }}</span> 只强势股。
        <span>谋定而后动, 动则果断、三分之一仓起。</span>
      </span>
    </div>

    <div class="strong-data">
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
            <span v-if="item === 'hs' || item === 'zdp'">
              {{ formatAmount(row[colsMap[item].key]) }}%
            </span>
            <span v-if="item === 'reason'">
              <el-popover
                placement="top-start"
                title="入选理由"
                :width="200"
                trigger="hover"
                content="1: 60日新高；2：近期多次涨停；3：60日新高且近期多次涨停"
              >
                <template #reference>
                  <el-button text class="m-2">{{ row[colsMap[item].key] }}</el-button>
                </template>
              </el-popover>
            </span>
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
.strong-head {
  display: flex;
  .strong-btn {
    margin-left: 20px;
  }

  .head-txt {
    margin-left: auto;
    margin-right: 30px;
  }
}
.strong-content {
  height: calc(100% - 24px);
}
.strong-data {
  margin-top: 30px;
  height: calc(100% - 44px);
}
</style>
