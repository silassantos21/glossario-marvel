import Vue from 'vue'
import Vuex from 'vuex'

import Marvel from './modules/marvel'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Marvel
  }
})
