import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
// import Antd from 'ant-design-vue'
import App from './App.vue'
import routes from './app/routes'
import Block from './components/Block.vue'
import './assets/iconfont/iconfont.css'
import './style/reset.css'
import 'normalize.css'

// import 'ant-design-vue/dist/antd.css'
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    // 判断当前页面是否需要登录
    if (to.meta && to.meta.requireAuth) {
        if (!localStorage.getItem('auth')) {
            console.log('未登录, 跳转至登录页！');
            next({
                path: '/login'
            })
        }else {
            next();
        }
    }else {
        next();
    }
})
const app = createApp(App);
app.config.productionTip = false;

app.component('v-block', Block)

// app.use(Antd);
app.use(router);
app.mount('#app');
