<script setup lang="ts">
import { ref } from 'vue'

import PageHead from './components/PageHead.vue'

const title = ref('A股列表')
</script>

<template>
  <PageHead :title="title" />

  <ul style="list-style-type: decimal">
    <li>
      知行合一：所想、所知道、所计划的，就去执行。
      <ul style="list-style-type: lower-alpha">
        <li>
          不要不舍得割肉！害怕割肉就是因为你没想到，没有预知这种情况。
          <ul style="list-style-type: lower-roman">
            <li>今天就是一个很好的例子。</li>
          </ul>
        </li>
        <li>
          不要太害怕收益被吃掉。即无脑止盈，死扛亏损。
          <ul style="list-style-type: lower-roman">
            <li>亏损了接着亏，收益为什么不接着收？</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      师出有名：即无论做什么操作都应该要有理由缘由。
      <ul style="list-style-type: lower-alpha">
        <li>不要见大跌就加仓，第二天继续低开呢？又该怎么操作。</li>
        <li>不要见涨就止盈。要考虑的是未来空间是否还能有 15 个点涨幅。</li>
        <li>
          视‘知’而择。
          <ul style="list-style-type: lower-roman">
            <li>或可追加</li>
            <li>或可减仓</li>
            <li>或可清仓</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      合理配仓：何为合理？即七分知，三分运。为此享利，亦承其险。
      <ul style="list-style-type: lower-alpha">
        <li>最近就经常仓位配的有很大问题。仓位低反而赚，仓位重却亏损。</li>
        <li>建议 两只票。如此降低仓位配置的容错率</li>
        <li>
          一成建，两成加，两成T（2之基础）。
          <ul>
            持有、割肉、补仓之择
            <ul style="list-style-type: lower-roman">
              <li>连跌四天（第四天仍是低开），11:30 割。</li>
              <li>中规中矩继续持有</li>
              <li>跌超3点且观察均线 进行补仓。</li>
            </ul>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      情绪之上：不受盘中、盘后所影响。不因今日之浮亏而交加悲喜。
      <ul style="list-style-type: lower-alpha">
        <li>不因盘中的大跌而无脑加仓。</li>
        <li>不因盘中的封板而无动于衷。</li>
        <li>不因盘后而影响第二天的操作。</li>
      </ul>
    </li>
  </ul>
</template>

<style scoped lang="less"></style>
