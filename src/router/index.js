import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import home from '@/pages/home'
import overview from '@/pages/home/overview'
import friend from '@/pages/home/friend'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: login
  }, {
    path: '/home',
    name: 'home',
    component: home,
    children: [{
      path: '',
      name: 'overview',
      component: overview
    }, {
      path: 'friend',
      name: 'friend',
      component: friend
    }]
  }]
})
