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
            },
            {
                path: 'technical-enablement',
                name: 'technical-enablement',
                components: () => ''
            },
            {
                path: 'guides',
                name: 'guides',
                components: () => ''
            },
            {
                path: 'slide-decks',
                name: 'slide-decks',
                components: () => ''
            },
            {
                path: 'marketing-materials',
                name: 'marketing-materials',
                components: () => ''
            },
        ]
    }
]

export default routes