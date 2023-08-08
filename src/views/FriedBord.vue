<script setup lang="ts">
import { ref } from 'vue'

import PageHead from './components/PageHead.vue'
import ChooseDate from './components/ChooseDate.vue'

import { getPoolZB } from '../service/stock/index'
import { formatAmount, jumpXueQiu } from '../utils/index'
import moment from 'moment'

const title = ref('炸板股池列表')

let dateRange: any = ref([
  moment(new Date()).format('YYYY-MM-DD'),
  moment(new Date()).format('YYYY-MM-DD')
])
var postDate = function (data: Date) {
  dateRange.value = data
}

const colsMap: any = {
  name: {
    key: 'n',
    label: '名称'
  },
  zdp: {
    key: 'zdp',
    label: '涨跌幅'
  },
  zbc: {
    key: 'zbc',
    label: '炸板次数'
  },
  fbt: {
    key: 'fbt',
    label: '首次触板时间'
  },
  zttj: {
    key: 'zttj',
    label: '涨停统计'
  },
  ztp: {
    key: 'ztp',
    label: '涨停价'
  },
  hybk: {
    key: 'hybk',
    label: '所属行业'
  },
  tshare: {
    key: 'tshare',
    label: '总市值'
  },
  ltsz: {
    key: 'ltsz',
    label: '流通市值'
  }
}
const amountList = ['tshare', 'amount', 'fund', 'ltsz']

const tableData: any = ref([])
const onSearch = async function () {
  const res = await getPoolZB({
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
  <span class="fb-desc"> 包含当日触及过涨停板且当前未封板的A股股票 </span>

  <main class="fb-content">
    <div class="fb-head">
      <ChooseDate :is-range="true" @postDate="postDate" />
      <el-button type="primary" class="fb-btn" @click="onSearch">查询</el-button>

      <span v-show="tableData.length" class="head-txt">
        共 <span style="color: red">{{ tableData.length }}</span> 只触及涨停, 但是炸板了。
        <span>寻找切入点，看是否有机会破新高</span>
      </span>
    </div>
    <div class="fb-data">
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
.fb-desc {
  display: inline-block;
  width: 100%;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  text-align: center;
  color: gray;
  margin-bottom: 12px;
}

.fb-head {
  display: flex;
  .fb-btn {
    margin-left: 20px;
  }
  .head-txt {
    margin-left: auto;
    margin-right: 30px;
  }
}
.fb-content {
  height: calc(100% - 60px);
}
.fb-data {
  margin-top: 30px;
  height: calc(100% - 44px);
}
</style>
