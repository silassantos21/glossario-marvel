import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueMaterial from './vue-material'
import veeValidate from './vee-validate'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vueMaterial,
  veeValidate,
  render: h => h(App)
}).$mount('#app')
