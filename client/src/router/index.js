import Vue from 'vue'
import Router from 'vue-router'

import auth from '@/auth'
import Header from '@/components/base_components/Header'
import Landing from '@/components/landing/Landing'
import Login from '@/components/landing/login'
import Signup from '@/components/landing/signup'
import UserSettings from '@/components/user/UserSettings'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/',
      components: {
        default: Landing,
        header: Header
      },
      meta: { requiresAuth: true }
    },
    {
      //user/:userId
      path: '/user',
      components: {
        default: UserSettings,
        header: Header
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.user.authenticated) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
