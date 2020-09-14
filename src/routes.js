import Vue from 'vue'
import Router from 'vue-router'
import { routes as moduleRoutesTemp } from '@/modules'
import TokenService from '@/modules/auth/services/token.service';

Vue.use(Router)

let moduleRoutes = []

if (typeof moduleRoutesTemp !== 'undefined') {
  moduleRoutes = moduleRoutesTemp
}

const routes = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home')
    },
    ...moduleRoutes
  ]
})

// auth check before each route
routes.beforeEach(async (to, from, next) => {
  const loggedIn = !!TokenService.getToken()
  if (!loggedIn && to.name !== 'login') next({ name: 'login' })
  else next()
})

export default routes