const routes = [
    {
        path: '/resources',
        name: 'resources',
        components: {
            toolbarRouter: () => import(/* webpackChunkName: "resources" */ './views/Index')
        },
        meta: {
            title: 'Resources',
            public: false
        },
        children: [
            {
                path:'/overview',
                name: 'overview',
                components: {
                    menuRouter: () => import('./views/resource/Overview')
                }
            },
            {
                path: '/sales-enablement',
                name: 'sales-enablement',
                components: {
                    menuRouter: () => import('./views/resource/SalesEnablement')
                }
            }
        ]
    }
]

export default routes