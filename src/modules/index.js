import * as modules from './auth/store/index.js'
import * as moduleRoutes from './auth/routes.js'

/**
 * Automatically register vuex modules from any installed modules
 */
let routes = []
for (const key in moduleRoutes) {
  routes = routes.concat(moduleRoutes[key])
}

export {
  modules,
  routes
}
