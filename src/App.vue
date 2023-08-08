<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { Message, TopRight, List } from '@element-plus/icons-vue'

import { dailyMenuList, personShare, pathMap } from './constant'

const activeTab = pathMap[location.pathname]
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <span>2025-10-01 win 100w</span>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-scrollbar class="app-scroll">
            <el-menu
              class="scroll-menu el-menu-vertical-demo"
              :default-openeds="['1', '2']"
              active-text-color="#ffd04b"
              background-color="#545c64"
              :default-active="activeTab"
              text-color="#fff"
            >
              <router-link to="/">
                <el-menu-item index="3">
                  <template #title>
                    <el-icon><list /></el-icon>A股列表
                  </template>
                </el-menu-item>
              </router-link>

              <el-sub-menu index="1">
                <template #title>
                  <el-icon><TopRight /></el-icon>涨停板行情
                </template>
                <el-menu-item-group>
                  <template #title>查看涨跌停、强势股</template>
                  <router-link v-for="item in dailyMenuList" :to="item.name" :key="item.key">
                    <el-menu-item :index="item.index" :data-route="item.name">
                      {{ item.title }}
                    </el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-sub-menu>

              <el-sub-menu index="2">
                <template #title>
                  <el-icon><message /></el-icon>个股相关
                </template>
                <el-menu-item-group>
                  <template #title>信息、研报、榜单</template>
                  <router-link v-for="item in personShare" :key="item.key" :to="item.name">
                    <el-menu-item :index="item.index">
                      {{ item.title }}
                    </el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-sub-menu>
            </el-menu>
          </el-scrollbar>
        </el-aside>

        <el-container>
          <el-main>
            <RouterView />
          </el-main>
          <el-footer class="footer-txt">
            只要你认真做一件事情, 你始终要相信, 它会有所起色！ --20230618
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}

.common-layout {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
    width: 100%;
    overflow: scroll;
    .el-header {
      width: 100%;
      position: relative;
      background-color: var(--el-color-primary-light-7);
      color: var(--el-text-color-primary);
      color: #f56c6c;
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 60px;
        text-align: center;
        font-size: 24px;
        font-family: serif;
        font-style: italic;
      }
    }

    .el-aside {
      .app-scroll {
        // /deep/.el-scrollbar__view {
        //   height: 100%;
        // }
        :deep(.el-scrollbar__wrap) {
          overflow: inherit !important;
        }
        :deep(.el-scrollbar__view) {
          height: 100%;
          .scroll-menu {
            height: 100%;
            overflow: scroll;
            scroll-behavior: smooth;
          }
        }
      }
    }

    .footer-txt {
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>
