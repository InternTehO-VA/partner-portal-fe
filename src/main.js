import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import './styles.scss'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueCarousel from 'vue-carousel'

Vue.use(VueMaterial)
Vue.use(VueCarousel)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
