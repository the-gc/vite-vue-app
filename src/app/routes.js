

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
            {path: '/test', component: import('../views/test.vue')}
        ]
    },
]

export default routes