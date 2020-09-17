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
                path: '/',
                redirect: 'overview'
            },
            {
                path:'overview',
                name: 'overview',
                component: () => import('./views/resource/Overview')
            },
            {
                path: 'sales-enablement',
                name: 'sales-enablement',
                component: () => import('./views/resource/SalesEnablement')
            },
            {
                path: 'technical-enablement',
                name: 'technical-enablement',
                component: () => ''
            },
            {
                path: 'guides',
                name: 'guides',
                component: () => ''
            },
            {
                path: 'slide-decks',
                name: 'slide-decks',
                component: () => ''
            },
            {
                path: 'marketing-materials',
                name: 'marketing-materials',
                component: () => ''
            },
        ]
    }
]

export default routes