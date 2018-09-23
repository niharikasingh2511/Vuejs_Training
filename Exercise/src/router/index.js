import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Exercise6 from '@/components/Exercise6'
import Exercise7 from '@/components/Exercise7'
import Exercise8 from '@/components/Exercise8'
import Exercise9 from '@/components/Exercise9'

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
  },
  {
    path: '/Exercise8',
    name: 'Exercise8',
    component: Exercise8
  },
  {
    path: '/Exercise9',
    name: 'Exercise9',
    component: Exercise9
  }
  ]
})
