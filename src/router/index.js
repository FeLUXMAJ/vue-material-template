import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import overview from '@/components/home/overview'
import friend from '@/components/home/friend'

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
