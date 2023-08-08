import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const AutoImport = require('unplugin-auto-import/vite')
const Components = require('unplugin-vue-components/vite')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // loadEnv(mode, process.cwd())
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  process.env = {
    ...process.env,
    // 定义生产环境接口地址
    VITE_API_BASE_URL: mode === 'production' ? '/prod' : '/api'
    // 定义开发环境接口地址
  }
  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

    server: {
      port: 7878,
      proxy: {
        '^/api': {
          // target: 'https://stockapi.com.cn',
          target: 'http://api.waizaowang.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
