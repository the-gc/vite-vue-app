

const routes = [
    {
        path: '/login', component: import('../views/Login.vue'),
    },
    {
        path: '/', component: import('../views/Home.vue'),
        meta: {
            requireAuth: true
        },
        children: [
            {path: 'overview', component: import('../views/Overview.vue')},
            {path: 'test', component: import('../views/Test.vue')},
        ]
    },
]

export default routes