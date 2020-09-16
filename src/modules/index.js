import * as modules from './auth/store/index'
import * as authRoutes from './auth/routes'
import * as resourcesRoutes from './resources/routes'

/**
 * Automatically register vuex modules from any installed modules
 */
let routes = []
for (const key in authRoutes) {
  routes = routes.concat(authRoutes[key])
}
for (const key in resourcesRoutes) {
  routes = routes.concat(resourcesRoutes[key])
}


export {
  modules,
  routes
}
