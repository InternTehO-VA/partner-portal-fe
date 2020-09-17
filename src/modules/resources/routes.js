const routes = [
    {
        path: '/resources',
        name: 'resources',
        component: () => import(/* webpackChunkName: "resources" */ './views/Index'),
        meta: {
            title: 'Resources',
            public: false
        },
        children: [
            {
                path:'overview',
                name: 'overview',
                component: () => import('./views/resource/Overview')
            },
            {
                path: 'sales-enablement',
                name: 'sales-enablement',
                components: () => import('./views/resource/SalesEnablement')
            }
        ]
    }
]

export default routes