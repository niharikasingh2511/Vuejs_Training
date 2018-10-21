import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

import store from './store/store'

Vue.use(VueResource)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  render: h => h(App)
})
