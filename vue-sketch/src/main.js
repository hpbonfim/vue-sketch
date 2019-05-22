import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueFire from 'vuefire'
import './registerServiceWorker'
import '../firebase'

Vue.use(Vuetify)
Vue.use(VueFire)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
