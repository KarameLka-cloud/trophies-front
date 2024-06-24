import {createRouter, createWebHistory} from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: import('./components/auth/Login.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: import('./components/auth/Registration.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: import('./components/Dashboard.vue'),
      children: []
    },
  ]
})
