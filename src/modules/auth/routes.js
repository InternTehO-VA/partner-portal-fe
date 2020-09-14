const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "auth" */ './views/Login'),
    meta: {
      title: 'Login',
      public: true, // Allow access to even if not logged in
    }
  }
]

export default routes