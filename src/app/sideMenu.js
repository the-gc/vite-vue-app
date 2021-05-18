
export default [
    {
        key: '1', title: '总览', path: '/overview', 
    },
    {
        key: '2', title: '用户管理', path: '/user', 
        children: [
            {key: '3', title: '用户列表', path: '/user/list'}
        ]
    },
]