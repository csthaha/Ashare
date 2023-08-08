<script setup lang="ts">
import { ref } from 'vue'

import PageHead from './components/PageHead.vue'
import ChooseDate from './components/ChooseDate.vue'

import { getUpTop } from '../service/stock/index'
import moment from 'moment'
import { formatAmount, jumpXueQiu } from '../utils/index'

const title = ref('涨停股池')

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
  }, // 名称
  // code: {
  //   key: 'code',
  //   label: ''
  // }, // 股票代码
  // m: {
  //   key: 'm',
  //   label: '0深/1上交所'
  // },
  fund: {
    key: 'fund',
    label: '封板资金(涨停价买入)'
  },
  lbCount: {
    key: 'lbc',
    label: '连板数'
  }, // 连板数
  hs: {
    key: 'hs',
    label: '换手率'
  },
  zbc: {
    key: 'zbc',
    label: '炸板次数'
  }, // 炸板次数
  zttj: {
    key: 'zttj',
    label: '涨停统计'
  }, // 涨停统计
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
  }, // 成交额
  firstBTime: {
    key: 'fbt',
    label: '首次封板时间'
  }, // 首次封板时间
  lastBTime: {
    key: 'lbt',
    label: '最后封板时间'
  } // 最后封板时间
}
const amountList = ['tshare', 'amount', 'fund']

const tableData: any = ref([])
const onSearch = async function () {
  const res = await getUpTop({
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

var seeCompanyInfo = function (type: Number, code: String) {
  jumpXueQiu(type, code)
}
</script>

<template>
  <PageHead :title="title" />
  <main class="daily-content">
    <div class="daily-head">
      <ChooseDate :is-range="true" @postDate="postDate" />
      <el-button type="primary" class="daily-btn" @click="onSearch">查询</el-button>

      <span v-show="tableData.length" class="head-txt">
        共 <span style="color: red">{{ tableData.length }}</span> 家涨停。
        <span v-show="tableData.length > 30">找相应板块大胆搞起。</span>
      </span>
    </div>
    <div class="daily-data">
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
              @click="seeCompanyInfo(row.m, row.code)"
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
.daily-head {
  display: flex;
  .daily-btn {
    margin-left: 20px;
  }
  .head-txt {
    margin-left: auto;
    margin-right: 30px;
  }
}
.daily-content {
  height: calc(100% - 24px);
}
.daily-data {
  margin-top: 30px;
  height: calc(100% - 44px);
}
</style>
