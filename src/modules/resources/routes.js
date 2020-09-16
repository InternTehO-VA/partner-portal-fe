const routes = [
    {
        path: '/resources/overview',
        name: 'resources',
        component: () => import(/* webpackChunkName: "auth" */ './views/Overview'),
        meta: {
            title: 'Overview',
            public: false
        }
    }
]

export default routes