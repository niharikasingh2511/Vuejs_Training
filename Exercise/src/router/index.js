import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Exercise6 from '@/components/Exercise6'
import Exercise7 from '@/components/Exercise7'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/Exercise6',
    name: 'Exercise6',
    component: Exercise6
  },
  {
    path: '/Exercise7',
    name: 'Exercise7',
    component: Exercise7
  }
  ]
})
