import Vue from 'vue'
import Vuex from 'vuex'

import marketInfo from './module/marketInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    marketInfo
  }
})
