import './assets/main.css'
import 'element-plus/es/components/message/style/css'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.use(ElementPlus, {
//   locale: zhCn
// })

app.mount('#app')
