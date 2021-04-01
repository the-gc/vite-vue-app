import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
// import Antd from 'ant-design-vue'
import App from './App.vue'
import routes from './app/routes'

import './style/reset.css'
import 'normalize.css'

// import 'ant-design-vue/dist/antd.css'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
const app = createApp(App);
app.config.productionTip = false;

// app.use(Antd);
app.use(router);
app.mount('#app');
